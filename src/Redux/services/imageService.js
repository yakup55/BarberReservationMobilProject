import axios from "axios";

class ImageService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/images`;
  }
  async getImagesList() {
    const url = `${this.baseUrl}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async getByImageId(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.get(url).then((resp) => resp.data);
  }
  async addImage(image) {
    const url = `${this.baseUrl}/addImage`;
    return await axios.post(url, image).then((resp) => resp.data);
  }
  async updateImage(id, image) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.put(url, image).then((resp) => resp.data);
  }
  async deleteImage(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp.data);
  }
}
export default ImageService;
