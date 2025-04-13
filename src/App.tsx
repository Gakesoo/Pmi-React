import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Carregamento dinâmico das páginas para melhor desempenho
const HeroSection = lazy(() => import("./components/HeroSection"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const HistoricoChavesPage = lazy(() => import("./pages/HistoricoChavePage"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/historico-chaves" element={<HistoricoChavesPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;