import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import UserModel from "../models/user.model.js";

export const register = catchAsyncError(async (req, res, next) => {
    try {
        const {userName, password} = req.body;

        const newUser = UserModel.create({
            userName,
            password,
        })

        res.status(201).json({
            success: true,
            newUser,
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }
}) 