import React, { useState } from 'react';
import '../styles/DashboardPage.css';

const NovaChavePage: React.FC = () => {
  const [contractNumber, setContractNumber] = useState('');
  const [accessKey, setAccessKey] = useState('');

  const handleGenerateKey = () => {
    if (!contractNumber) {
      alert('Por favor, informe o número do contrato');
      return;
    }
    // Simulando a geração de uma chave
    setAccessKey('uf/7ece4rgd4vtr4848');
  };

  const handleCopyKey = () => {
    if (accessKey) {
      navigator.clipboard.writeText(accessKey);
      alert('Chave copiada com sucesso!');
    }
  };

  return (
    <div className="config-section">
      <div className="input-container">
        <label className="result-label">
          Informe o número do contrato vinculado à chave
        </label>
        <input
          type="text"
          value={contractNumber}
          onChange={(e) => setContractNumber(e.target.value)}
          className="input-field"
          placeholder="Digite o número do contrato"
        />
      </div>

      <button 
        className="action-button" 
        onClick={handleGenerateKey} 
        style={{ maxWidth: '200px', marginBottom: '20px' }}
      >
        Gerar chave
      </button>

      {accessKey && (
        <div className="result-container">
          <span className="result-label">Chave de acesso</span>
          <span className="result-value">{accessKey}</span>
          <button className="copy-button" onClick={handleCopyKey}>
            Copiar
          </button>
        </div>
      )}
    </div>
  );
};

export default NovaChavePage; 