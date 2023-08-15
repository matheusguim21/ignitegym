import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.131.218:3333",
});

// api.interceptors.request.use(
//   (request) => {
//     console.log("INTERCEPTOR:", request.data);

//     return request;
//   },
//   (error) => {
//     console.log("INTERCEPTOR REQUEST ERROR: ", error);
//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      console.log(error.message);
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(
        new AppError("Erro no servidor. Tente novamente mais tarde")
      );
    }
  }
);

export { api };
