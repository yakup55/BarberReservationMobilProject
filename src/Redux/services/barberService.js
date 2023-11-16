import axios from "axios";

class BarberService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/barbers`;
  }

  async getBarbersList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByIdBarber(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addBarber(barber) {
    const url = `${this.baseUrl}/addBarber`;
    return await axios
      .post(url, barber)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async barberRegister(barber) {
    const url = `${this.baseUrl}/register`;
    return await axios
      .post(url, barber)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }
  async barberLogin(barber) {
    const url = `${this.baseUrl}/login`;
    return await axios
      .post(url, barber)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateBarberPassword(barber) {
    const url = `${this.baseUrl}/updatebarberpassword`;
    return await axios
      .put(url, barber)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateBarber(id, barber) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, barber).then((resp) => resp.data);
  }
  async deleteBarber(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default BarberService;
