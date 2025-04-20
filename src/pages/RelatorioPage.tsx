import React, { useEffect, useState } from 'react';
import '../styles/DashboardPage.css';
import ConfigurarChave from '../components/ConfigurarChave';

interface ContratoInfo {
  numero: string | null;
}

const RelatorioPage: React.FC = () => {
  const [contratoInfo, setContratoInfo] = useState<ContratoInfo>({
    numero: null
  });
  const [mostrarConfiguracao, setMostrarConfiguracao] = useState(false);

  useEffect(() => {
    // Aqui você implementará a lógica para pegar o número do contrato do histórico
    // Por enquanto, vamos simular com um número estático
    const numeroDoHistorico = sessionStorage.getItem('numeroContrato');
    if (numeroDoHistorico) {
      setContratoInfo({
        numero: numeroDoHistorico
      });
    }
  }, []);

  const handleGerarRelatorio = () => {
    if (contratoInfo.numero) {
      setMostrarConfiguracao(true);
    }
  };

  const handleVoltar = () => {
    setMostrarConfiguracao(false);
  };

  if (mostrarConfiguracao && contratoInfo.numero) {
    return <ConfigurarChave 
      numeroContrato={contratoInfo.numero}
      onVoltar={handleVoltar}
    />;
  }

  return (
    <div className="config-section">
      {contratoInfo.numero ? (
        <div className="result-container">
          <div className="result-label">Contrato</div>
          <div className="result-value">{contratoInfo.numero}</div>
          <button 
            className="copy-button"
            onClick={handleGerarRelatorio}
          >
            Gerar relatório
          </button>
        </div>
      ) : (
        <div className="section-title">
          Digite um número de contrato no histórico de chaves para gerar o relatório
        </div>
      )}
    </div>
  );
};

export default RelatorioPage;