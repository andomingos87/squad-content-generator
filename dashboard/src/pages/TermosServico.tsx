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

export function TermosServico() {
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
          Termos de serviço
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
          Termos de serviço
        </h1>
        <p style={{ ...paragraph, marginBottom: 20 }}>
          Última atualização: 22 de março de 2026. Ao acessar ou utilizar o opensquad Dashboard
          (“Serviço”), concorda com estes Termos. Se não concordar, não utilize o Serviço.
        </p>

        <h2 style={sectionTitle}>1. Definições e aceitação</h2>
        <p style={paragraph}>
          O Serviço é disponibilizado pela entidade responsável pela sua instalação (“Operador”).
          Estes Termos constituem um acordo entre si e o Operador. O uso continuado do Serviço após
          alterações publicadas implica aceitação das versões atualizadas, salvo quando a lei exija
          consentimento específico.
        </p>

        <h2 style={sectionTitle}>2. Descrição do serviço</h2>
        <p style={paragraph}>
          O opensquad Dashboard é uma interface para monitorização e orquestração de fluxos de
          trabalho com agentes (“squads”), conforme configurado no seu ambiente. Funcionalidades,
          disponibilidade e integrações dependem da implementação local ou contratada pelo Operador.
        </p>

        <h2 style={sectionTitle}>3. Elegibilidade e conta</h2>
        <p style={paragraph}>
          Compromete-se a fornecer informações verdadeiras quando solicitadas e a manter o acesso
          ao Serviço seguro (credenciais, dispositivos). É responsável por todas as atividades
          realizadas na sua conta, salvo comprovado uso não autorizado notificado de forma tempestiva.
        </p>

        <h2 style={sectionTitle}>4. Uso permitido e restrições</h2>
        <p style={paragraph}>É vedado, sem autorização prévia por escrito do Operador:</p>
        <ul style={list}>
          <li>Utilizar o Serviço de forma ilegal, abusiva ou que viole direitos de terceiros;</li>
          <li>Tentar obter acesso não autorizado a sistemas, dados ou contas de outros usuários;</li>
          <li>Introduzir malware, fazer engenharia reversa indevida ou sobrecarregar
            infraestrutura (exceto testes acordados);</li>
          <li>Revender, sublicenciar ou redistribuir o Serviço fora do permitido pelo Operador.</li>
        </ul>

        <h2 style={sectionTitle}>5. Conteúdo e dados</h2>
        <p style={paragraph}>
          Mantém a titularidade do conteúdo e dados que introduzir. Concede ao Operador a licença
          necessária para operar, armazenar e processar esses dados apenas na medida exigida para
          prestar o Serviço, nos termos da{" "}
          <Link
            to="/politica-privacidade"
            style={{ color: "var(--accent-cyan)", textDecoration: "none" }}
          >
            Política de privacidade
          </Link>
          .
        </p>

        <h2 style={sectionTitle}>6. Propriedade intelectual</h2>
        <p style={paragraph}>
          Software, marcas, design e documentação associados ao Serviço pertencem aos respectivos
          titulares. Nenhuma cláusula transfere direitos de propriedade intelectual para além do
          uso licenciado implicitamente para acessar o Serviço conforme estes Termos.
        </p>

        <h2 style={sectionTitle}>7. Disponibilidade e alterações</h2>
        <p style={paragraph}>
          O Serviço pode ser atualizado, suspenso ou descontinuado, no todo ou em parte, por
          motivos técnicos, legais ou operacionais. O Operador envidará esforços razoáveis para
          comunicar interrupções relevantes quando possível.
        </p>

        <h2 style={sectionTitle}>8. Isenção e limitação de responsabilidade</h2>
        <p style={paragraph}>
          O Serviço é fornecido “no estado em que se encontra”. Na medida máxima permitida pela lei
          aplicável, excluem-se garantias implícitas. O Operador não será responsável por danos
          indiretos, lucros cessantes, perda de dados ou interrupção de negócio, exceto em casos de
          dolo ou culpa grave, ou quando a lei obrigue de outro modo.
        </p>

        <h2 style={sectionTitle}>9. Indemnização</h2>
        <p style={paragraph}>
          Compromete-se a indemnizar e isentar o Operador de reclamações, perdas e custos
          razoáveis resultantes do seu uso indevido do Serviço ou da violação destes Termos.
        </p>

        <h2 style={sectionTitle}>10. Rescisão</h2>
        <p style={paragraph}>
          O Operador pode suspender ou encerrar o acesso em caso de violação destes Termos ou risco
          à segurança. Pode deixar de utilizar o Serviço a qualquer momento. As cláusulas que por
          natureza devam subsistir mantêm-se válidas após o termo.
        </p>

        <h2 style={sectionTitle}>11. Lei aplicável e foro</h2>
        <p style={paragraph}>
          A lei aplicável e o foro competente para litígios serão os definidos pelo Operador no
          contrato ou documentos complementares, ou, na sua ausência, os da jurisdição em que o
          Operador tenha sede. Adapte este número à sua realidade jurídica.
        </p>

        <h2 style={sectionTitle}>12. Contato</h2>
        <p style={paragraph}>
          Para questões sobre estes Termos, entre em contato com o Operador pelo canal oficial
          indicado na sua organização (substitua por e-mail ou formulário real).
        </p>

        <p style={{ ...paragraph, marginTop: 24, fontSize: 12 }}>
          Texto modelo — personalize jurisdição, contacto, SLAs e limites de responsabilidade com
          apoio jurídico antes de uso em produção.
        </p>
      </main>
    </div>
  );
}
