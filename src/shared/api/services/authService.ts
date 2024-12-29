import { AxiosResponse } from "axios";
import { instance } from "../config";
import { AuthResponseType, UserDataType } from "shared/models";

const AuthService = {
  registration: async (userLogin: Required<UserDataType>): Promise<AxiosResponse<AuthResponseType>> => {
    return instance.post("/api/v1/users/registration", userLogin);
  },

  login: async (userLogin: UserDataType): Promise<AxiosResponse<AuthResponseType>> => {
    return instance.post("/api/v1/users/login", userLogin);
  },

  refreshAccessToken: (): Promise<AxiosResponse<AuthResponseType>> => {
    return instance.post("/api/v1/users/refresh-access-token");
  },

  getUser: (): Promise<AxiosResponse<AuthResponseType>> => {
    return instance.post("/api/v1/users/get-me")
  }

};

export default AuthService;
