import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    platform: {
        type: String,
    },
    postText: {
        type: String,
    },
    author: {
        type: String,
    }
})

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;