import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Adicionado para navegação
import "../styles/BuscarChavePage.css";

const BuscarChavePage: React.FC = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(1);
  const [contractNumber, setContractNumber] = useState(""); // Agora começa vazio
  const [accessKey, setAccessKey] = useState("");

  const handleSearch = () => {
    if (!contractNumber.trim()) {
      alert("Por favor, informe um número de contrato válido.");
      return;
    }
    // Simula a busca da chave
    setAccessKey("uf/7ece4fgd4vt4848");
  };

  const handleBack = () => {
    navigate(-1); // Voltar para a página anterior
  };

  return (
    <Box className="calcule-facil-container">
      {/* Logo Calcule Fácil */}
      <Box className="logo-container">
        <Typography variant="h4" className="logo-calcule">Calcule</Typography>
        <Typography variant="h4" className="logo-facil">Fácil</Typography>
      </Box>

      {/* Container principal com fundo branco */}
      <Box className="main-container">
        {/* Navegação por abas */}
        <Box className="tabs-container">
          <Button className={`tab-button ${tabValue === 0 ? "active" : ""}`} onClick={() => setTabValue(0)}>Nova Chave</Button>
          <Button className={`tab-button ${tabValue === 1 ? "active" : ""}`} onClick={() => setTabValue(1)}>Histórico de chaves</Button>
          <Button className={`tab-button ${tabValue === 2 ? "active" : ""}`} onClick={() => setTabValue(2)}>Relatório</Button>
        </Box>

        {/* Conteúdo da aba "Histórico de chaves" */}
        {tabValue === 1 && (
          <Box className="search-content">
            {/* Botão grande de buscar chave */}
            <Button variant="contained" className="buscar-chave-button" onClick={handleSearch}>
              Buscar chave
            </Button>

            {/* Input do número de contrato */}
            <Box className="contract-input-container">
              <Box className="contract-label">Informe o número do contrato vinculado à chave</Box>
              <TextField
                value={contractNumber}
                onChange={(e) => setContractNumber(e.target.value)}
                variant="outlined"
                className="contract-input"
                placeholder="Digite o número do contrato"
              />
            </Box>

            {/* Botão Pesquisar */}
            <Button variant="contained" className="pesquisar-button" onClick={handleSearch}>
              pesquisar
            </Button>

            {/* Exibição da chave encontrada */}
            {accessKey && (
              <Box className="key-result-container">
                <Box className="key-label">Chave de acesso</Box>
                <TextField value={accessKey} InputProps={{ readOnly: true }} variant="outlined" className="key-value" />
              </Box>
            )}
          </Box>
        )}

        {/* Botão Voltar - agora clicável */}
        <Button className="voltar-button" onClick={handleBack}>
          voltar
        </Button>
      </Box>
    </Box>
  );
};

export default BuscarChavePage;