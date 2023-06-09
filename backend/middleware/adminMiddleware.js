const HttpError = require("../support/http-error");

exports.adminMiddleware = (req,res,next) => {
    console.log(req.user.rol);
    if(req.user.role == "admin") next();
    else {
        const error = new HttpError("your are not an admin",405);
        return next(error)
    }
}