class ErrorHandler extends Error{
    constructor(message,statuscode)
    {
        super(message)
        this.statuscode=statuscode
    }
}

export const errorMiddleware=(err,req,res,next)=>
{
    err.message=err.message || "Iternal Server Error";
    err.statuscode=err.statuscode || 500;
    return res.status(404).json({
        success:false,
    message:err.message,
    })
};

export default ErrorHandler;