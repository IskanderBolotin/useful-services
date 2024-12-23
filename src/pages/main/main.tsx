import { Button, Grid2 } from "@mui/material";
import { Context } from "app/app";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppPath } from "shared/config";
import AuthForm from "shared/ui/authForm";
import LoginForm from "shared/ui/loginForm";

const Main: React.FC = () => {
  const { store } = useContext(Context);
  const [isRegister, setIsRegister] = useState(false);
  let navigate = useNavigate();
  const isAuth = store.isAuth;

  useEffect(() => {
    if (isAuth) {
      navigate(AppPath.Products);
    }
  }, [isAuth]);

  return (
    <>
      <Grid2
        container
        direction="column"
        columns={24}
        alignItems="center"
        spacing={1}
      >
        <Grid2 size={12}>
          <Grid2 container columns={24}>
            <Grid2 size={24}>
              <Button
                sx={{
                  width: "100%",
                  marginBottom: "5px",
                }}
                size="large"
                onClick={() => {
                  setIsRegister((value) => !value);
                }}
              >
                {isRegister ? "Регистрация" : "Есть аккаунт"}
              </Button>
            </Grid2>
          </Grid2>
          {isRegister ? <LoginForm /> : <AuthForm />}
        </Grid2>
      </Grid2>
    </>
  );
};

export default observer(Main);
