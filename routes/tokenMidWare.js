const jwt = require('./jwt');
const needTokenApi = [
    { method: 'GET', path: '/api/admin/whoami' }
]

function handleNoToken(req, res, next) {
    res.status(403).send({
        code: 403,
        msg: 'you dont have any token to access the api'
    })
}

module.exports = (req, res, next) => {
    const apis = needTokenApi.filter(api => api.method === req.method && req.path === api.path)
    // console.log(apis)
    if (apis.length === 0) {
        next()
        return
    }
    const result = jwt.verify(req);
    // console.log(result)
    if(result){
        req.adminId = result.id;
        next()
    } else {
        handleNoToken(req, res, next)
    }
}