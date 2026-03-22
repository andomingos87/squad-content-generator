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

export function PoliticaPrivacidade() {
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
          Política de privacidade
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
          Política de privacidade
        </h1>
        <p style={{ ...paragraph, marginBottom: 20 }}>
          Última atualização: 22 de março de 2026. Este documento descreve como tratamos dados
          pessoais no contexto do uso do opensquad Dashboard (“Serviço”). Ao utilizar o Serviço,
          você concorda com as práticas descritas abaixo, salvo disposição legal em contrário.
        </p>

        <h2 style={sectionTitle}>1. Controlador e contato</h2>
        <p style={paragraph}>
          O responsável pelo tratamento dos dados pessoais relacionados a este Serviço é a
          entidade ou pessoa que o disponibiliza em seu ambiente (“Controlador”). Para exercer
          seus direitos ou esclarecimentos, utilize o canal de contato indicado pelo
          Controlador (por exemplo, e-mail institucional ou formulário de suporte).
        </p>

        <h2 style={sectionTitle}>2. Dados que podemos coletar</h2>
        <p style={paragraph}>Dependendo de como o Serviço é configurado e utilizado, podemos tratar:</p>
        <ul style={list}>
          <li>Dados de conta e identificação (nome, e-mail, identificadores de usuário);</li>
          <li>Dados de uso e técnicos (logs, endereço IP, tipo de navegador, data e hora de acesso);</li>
          <li>Conteúdo e metadados gerados no fluxo de trabalho (por exemplo, estados de squads,
            mensagens ou arquivos processados pelo sistema, conforme a implementação);</li>
          <li>Cookies ou armazenamento local necessários ao funcionamento da aplicação.</li>
        </ul>

        <h2 style={sectionTitle}>3. Finalidades do tratamento</h2>
        <p style={paragraph}>Utilizamos os dados para:</p>
        <ul style={list}>
          <li>Fornecer, operar e melhorar o Serviço;</li>
          <li>Autenticar sessões, garantir segurança e prevenir abuso;</li>
          <li>Cumprir obrigações legais e responder a solicitações legítimas;</li>
          <li>Comunicar avisos técnicos ou administrativos relevantes.</li>
        </ul>

        <h2 style={sectionTitle}>4. Base legal</h2>
        <p style={paragraph}>
          O tratamento fundamenta-se, conforme aplicável, na execução de contrato ou medidas
          pré-contratuais, no legítimo interesse (segurança, melhoria do Serviço), no cumprimento
          de obrigação legal ou regulatória, e no consentimento quando exigido pela legislação
          local (incluindo a Lei Geral de Proteção de Dados Pessoais — LGPD, no Brasil).
        </p>

        <h2 style={sectionTitle}>5. Compartilhamento</h2>
        <p style={paragraph}>
          Podemos compartilhar dados com prestadores de serviços que nos auxiliam na operação
          (hospedagem, infraestrutura, suporte), mediante contratos que exijam proteção adequada.
          Não vendemos dados pessoais. Divulgaremos informações quando a lei ou ordem judicial
          assim exigir.
        </p>

        <h2 style={sectionTitle}>6. Retenção</h2>
        <p style={paragraph}>
          Mantemos os dados pelo tempo necessário para cumprir as finalidades desta política,
          resolver disputas e cumprir obrigações legais. Critérios de exclusão ou anonimização
          podem ser definidos pelo Controlador na sua implantação do Serviço.
        </p>

        <h2 style={sectionTitle}>7. Seus direitos</h2>
        <p style={paragraph}>
          Conforme a legislação aplicável, você pode solicitar confirmação de tratamento, acesso,
          correção, anonimização, portabilidade, eliminação de dados desnecessários, informação
          sobre compartilhamentos e revogação de consentimento, quando cabível. Entre em contato
          com o Controlador para exercer esses direitos.
        </p>

        <h2 style={sectionTitle}>8. Segurança</h2>
        <p style={paragraph}>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra
          acesso não autorizado, perda ou alteração. Nenhum sistema é totalmente seguro; recomenda-se
          o uso de senhas fortes e ambientes atualizados.
        </p>

        <h2 style={sectionTitle}>9. Alterações</h2>
        <p style={paragraph}>
          Podemos atualizar esta política periodicamente. A data no topo indica a versão vigente.
          O uso continuado do Serviço após alterações constitui ciência das mudanças, salvo quando
          a lei exigir consentimento adicional.
        </p>

        <h2 style={sectionTitle}>10. Disposições gerais</h2>
        <p style={paragraph}>
          Este texto é um modelo padrão para referência. Ajuste nomes, contatos, bases legais e
          fluxos de dados à realidade da sua organização e consulte um profissional jurídico para
          conformidade plena com a LGPD e demais normas aplicáveis.
        </p>
        <p style={paragraph}>
          Para pedidos de eliminação de dados no âmbito de integrações Meta, consulte{" "}
          <Link
            to="/exclusao-dados"
            style={{ color: "var(--accent-cyan)", textDecoration: "none" }}
          >
            Exclusão de dados do usuário
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
