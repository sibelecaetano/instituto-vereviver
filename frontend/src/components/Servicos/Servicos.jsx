import styles from "./Servicos.module.css";
import { Eye, Search, AlertCircle, ClipboardCheck, UserPlus, Glasses } from "lucide-react";

export default function Servicos() {
  const servicos = [
    {
      icon: Search,
      titulo: "Exames Oftalmológicos",
      descricao: "Realização de exames completos para avaliar a saúde visual dos pacientes.",
      cor: "#10b981"
    },
    {
      icon: Eye,
      titulo: "Avaliação da Acuidade Visual",
      descricao: "Testes precisos para determinar a capacidade de visão de perto e longe.",
      cor: "#3b82f6"
    },
    {
      icon: ClipboardCheck,
      titulo: "Identificação de Necessidades Visuais",
      descricao: "Detecção de problemas visuais e indicação de tratamento adequado.",
      cor: "#f59e0b"
    },
    {
      icon: AlertCircle,
      titulo: "Orientação sobre Saúde Ocular",
      descricao: "Conselhos e orientações para cuidados com a visão no dia a dia.",
      cor: "#8b5cf6"
    },
    {
      icon: UserPlus,
      titulo: "Encaminhamento para Cirurgias",
      descricao: "Encaminhamento especializado para procedimentos cirúrgicos quando necessário.",
      cor: "#ef4444"
    },
    {
      icon: Glasses,
      titulo: "Acesso Facilitado a Óculos",
      descricao: "Apoio para aquisição de óculos, ampliando o acesso à correção visual.",
      cor: "#06b6d4"
    }
  ];

  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Nossos Serviços</h2>
          <div className={styles.divider}></div>
          <p>
            Oferecemos um conjunto completo de ações para transformar vidas e promover o desenvolvimento integral.
          </p>
        </div>

        <div className={styles.grid}>
          {servicos.map((servico, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.icon} 
                style={{ background: `linear-gradient(to bottom right, ${servico.cor}, ${servico.cor}dd)` }}
              >
                <servico.icon size={30} color="white" />
              </div>

              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

