import { Link } from "react-router-dom";
import { useSquadSocket } from "@/hooks/useSquadSocket";
import { SquadSelector } from "@/components/SquadSelector";
import { OfficeScene } from "@/office/OfficeScene";
import { StatusBar } from "@/components/StatusBar";

export function DashboardHome() {
  useSquadSocket();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "0 16px",
          height: 40,
          minHeight: 40,
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-sidebar)",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.5,
        }}
      >
        <span>opensquad Dashboard</span>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexShrink: 0,
          }}
        >
          <Link
            to="/politica-privacidade"
            style={{
              color: "var(--text-secondary)",
              fontWeight: 500,
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            Política de privacidade
          </Link>
          <Link
            to="/termos"
            style={{
              color: "var(--text-secondary)",
              fontWeight: 500,
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            Termos de serviço
          </Link>
          <Link
            to="/exclusao-dados"
            style={{
              color: "var(--text-secondary)",
              fontWeight: 500,
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            Exclusão de dados
          </Link>
        </nav>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <SquadSelector />
        <OfficeScene />
      </div>

      <StatusBar />
    </div>
  );
}
