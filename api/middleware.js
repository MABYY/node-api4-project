function logger (req, res, next) {
    const timeStamp = new Date();
    console.log(req.method, req.orginalUrl, timeStamp);
    next();
}

module.exports = {
    logger,
};