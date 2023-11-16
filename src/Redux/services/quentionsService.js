import axios from "axios";

class QuentionsService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/quentions`;
  }
  async getQuentionsList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getQuentionById(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addQuention(quention) {
    const url = `${this.baseUrl}/addQuention`;
    return await axios
      .post(url, quention)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateQuention(id, quention) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, quention).then((resp) => resp.data);
  }
  async deleteQuention(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default QuentionsService;
