import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
// Removido o ContentCopyIcon que estava causando erros
import "../styles/DashboardPage.css";

const DashboardPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [contractNumber, setContractNumber] = useState("48754651488");
  const [accessKey, setAccessKey] = useState("");

  const handleGenerateKey = () => {
    // Usa a chave exata mostrada na imagem
    const generatedKey = "uf/7ece4fgd4vt4848";
    setAccessKey(generatedKey);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(accessKey);
    alert("Chave copiada para a área de transferência!");
  };

  return (
    <Box className="calcule-facil-container">
      {/* Logo Calcule Fácil */}
      <Box className="logo-container">
        <Typography variant="h4" className="logo-calcule">
          Calcule
        </Typography>
        <Typography variant="h4" className="logo-facil">
          Fácil
        </Typography>
      </Box>

      {/* Container principal com fundo branco */}
      <Box className="main-container">
        {/* Navegação por abas */}
        <Box className="tabs-container">
          <Button 
            className={`tab-button ${tabValue === 0 ? 'active' : ''}`}
            onClick={() => setTabValue(0)}
          >
            Nova Chave
          </Button>
          <Button 
            className={`tab-button ${tabValue === 1 ? 'active' : ''}`}
            onClick={() => setTabValue(1)}
          >
            Histórico de chaves
          </Button>
          <Button 
            className={`tab-button ${tabValue === 2 ? 'active' : ''}`}
            onClick={() => setTabValue(2)}
          >
            Relatório
          </Button>
        </Box>

        {/* Conteúdo da aba "Nova Chave" */}
        {tabValue === 0 && (
          <Box className="key-content">
            {/* Botão grande de gerar chave */}
            <Button 
              variant="contained" 
              className="gerar-chave-button"
              onClick={handleGenerateKey}
            >
              Gerar chave de acesso
            </Button>

            {/* Input do número de contrato */}
            <Box className="contract-input-container">
              <Box className="contract-label">
                Informe o número do contrato vinculado à chave
              </Box>
              <TextField
                value={contractNumber}
                onChange={(e) => setContractNumber(e.target.value)}
                variant="outlined"
                className="contract-input"
              />
            </Box>

            {/* Botão Gerar */}
            <Button
              variant="contained"
              className="gerar-button"
              onClick={handleGenerateKey}
            >
              Gerar
            </Button>

            {/* Exibição da chave gerada */}
            {accessKey && (
              <Box className="key-result-container">
                <Box className="key-label">
                  Chave de acesso
                </Box>
                <TextField
                  value={accessKey}
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  className="key-value"
                />
                <Button
                  variant="contained"
                  className="copy-button"
                  onClick={handleCopyKey}
                >
                  Copiar
                </Button>
              </Box>
            )}
          </Box>
        )}

        {/* Botão Voltar */}
        <Button className="voltar-button">
          Voltar
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardPage;