import axios from "axios";
import AuthService from "./AuthService";

const base_url = "http://34.125.26.36:9999/proxy-city";

class CityService {
  getCityList() {
    return axios.get(`${base_url}/getCityList`, {
      headers: {
        Authorization: `Bearer ${AuthService.getToken()}`,
      },
    });
  }
  createCity(city) {
    return axios.post(base_url, city);
  }
}
export default new CityService();
