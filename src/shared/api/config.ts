import axios from "axios";

const BASE_URL = "https://api.mpprice.ru/";

export const instance = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
});

// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("app_token")}`
    return config
  }
)

// создаем перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
// и переотправить запрос с обновленным accessToken
instance.interceptors.response.use(
  // в случае валидного accessToken ничего не делаем:
  (config) => {
    return config;
  },
  // в случае просроченного accessToken пытаемся его обновить:
  async (error) => {
   // предотвращаем зацикленный запрос, добавляя свойство _isRetry 
   const originalRequest = {...error.config};
   originalRequest._isRetry = true; 
    if (
      // проверим, что ошибка именно из-за невалидного accessToken
      error.response.status === 401 && 
      // проверим, что запрос не повторный
      error.config &&
      !error.config._isRetry
    ) {
      try {
        // запрос на обновление токенов
        const response = await instance.post("/api/v1/users/refresh-access-token");
        // сохраняем новый accessToken в localStorage
        localStorage.setItem("app_token", response.data.data.access_token);
        // переотправляем запрос с обновленным accessToken
        return instance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR");
      }
    }
    // на случай, если возникла другая ошибка (не связанная с авторизацией)
    // пробросим эту ошибку 
    throw error;
  }
);