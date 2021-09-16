const config = {
  s200friendsUserDeleted: 'User has been removed from friends list',
  s200friendsSendRequest: 'Your friend request was sent',
  s200friendsDeclineRequest: 'Friend request was declined',
  s200postsEdited: 'Post has been edited successfully',
  s200postsDeleted: 'Post has been deleted successfully',
  s200settingsEdited: 'Your personal properties were successfully changed',
  s200settingsDeleted: 'Your avatar has been deleted',
  s201friendsUserAdded: 'User has been added to friends list',
  s201postsCreated: 'Successfully created',
  s400defaultErrorMessage: 'Something went wrong',
  s400invalidEntriesSignUp: 'Incorrect entries for sign up',
  s400invalidEntriesSignIn: 'Invalid email or password',
  s400userAlreadyExist: 'User with this email already exists',
  s400incorrectActivationLink: 'We are sorry. But it seems you have got incorrect activation link',
  s400incorrectPath: 'Can not find specified path',
  s401errorMessage: 'User is unautorized',
  refreshTokenCookieConfig: { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true },
};

module.exports = config;
