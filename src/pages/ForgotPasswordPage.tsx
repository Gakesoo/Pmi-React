import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.email === "ads61@exemplo.com" && formData.password === "ads61") {
      alert("Senha alterada com sucesso!");
      navigate("/login");
    } else {
      alert("Dados inválidos. Tente novamente.");
    }
  };

  return (
    <Box className="forgot-password-container">
      <Typography variant="h4" style={{ marginBottom: "20px", fontWeight: "bold" }}>
        Mudar Senha
      </Typography>
      <TextField
        label="Nome Completo"
        name="name"
        variant="outlined"
        fullWidth
        className="forgot-password-field"
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        className="forgot-password-field"
        onChange={handleChange}
      />
      <TextField
        label="Senha"
        name="password"
        type="password"
        variant="outlined"
        fullWidth
        className="forgot-password-field"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        fullWidth
        className="forgot-password-button"
        onClick={handleSubmit}
      >
        Mudar Senha
      </Button>
      <Button
        variant="outlined"
        fullWidth
        className="forgot-password-back-button"
        onClick={() => navigate("/login")}
      >
        Voltar
      </Button>
    </Box>
  );
};

export default ForgotPasswordPage;