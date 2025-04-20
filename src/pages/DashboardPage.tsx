import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NovaChavePage from './NovaChavePage';
import HistoricoChavePage from './HistoricoChavePage';
import RelatorioPage from './RelatorioPage';
import '../styles/DashboardPage.css';

const DashboardPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/login');
  };

  return (
    <div className="gradient-background">
      <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <span className="logo-text">Calcule</span>
        <span className="logo-text logo-text-facil">Fácil</span>
      </div>

      <div className="tab-container">
        <div className="tab-header">
          <button 
            className={`tab-button ${currentTab === 0 ? 'active' : ''}`}
            onClick={() => setCurrentTab(0)}
          >
            Nova Chave
          </button>
          <button 
            className={`tab-button ${currentTab === 1 ? 'active' : ''}`}
            onClick={() => setCurrentTab(1)}
          >
            Histórico de chaves
          </button>
          <button 
            className={`tab-button ${currentTab === 2 ? 'active' : ''}`}
            onClick={() => setCurrentTab(2)}
          >
            Relatório
          </button>
        </div>

        <div className="content-box">
          {currentTab === 0 && <NovaChavePage />}
          {currentTab === 1 && <HistoricoChavePage />}
          {currentTab === 2 && <RelatorioPage />}
        </div>
      </div>

      <button 
        className="action-button"
        onClick={() => navigate('/login')}
        style={{ maxWidth: '100px' }}
      >
        Voltar
      </button>
    </div>
  );
};

export default DashboardPage;