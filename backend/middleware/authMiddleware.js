import User from "../models/User.js";

//Middleware to check if user is authenicated
export const protect = async (req, res, next) => {
    try {
        const { userId } = req.auth();

        if (!userId) {
            return res.status(401).json({ success: false, message: "not authenticated" });
        }

        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(401).json({ success: false, message: "user not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        return res.status(500).json({ success: false, message: "authentication error" });
    }
}