import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import PostModel from "../models/post.model.js";

export const createPost = catchAsyncError(async (req, res, next) => {
    try {
        const {platform, postText, author} = req.body;

        const newPost = PostModel.create({
            platform,
            postText,
            author,
        })

        res.status(201).json({
            success: true,
            message: "New post has been created",
            newPost
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }
});

export const getAllPost = catchAsyncError(async(req, res, next) => {
    try {
        const posts = await PostModel.find();

        res.status.json({
            success: true,
            posts,
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }
})