const md5 = require('md5');
const Admin = require('../modules/Admin');

function filter(result) {
    let data = null
    if (result) {
        const { id, loginId } = result;
        data = {
            id,
            loginId
        }
    }
    return data
}

exports.addAdmin = async function (adminObj) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
    const result = await Admin.create(adminObj);
    return filter(result.toJSON())
}

exports.deleteAdmin = async function (loginId) {
    const result = await Admin.destroy({
        where: {
            id: loginId
        }
    })
    return result
}

exports.updateAdmin = async function (loginId, adminObj) {
    if (adminObj.loginPwd) {
        adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    const result = await Admin.update(adminObj, {
        where: {
            id: loginId
        }
    })
    return result
}

exports.getAdminById = async function (loginId) {
    const result = await Admin.findByPk(loginId);
    if (result) {
        return filter(result.toJSON())
    }
    return null
}

exports.getAdmins = async function () {
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result))
}

exports.login = async function (loginId, loginPwd) {
    loginPwd = md5(loginPwd)
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    });
    if (result && result.loginId === loginId) {
        return filter(result.toJSON())
    }
    return null
}