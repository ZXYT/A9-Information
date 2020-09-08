const express = require('express');
const router = express.Router();
const adminServ = require('../../services/adminService')
const { asyncHandler } = require('../getSendResult')
const jwt = require('../jwt');

router.post('/login', asyncHandler(async (req, res) => {
    const { loginId, loginPwd } = req.body
    console.log(loginId, loginPwd)
    const result = await adminServ.login(loginId, loginPwd);
    if (result) {
        jwt.publish(res, undefined, { id: result.id })
    }
    return result;
}))

router.get('/whoami', asyncHandler(async (req, res) => {
    return await adminServ.getAdminById(req.adminId);
}))





router.post('/', asyncHandler(async (req, res) => {
    return await adminServ.addAdmin(req.body);
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    return await adminServ.deleteAdmin(req.params.id);
}))

router.put('/:id', asyncHandler(async (req, res) => {
    return await adminServ.updateAdmin(req.params.id, req.body);
}))

router.get('/', asyncHandler(async (req, res) => {
    return await adminServ.getAdmins();
}))

module.exports = router;