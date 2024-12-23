import { Button, Grid2, TextField } from "@mui/material";
import { Context } from "app/app";
import { useContext, useState } from "react";

const LoginForm: React.FC = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Grid2
      container
      direction="column"
      columns={24}
      alignItems="center"
      spacing={1}
    >
      <Grid2 size={24}>
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
      </Grid2>
      <Grid2 size={24}>
        <TextField
          required
          id="password"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
      </Grid2>
      <Grid2 size={24}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
          size="large"
          onClick={() =>
            store.login({
              email,
              password,
            })
          }
        >
          Войти
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default LoginForm;
