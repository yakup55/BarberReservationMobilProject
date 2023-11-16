import axios from "axios";

class HourService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/hours`;
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
