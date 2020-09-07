module.exports = (err, req, res, next) => {
    if (err) {
        const msg = err instanceof Error ? err.message : err;
        const status = 500
        res.status(status).send({
            code: status,
            msg
        })
    }
}