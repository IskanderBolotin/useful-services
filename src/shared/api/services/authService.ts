import { AxiosResponse } from "axios";
import { instance } from "../config";
import { AuthResponse, UserDataType } from "shared/models";

const AuthService = {
  registration: async (userLogin: Required<UserDataType>): Promise<AxiosResponse<AuthResponse>> => {
    return instance.post("/api/v1/users/registration", userLogin);
  },

  login: async (userLogin: UserDataType): Promise<AxiosResponse<AuthResponse>> => {
    return instance.post("/api/v1/users/login", userLogin);
  },

  refreshAccessToken: (): Promise<AxiosResponse<AuthResponse>> => {
    return instance.post("/api/v1/users/refresh-access-token");
  },

  getUser: (): Promise<AxiosResponse<AuthResponse>> => {
    return instance.post("/api/v1/users/get-me")
  }

};

export default AuthService;
