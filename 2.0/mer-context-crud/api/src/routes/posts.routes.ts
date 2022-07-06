import { Request, Response, Router } from "express";
import { createPost, getPost, getPosts } from "../controllers/posts.controller";

export const postsRouter = Router();

postsRouter.get('/posts', getPosts);
postsRouter.get('/posts/:id', getPost);

postsRouter.post('/posts/create', createPost);
