import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-cf8e5.firebaseio.com/",
});

export default instance;
