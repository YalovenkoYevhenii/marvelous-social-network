module.exports = class UserDto {
  email;

  id;

  isActivated;

  firstName;

  lastName;

  avatar;

  friends;

  profession;

  education;

  city;

  birthDate;

  constructor(model) {
    this.email = model.email;
    this.userId = model._id;
    this.isActivated = model.isActivated;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.avatar = model.avatar;
    this.friends = model.friends;
    this.profession = model.profession;
    this.education = model.education;
    this.city = model.city;
    this.birthDate = model.birthDate;
  }
};
