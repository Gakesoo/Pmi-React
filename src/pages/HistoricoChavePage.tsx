import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HistoricoChavesPage.css";

const HistoricoChavesPage: React.FC = () => {
  const navigate = useNavigate();
  const [contractNumber, setContractNumber] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [activeTab, setActiveTab] = useState(1); // 1 é a aba Histórico de chaves

  const handleSearch = () => {
    if (contractNumber === "48754651488") {
      setAccessKey("uf/7ece4fgd4vt4848");
    } else {
      setAccessKey("");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="historico-chaves-container">
      <div className="historico-chaves-content">
        {/* Abas */}
        <div className="tabs-container">
          <button
            className='tab-button' onClick={() => navigate("/dashboard")}
          >
            Nova Chave
          </button>
          <button
            className='tab-button' onClick={() => navigate("/historico-chaves")}
          >
            Histórico de chaves
          </button>
          <button
            className='tab-button' onClick={() => navigate("/relatorio")}
          >
            Relatório
          </button>
        </div>

        <div className="tab-content">
          {/* Botão Buscar chave */}
          <button className="buscar-chave-button">
            Buscar chave
          </button>

          {/* Campo de busca */}
          <div className="search-container">
            <div className="search-label">
              Informe o número do contrato vinculado à chave
            </div>
            <input
              type="text"
              value={contractNumber}
              onChange={(e) => setContractNumber(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Botão Pesquisar */}
          <button className="pesquisar-button" onClick={handleSearch}>
            pesquisar
          </button>

          {/* Resultado da busca */}
          {accessKey && (
            <div className="result-container">
              <div className="result-label">
                Chave de acesso
              </div>
              <input
                type="text"
                value={accessKey}
                readOnly
                className="result-input"
              />
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default HistoricoChavesPage;