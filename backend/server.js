import express from "express";
import dotenv from "dotenv"
import rateLimit from "express-rate-limit";

dotenv.config();

import twitterRouter from "./routes/twitter.route.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const twitterLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per 15 minutes
    message: {
        success: false,
        message: "Too many requests, please try again later.",
    },
});

// Apply the rate limiter to the specific route
app.use("/api/v1/get-twitter-posts", twitterLimiter);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.use("/api/v1", twitterRouter);

app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working"
    });
})