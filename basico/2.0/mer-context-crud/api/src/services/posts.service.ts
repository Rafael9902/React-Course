import Post from "../models/Post";

const getPosts = () => Post.find();
const getPost = (id: string) => Post.findById(id);

const createPost = async(body: {title: string, description: string}) => {
    const newPost = new Post (body);

    await newPost.save();

    return newPost;
}

const updatePost = async(id: string, body: any) => Post.findByIdAndUpdate(id, body, {new: true});

const deletePost = async(id: string) => Post.findByIdAndDelete(id);

export const postService = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}