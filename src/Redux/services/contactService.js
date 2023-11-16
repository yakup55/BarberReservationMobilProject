import axios from "axios";

class ContactsService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/contacts`;
  }
  async getContactsList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getContactById(id) {
    const url = `${this.baseUrl}/${id}`;
    return (await axios.get(url)).then((resp) => resp.data);
  }
  async addContact(contact) {
    const url = `${this.baseUrl}/addContact`;
    return await axios
      .post(url, contact)
      .then((resp) => {
        return { status: resp.status, data: resp.data };
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  }

  async updateContact(id, contact) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, contact).then((resp) => resp.data);
  }
  async deleteContact(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default ContactsService;
