import { makeAutoObservable } from "mobx";
import AuthService from "shared/api/services/authService";
import ProductService from "shared/api/services/productService";
import { ProductsFilterType, UserDataType } from "shared/models";

export default class Store {
  user = {} as UserDataType;
  isAuth = false;
  myProductsList: any[] = [];

  constructor() {
    makeAutoObservable(this);
  };

  setAuth(value: boolean) {
    this.isAuth = value;
  };

  setUser(user: UserDataType) {
    this.user = user;
  };

  setProductsList(products: any[]) {
    this.myProductsList = products;
  }

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
      localStorage.setItem("app_token", response.data.data.access_token);
      this.setAuth(true);
    } catch (e) {
      console.log(e)
    }
  }

  async loadMyProducts(data: ProductsFilterType) {
    try {
      const response = await ProductService.loadMyProducts(data);
      this.setProductsList(response.data.data);
    } catch (e) {
      console.log(e)
    }
  }
}
