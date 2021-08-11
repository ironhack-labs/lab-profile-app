exports.catchError = (controller) => {
    return(req, res, next) => {
        controller(req, res).catchError(error => next(error))
    }
};