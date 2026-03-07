import styles from "./NossosProjetos.module.css";
import { BookOpen, Palette, Bike, Users } from "lucide-react";

export default function NossosProjetos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Nossos Projetos</h2>
          <div className={styles.divider}></div>
          <p>
            Conheça as principais áreas de atuação do Instituto e como estamos transformando vidas.
          </p>
        </div>

        <div className={styles.grid}>

          {/* TRIAGEM VISUAL*/}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src=" "
                alt="Triagem Visual"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <BookOpen size={20} />
                </div>
                <h3>Triagem Visual</h3>
              </div>
              <p>
                Avaliação inicial da visão para identificar possíveis dificuldades visuais na população atendida.
              </p>
            </div>
          </div>

          {/* EXAMES*/}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src=" "
                alt="Exames"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <Palette size={20} />
                </div>
                <h3>Exames Oftalmológicos</h3>
              </div>
              <p>
                Realização de exames completos para diagnóstico de problemas de visão.
              </p>
            </div>
          </div>

          {/* ORIENTAÇÃO */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src=""
                alt="Orientação"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <Palette size={20} />
                </div>
                <h3>Orientação em Saúde Ocular</h3>
              </div>
              <p>
                Educação e orientação sobre cuidados com a visão e prevenção de problemas oculares.
              </p>
            </div>
          </div>

          {/* ACESSO */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src=""
                alt="Acesso a Óculos"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <Users size={20} />
                </div>
                <h3>Acesso a Óculos</h3>
              </div>
              <p>
                Facilitamos do acesso a óculos para pessoas que necessitam correção visual, promovendo inclusão e qualidade de vida.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
