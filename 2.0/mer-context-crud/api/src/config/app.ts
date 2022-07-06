import express from "express";
import { postsRouter } from "../routes/posts.routes";

export const app = express();

app.use(express.json());

app.use(postsRouter);