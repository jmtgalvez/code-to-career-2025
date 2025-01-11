import { catchAsyncError } from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../utils/ErrorHandler.js"
import { TwitterApi } from "twitter-api-v2"
import NodeCache from "node-cache";

import dotenv from "dotenv";

const cache = new NodeCache({ stdTTL: 900, checkperiod: 120 });

dotenv.config()

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET_KEY,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

export const getPostByHashtag = catchAsyncError(async (req, res, next) => {
    try {
        
        const {hashtag} = req.query;

        if (!hashtag) {
            return next(new ErrorHandler("Hashtag is required", 400));
        }

        // Check cache
        const cachedTweets = cache.get(hashtag);
        if (cachedTweets) {
            return res.status(200).json({
                success: true,
                message: "Successfully retrieved data from cache",
                tweets: cachedTweets,
            });
        }
    
        const tweets = await client.v2.search(`#${hashtag}`, {
            "tweet.fields": ["created_at", "text", "author_id"],
            max_results: 10,
        });

        // Cache the result
        cache.set(hashtag, tweets);

        // Check rate-limit headers
        const rateLimitRemaining = tweets._headers.get("x-rate-limit-remaining");
        const rateLimitReset = tweets._headers.get("x-rate-limit-reset");

        if (rateLimitRemaining === "0") {
            const resetTime = new Date(rateLimitReset * 1000);
            console.warn(`Rate limit exceeded. Try again after: ${resetTime}`);
            return next(new ErrorHandler("Rate limit exceeded. Please try again later.", 429));
        }
    
        res.status(200).json({
            success: true,
            message: "Successfully retrieve data",
            tweets,
        });
    } catch (error) {
       return next(new ErrorHandler(error.message, 400)) 
    }
})