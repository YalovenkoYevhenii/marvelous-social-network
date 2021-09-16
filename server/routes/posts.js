const { Router } = require('express');

const PostsController = require('../controllers/PostsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const postsRouter = Router();

postsRouter.get('/', AuthMiddleware, PostsController.getFriendsPosts);
postsRouter.get('/:userId', AuthMiddleware, PostsController.getUserPosts);
postsRouter.post('/add_post', AuthMiddleware, PostsController.addPost);
postsRouter.patch('/edit_post', AuthMiddleware, PostsController.editPost);
postsRouter.delete('/delete_post', AuthMiddleware, PostsController.deletePost);

module.exports = postsRouter;
