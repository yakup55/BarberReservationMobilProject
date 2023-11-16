import axios from "axios";

class CalendarService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/calendars`;
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
