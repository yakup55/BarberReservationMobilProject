import axios from "axios";

class AboutService {
  constructor() {
    this.baseUrl = `http://192.168.1.38:8080/abouts`;
   /// this.baseUrl = `http://10.12.2.10:8080/abouts`;
    //this.baseUrl = `http://10.36.116.115:8080/abouts`;
  }
  async getAboutsList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async getByIdAbout(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async addAbout(about) {
    const url = `${this.baseUrl}/addAbout`;
    return await axios
      .post(url, about)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateAbout(id, about) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, about).then((resp) => resp.data);
  }
  async deleteAbout(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default AboutService;
