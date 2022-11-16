import { Request, Response } from "express";
import { postService } from "../services/posts.service";

export const getPosts = async(_req: Request, _res: Response) => {
    const posts = await postService.getPosts();

    _res.send(posts);
}

export const getPost = async(_req: Request, _res: Response) => {
    const post = await postService.getPost(_req.params.id);

    if(!post) _res.sendStatus(404);

    _res.json(post);
}

export const createPost = async(_req: Request, _res: Response) => {
    const { title, description } = _req.body;
    const newPost = await postService.createPost({title, description});

    _res.json(newPost);
}

export const updatePost = async(_req: Request, _res: Response) => {
    const post = await postService.updatePost(_req.params.id, _req.body);
    
    _res.json(post);
}

export const deletePost = async(_req: Request, _res: Response) => {
    const post = await postService.deletePost(_req.params.id);

    if(!post) _res.sendStatus(404);

    return _res.sendStatus(204);
}
