function getResult(data) {
    return {
        code: "0",
        msg: "ok",
        data
    }
}

exports.asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
            const result = await handler(req, res, next)
            res.send(getResult(result))
        } catch (err) {
            next(err)
        }
    }
}