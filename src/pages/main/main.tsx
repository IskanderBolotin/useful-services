import { Button, Grid2, Paper } from "@mui/material";
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
        <Grid2 size={6}>
          <Paper sx={{ p: 3 }}>
            {isRegister ? <LoginForm /> : <AuthForm />}
            <Grid2 container columns={24} spacing={1} sx={{ marginTop: "16px"}}>
              <Grid2 size={12}>
                <Button
                  sx={{
                    width: "100%",
                  }}
                  size="small"
                  onClick={() => {
                    setIsRegister(true);
                  }}
                  disabled={isRegister}
                >
                  Есть аккаунт
                </Button>
              </Grid2>
              <Grid2 size={12}>
                <Button
                  sx={{
                    width: "100%",
                  }}
                  size="small"
                  onClick={() => {
                    setIsRegister(false);
                  }}
                  disabled={!isRegister}
                >
                  Регистрация
                </Button>
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
};

export default observer(Main);
