import { makeAutoObservable } from "mobx";
import AuthService from "shared/api/services/authService";
import { UserDataType } from "shared/models";

export default class Store {
  user = {} as UserDataType;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  };

  setAuth(value: boolean) {
    console.log("setAuth", value)
    this.isAuth = value;
  };

  setUser(user: UserDataType) {
    this.user = user;
  };

  async registration(userLogin: Required<UserDataType>) {
    try {
      const response = await AuthService.registration(userLogin);
      localStorage.setItem("app_token", response.data.data.access_token);
      this.setAuth(true);
    } catch (e) {
      console.log(e)
    }
  };

  async login(userLogin: UserDataType) {
    try {
      const response = await AuthService.login(userLogin);
      localStorage.setItem("app_token", response.data.data.access_token);
      this.setAuth(true);
    } catch (e) {
      console.log(e)
    }
  };

  async checkAuth() {
    try {
      const response = await AuthService.refreshAccessToken();
      console.log("response", response)
      localStorage.setItem("app_token", response.data.data.access_token);
      this.setAuth(true);
    } catch (e) {
      console.log(e)
    }
  }
}
