import axios from "axios";

class ContactsService {
  constructor() {
   // this.baseUrl = `http://10.36.116.115:8080/contacts`;
   this.baseUrl = `http://192.168.1.38:8080/contacts`;
   ///this.baseUrl = `http://10.12.2.10:8080/contacts`;
    //this.baseUrl = `http://10.11.56.20:8080/contacts`;
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
