import md5 from "md5";
import Admin, { IAdmin, IAdminCreation } from "../modules/Admin";

function filter(result: any) {
  let data: any = null;
  if (result) {
    const { id, loginId } = result;
    data = {
      id,
      loginId,
    };
  }
  return data;
}

export default class AdminService {
  static async addAdmin(adminObj: IAdminCreation) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
    const result = await Admin.create(adminObj);
    return filter(result.toJSON());
  }
  static async deleteAdmin(id: string) {
    const result = await Admin.destroy({
      where: {
        id,
      },
    });
    return result;
  }
  static async updateAdmin(id: number, adminObj: Partial<IAdmin>) {
    if (adminObj.loginPwd) {
      adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    const result = await Admin.update(adminObj, {
      where: {
        id,
      },
    });
    return result;
  }
  static async getAdminById(id: number) {
    const result = await Admin.findByPk(id);
    if (result) {
      return filter(result.toJSON());
    }
    return null;
  }
  static async getAdmins() {
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result));
  }
  static async login(loginId: string, loginPwd: string) {
    loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
      where: {
        loginId,
        loginPwd,
      },
    });
    console.log(result);

    if (result && result.loginId === loginId) {
      return filter(result.toJSON());
    }
    return null;
  }
}
