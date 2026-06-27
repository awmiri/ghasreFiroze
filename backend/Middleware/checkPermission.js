export const checkPermission = (pr) => {
    return async (req, res, next) => {
        try {
            if (req.permission && req.permission.includes(pr)) {
                console.log(req.permission);

                return next();
            }
            return res.status(401).json({
                message: "you dont have permission",
                success: false,
            });
        } catch (error) {
            return res.status(401).json({
                message: "you dont have permission",
                success: false,
            });
        }
    };
};
