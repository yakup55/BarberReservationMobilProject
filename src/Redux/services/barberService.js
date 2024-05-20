import axios from "axios";

class BarberService {
  constructor() {
   // this.baseUrl = `http://10.36.116.115:8080/barbers`;
    this.baseUrl = `http://192.168.1.38:8080/barbers`;
    ///this.baseUrl = `http://10.12.2.10:8080/barbers`;
   // this.baseUrl = `http://10.11.56.20:8080/barbers`;
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
