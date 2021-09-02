const User = require('../models/User');
const Post = require('../models/Post');
const ApiError = require('../exceptions/ApiError');
const PaginationService = require('./PaginationService');

class PostsService {
  async getFriendsPosts(userId, page, limit) {
    const { friends } = await User.findById(userId);
    const options = { userId: { $in: friends } };

    const arrOfFriendsPosts = await PaginationService.getPaginatedData(Post, options, page, limit);

    return arrOfFriendsPosts;
  }

  async addPost(userId, body, time) {
    await Post.create({ userId, body, time });
  }

  async getUserPosts(userId, page, limit) {
    const options = { userId };

    const userPosts = await PaginationService.getPaginatedData(Post, options, page, limit);
    return userPosts;
  }

  async editPost(userId, postId, body) {
    const post = await Post.findById(postId);
    if (!post.userId === userId) throw ApiError.UnautorizedError();

    post.body = body;
    await post.save();
  }

  async deletePost(userId, postId) {
    const post = await Post.findById(postId);
    if (!post.userId === userId) throw ApiError.UnautorizedError();

    await Post.deleteOne({ postId });
  }
}

module.exports = new PostsService();
