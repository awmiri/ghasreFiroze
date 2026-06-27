import jwt from "jsonwebtoken";

export const isLogin = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        // console.log(token);

        const {
            role,
            phoneNumber,
            id,
            permission

        } = jwt.verify(token, process.env.JWT_SECRET);
        req.phoneNumber = phoneNumber;
        req.role = role;
        req.id = id;
        req.permission = permission || [];
        return next();
    } catch (error) {
        return res.status(401).json({
            message: "you dont have permission",
            success: false,
        });
    }
};

