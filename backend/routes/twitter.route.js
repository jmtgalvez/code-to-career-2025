import express from "express";
import {getPostByHashtag} from "../controllers/twitter.controller.js"

const twitterRouter = express.Router();

twitterRouter.get("/get-twitter-posts", getPostByHashtag);

export default twitterRouter;