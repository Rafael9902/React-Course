import { Request, Response } from "express"

export const getPosts = (_req: Request, _res: Response) => {
    _res.send('hello there');
}

export const getPost = (_req: Request, _res: Response) => {
    _res.send('hello there id');
}

export const createPost = (_req: Request, _res: Response) => {
    _res.send('post created');
}
