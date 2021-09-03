const PostsService = require('../services/PostsService');

class PostsController {
  async getFriendsPosts(req, res, next) {
    try {
      const { userId } = req.user;
      const { page = 1, limit = 5 } = req.query;

      const friendsPosts = await PostsService.getFriendsPosts(userId, page, limit);

      return res.status(200).json(friendsPosts);
    } catch (e) {
      next(e);
    }
  }

  async getUserPosts(req, res, next) {
    try {
      const { userId } = req.params;
      const { page = 1, limit = 5 } = req.query;
      const userPosts = await PostsService.getUserPosts(userId, page, limit);
      return res.status(200).json(userPosts);
    } catch (e) {
      next(e);
    }
  }

  async addPost(req, res, next) {
    try {
      const { body, time } = req.body;
      const { userId } = req.user;
      await PostsService.addPost(userId, body, time);
      return res.status(201).send('Successfully created');
    } catch (e) {
      next(e);
    }
  }

  async editPost(req, res, next) {
    try {
      const { userId } = req.user;
      const { postId, body } = req.body;
      await PostsService.editPost(userId, postId, body);
      return res.status(200).send('Post has been edited successfully');
    } catch (e) {
      next(e);
    }
  }

  async deletePost(req, res, next) {
    try {
      const { userId } = req.user;
      const { postId } = req.body;
      await PostsService.deletePost(userId, postId);
      return res.status(200).send('Post has been deleted successfully');
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PostsController();