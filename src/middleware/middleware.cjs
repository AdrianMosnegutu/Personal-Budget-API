// eslint-disable-next-line no-unused-vars
function handleError(err, _req, res, _next) {
    const status = err.status || 500;
    res.status(status).send(err.message);
}
