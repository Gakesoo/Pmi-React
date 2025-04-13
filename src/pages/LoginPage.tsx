import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Box className="login-container">
      <Typography variant="h4" style={{ marginBottom: "20px", fontWeight: "bold" }}>
        Login
      </Typography>
      <TextField label="Email" variant="outlined" fullWidth className="login-field" />
      <TextField label="Senha" type="password" variant="outlined" fullWidth className="login-field" />
      <Button
        variant="contained"
        fullWidth
        className="login-button"
        onClick={() => navigate("/dashboard")}
      >
        ENTRAR
      </Button>
      <Button
        variant="outlined"
        fullWidth
        className="login-back-button"
        onClick={() => navigate("/")}
      >
        Voltar
      </Button>
      <Box className="login-options">
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleCheckboxChange}
              style={{ color: "white" }}
            />
          }
          label={<Typography style={{ color: "white" }}>Lembrar senha</Typography>}
        />
        <Link
          className="login-link"
          onClick={() => navigate("/forgot-password")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          Esqueceu a senha?
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;