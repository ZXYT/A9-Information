const secrect = "CO6%RH0MIBbLZjHf";
const jwt = require('jsonwebtoken');

exports.publish = (res, maxAge = 3600 * 24, info = {}) => {
    const token = jwt.sign(info, secrect, {
        expiresIn: maxAge
    })

    res.header('authorization', token)
}

exports.verify = (req) => {
    let token = req.headers.authorization;
    if (!token) {
        return null
    }
    token = token.split(' ');
    token = token.length === 1 ? token[0] : token[1];

    try {
        const result = jwt.verify(token, secrect);
        return result
    } catch (err) {
        return null
    }
}