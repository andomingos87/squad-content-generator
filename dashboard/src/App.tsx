import { Routes, Route } from "react-router-dom";
import { DashboardHome } from "@/pages/DashboardHome";
import { PoliticaPrivacidade } from "@/pages/PoliticaPrivacidade";
import { ExclusaoDados } from "@/pages/ExclusaoDados";
import { TermosServico } from "@/pages/TermosServico";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/termos" element={<TermosServico />} />
      <Route path="/exclusao-dados" element={<ExclusaoDados />} />
    </Routes>
  );
}
