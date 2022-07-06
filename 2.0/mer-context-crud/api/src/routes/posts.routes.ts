import { Request, Response, Router } from "express";
import { check } from "express-validator";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controllers/posts.controller";

export const postsRouter = Router();

postsRouter.get('/posts', getPosts);
postsRouter.get('/posts/:id', getPost);

postsRouter.post('/posts/create', [
    check('title', 'title is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty()
], createPost);

postsRouter.put('/posts/:id', updatePost);
postsRouter.delete('/posts/:id', deletePost)
