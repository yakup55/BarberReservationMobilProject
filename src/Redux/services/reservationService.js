import axios from "axios";

class ReservationService {
  constructor() {
    //this.baseUrl = `http://10.36.116.115:8080/reservations`;
   /// this.baseUrl = `http://10.12.2.10:8080/reservations`;
    this.baseUrl = `http://192.168.1.38:8080/reservations`;
    // this.baseUrl = `http://10.11.56.20:8080/reservations`;
  }
  async getReservationsList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async getByIdReservation(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async getUserId(userId) {
    const url = `${this.baseUrl}/user/${userId}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getBarberId(barberId) {
    const url = `${this.baseUrl}/barber/${barberId}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getStatusActive(id) {
    const url = `${this.baseUrl}/active/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getStatusPasive(id) {
    const url = `${this.baseUrl}/pasive/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async check(barberId, hourId, date) {
    const url = `${this.baseUrl}/check/${barberId}/${hourId}/${date}`;
    return await axios
      .get(url)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async addReservation(reservation) {
    const url = `${this.baseUrl}/addReservation`;
    return await axios
      .post(url, reservation)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateReservation(id, reservation) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, reservation).then((resp) => resp.data);
  }
  async deleteReservation(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default ReservationService;
