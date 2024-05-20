import axios from "axios";

class HourService {
  constructor() {
    //this.baseUrl = `http://10.36.116.115:8080/hours`;
   /// this.baseUrl = `http://10.12.2.10:8080/hours`;
    this.baseUrl = `http://192.168.1.38:8080/hours`;
    //this.baseUrl = `http://10.11.56.20:8080/hours`;
  }
  async getHoursList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async getByIdHour(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async addHour(hour) {
    const url = `${this.baseUrl}/addHour`;
    return await axios
      .post(url, hour)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateHour(id, hour) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, hour).then((resp) => resp.data);
  }
  async deleteHour(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default HourService;
