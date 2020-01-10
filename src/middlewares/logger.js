const logger = (req, res, next) => {
    console.log('Datetime', Date.now());
    console.log(req);
    console.log('Request Type: ', req.method);
    console.log('Request Path: ', req.path);
    next();
};

export default logger