import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-23-23-55-166.compute-1.amazonaws.com:8081/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
