import { Link } from "react-router-dom";

const sectionTitle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  marginTop: 24,
  marginBottom: 8,
  color: "var(--text-primary)",
};

const paragraph: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.6,
  color: "var(--text-secondary)",
  marginBottom: 12,
};

const list: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.6,
  color: "var(--text-secondary)",
  marginBottom: 12,
  paddingLeft: 20,
};

export function ExclusaoDados() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexShrink: 0,
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
        <Link
          to="/"
          style={{
            color: "var(--accent-cyan)",
            fontWeight: 500,
            fontSize: 12,
            textDecoration: "none",
          }}
        >
          ← Voltar ao dashboard
        </Link>
        <span style={{ color: "var(--text-secondary)", fontWeight: 500, fontSize: 12 }}>
          Exclusão de dados
        </span>
      </header>

      <main
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 20px 48px",
          maxWidth: 720,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 8,
            color: "var(--text-primary)",
          }}
        >
          Exclusão de dados do usuário
        </h1>
        <p style={{ ...paragraph, marginBottom: 20 }}>
          Esta página descreve como pode solicitar a eliminação dos dados pessoais associados à sua
          utilização de integrações com produtos Meta (Facebook, Instagram, etc.) e do opensquad
          Dashboard. Serve para cumprimento de requisitos de aplicações registadas no Meta for
          Developers.
        </p>

        <h2 style={sectionTitle}>Como solicitar a exclusão</h2>
        <p style={paragraph}>
          Para pedir a eliminação dos seus dados tratados no âmbito desta aplicação ou serviço,
          envie um e-mail para o endereço indicado pelo responsável pela aplicação (substitua pelo
          contacto real da sua organização), com o assunto{" "}
          <strong style={{ color: "var(--text-primary)" }}>Pedido de exclusão de dados</strong>,
          e inclua:
        </p>
        <ul style={list}>
          <li>Nome completo e, se aplicável, o e-mail ou ID de usuário associado à conta;</li>
          <li>Descrição breve da integração utilizada (ex.: login com Facebook, partilha no Instagram);</li>
          <li>Confirmação de que deseja a eliminação dos dados pessoais relacionados com esta aplicação.</li>
        </ul>
        <p style={paragraph}>
          <strong style={{ color: "var(--text-primary)" }}>E-mail de contacto (modelo):</strong>{" "}
          privacidade@seudominio.com — altere este endereço no código ou na configuração do site
          antes de submeter a URL ao Meta for Developers.
        </p>

        <h2 style={sectionTitle}>O que é eliminado</h2>
        <p style={paragraph}>
          Após validação do pedido, procederemos à eliminação ou anonimização, quando tecnicamente
          possível, dos dados pessoais que tenham sido recolhidos através das APIs ou produtos Meta
          ligados a esta aplicação, bem como das cópias armazenadas nos nossos sistemas, salvo
          quando a lei exija a conservação (ex.: obrigações fiscais ou defesa de direitos).
        </p>

        <h2 style={sectionTitle}>Prazo</h2>
        <p style={paragraph}>
          Confirmaremos a receção do pedido num prazo razoável (em geral até 7 dias úteis) e
          concluiremos a exclusão ou anonimização, quando aplicável, no prazo de até{" "}
          <strong style={{ color: "var(--text-primary)" }}>30 dias</strong>, salvo impedimento legal
          ou técnico devidamente comunicado.
        </p>

        <h2 style={sectionTitle}>Dados Meta e permissões</h2>
        <p style={paragraph}>
          Se tiver autorizado esta aplicação através de uma conta Meta, pode também rever ou
          revogar permissões nas definições da sua conta Facebook ou Instagram (área de aplicações
          e sites ligados). A revogação impede novos acessos; a eliminação dos dados já tratados
          continua a seguir o processo descrito acima, quando aplicável.
        </p>

        <h2 style={sectionTitle}>Mais informações</h2>
        <p style={paragraph}>
          Consulte também a nossa{" "}
          <Link
            to="/politica-privacidade"
            style={{ color: "var(--accent-cyan)", textDecoration: "none" }}
          >
            Política de privacidade
          </Link>
          . Para questões gerais sobre proteção de dados, utilize o mesmo canal de contacto indicado
          pelo responsável pelo Serviço.
        </p>

        <p style={{ ...paragraph, marginTop: 24, fontSize: 12 }}>
          Última atualização: 22 de março de 2026. Texto modelo — adapte contactos, prazos e
          detalhes técnicos à sua implementação e valide com assessoria jurídica.
        </p>
      </main>
    </div>
  );
}
