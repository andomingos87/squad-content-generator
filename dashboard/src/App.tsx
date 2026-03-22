import { Routes, Route } from "react-router-dom";
import { DashboardHome } from "@/pages/DashboardHome";
import { PoliticaPrivacidade } from "@/pages/PoliticaPrivacidade";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
    </Routes>
  );
}
