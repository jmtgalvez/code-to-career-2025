import express from "express"
import {createPost, getAllPost} from "../controllers/post.controller.js"

const postRoute = express.Router();

postRoute.post("/create-post", createPost);

postRoute.get("/get-all-posts", getAllPost)

export default postRoute;