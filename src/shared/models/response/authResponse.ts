export type AuthResponseType = {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
  };
  errors: any;
};
