import { api } from "@/boot/axios";
import { router } from "@/router";

export default {
  async get(payload, sendJWT = false) {
    // var config = {
    //   headers: sendJWT
    //     ? {
    //         Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    //       }
    //     : {},
    // };
    let { query } = payload;
    query = transformToParamsString(query);
    return new Promise((resolve, reject) => {
      api
        .get(`${payload.path}${query}`, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            sessionStorage.removeItem("token");
            router.push({ name: "iniciarSesion" });
          } else {
            reject(error);
          }
        });
    });
  },
  async post(payload, sendJWT = false) {
    // var config = {
    //   headers: sendJWT
    //     ? {
    //         Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    //       }
    //     : {},
    // };
    let { query } = payload;
    // query = transformToParamsString(query);
    return new Promise((resolve, reject) => {
      api
        .post(`${payload.path}${query}`, payload.data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            sessionStorage.removeItem("token");
            router.push({ name: "iniciarSesion" });
          } else {
            reject(error);
          }
        });
    });
  },
};
