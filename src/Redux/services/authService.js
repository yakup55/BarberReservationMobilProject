import axios from "axios";

class AuthService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/auths`;
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
