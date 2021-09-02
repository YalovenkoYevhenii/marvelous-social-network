const bcrypt = require('bcrypt');
const uuid = require('uuid');

const UserDto = require('../dtos/UserDto');
const User = require('../models/User');
const ApiError = require('../exceptions/ApiError');

const MailService = require('./MailService');
const TokenService = require('./TokenService');

class AuthService {
  async signUp(firstName, lastName, email, password) {
    const candidate = await User.findOne({ email });
    if (candidate) throw ApiError.BadRequest('User with this email already exists');

    const hashedPassword = await bcrypt.hash(password, 8);
    const activationLink = uuid.v4();
    const user = await User.create({
      firstName, lastName, email, password: hashedPassword, activationLink,
    });

    await MailService.sendActivationMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`);

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink });
    if (!user) throw new ApiError.BadRequest('We are sorry. But it seems you have got incorrect activation link');

    user.isActivated = true;
    await user.save();
  }

  async signIn(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw ApiError.BadRequest('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw ApiError.BadRequest('Invalid email or password');

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async signOut(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) throw ApiError.UnautorizedError();

    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) throw ApiError.UnautorizedError();

    const user = User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

module.exports = new AuthService();
