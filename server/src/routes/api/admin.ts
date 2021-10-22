import express from "express";
import adminServ from "../../services/adminService";
import { asyncHandler } from "../getSendResult";
import * as jwt from "../jwt";

const router = express.Router();
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { loginId, loginPwd } = req.body;
    const result: any = await adminServ.login(loginId, loginPwd);
    if (result) {
      jwt.publish(res, undefined, { id: result.id });
    }
    return result;
  })
);

router.get(
  "/whoami",
  asyncHandler(async (req, res) => {
    return await adminServ.getAdminById(req.adminId);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    return await adminServ.addAdmin(req.body);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    return await adminServ.deleteAdmin(req.params.id);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    return await adminServ.updateAdmin(req.params.id, req.body);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    return await adminServ.getAdmins();
  })
);

export default router;
