import axios from "axios";

class CalendarService {
  constructor() {
    //this.baseUrl = `http://10.36.116.115:8080/calendars`;
    this.baseUrl = `http://192.168.1.38:8080/calendars`;
   /// this.baseUrl = `http://10.12.2.10:8080/calendars`;
    //this.baseUrl = `http://10.11.56.20:8080/calendars`;
  }
  async getCalendarsList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getCalendarById(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addCalendar(calendar) {
    const url = `${this.baseUrl}/addCalendar`;
    return await axios
      .post(url, calendar)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateCalendar(id, calendar) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, calendar).then((resp) => resp.data);
  }
  async deleteCalendar(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default CalendarService;
