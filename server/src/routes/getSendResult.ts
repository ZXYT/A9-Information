function getResult(data: any) {
  return {
    code: "0",
    msg: "ok",
    data,
  };
}

export const asyncHandler = (handler) => {
  return async (req, res, next) => {
    try {
      const result = await handler(req, res, next);
      res.send(getResult(result));
    } catch (err) {
      next(err);
    }
  };
};
