import React, { useState } from 'react';
import '../styles/DashboardPage.css';

interface ChaveGerada {
  contrato: string;
  chave: string;
}

const HistoricoChavePage: React.FC = () => {
  const [contractNumber, setContractNumber] = useState('');
  const [chaveEncontrada, setChaveEncontrada] = useState<ChaveGerada | null>(null);

  const handleSearch = () => {
    if (!contractNumber) {
      alert('Por favor, insira um número de contrato');
      return;
    }

    // Salvando o número do contrato para o relatório
    sessionStorage.setItem('numeroContrato', contractNumber);

    // Simulando uma busca de chave
    setChaveEncontrada({
      contrato: contractNumber,
      chave: 'uf/7ece4rgd4vtr4848'
    });
  };

  const handleCopyKey = () => {
    if (chaveEncontrada) {
      navigator.clipboard.writeText(chaveEncontrada.chave);
      alert('Chave copiada com sucesso!');
    }
  };

  return (
    <div>
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
        onClick={handleSearch} 
        style={{ maxWidth: '200px' }}
      >
        Pesquisar
      </button>

      {chaveEncontrada && (
        <div className="result-container">
          <span className="result-label">Chave de acesso</span>
          <span className="result-value">{chaveEncontrada.chave}</span>
          <button className="copy-button" onClick={handleCopyKey}>
            Copiar
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoricoChavePage;