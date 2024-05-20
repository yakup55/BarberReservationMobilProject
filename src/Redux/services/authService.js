import axios from "axios";

class AuthService {
  constructor() {
    //this.baseUrl = `http://10.36.116.115:8080/auths`;
    this.baseUrl = `http://192.168.1.38:8080/auths`;
   /// this.baseUrl = `http://10.12.2.10:8080/auths`;
   // this.baseUrl = `http://10.11.56.20:8080/auths`;
  }

  async register(auth) {
    const url = `${this.baseUrl}/register`;
    return await axios
      .post(url, auth)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }
  async login(login) {
    const url = `${this.baseUrl}/login`;
    return await axios
      .post(url, login)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }
}
export default AuthService;
