// ErrorHandler
const errorHandler = (err, req, res, next) => {
    // assigning a 500 status if no err status 
    const errStatus = err.statusCode || 500;
    // assigning a message if no err message
    const errMsg = err.message || "Something went wrong";
    // sending response 
    res.status(errStatus).json({
        status: false,
        message: errMsg,
    });
    next();
};



module.exports = errorHandler;