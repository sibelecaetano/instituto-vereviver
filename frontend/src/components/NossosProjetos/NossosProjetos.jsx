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

          {/* EDUCAÇÃO */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Educação"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <BookOpen size={20} />
                </div>
                <h3>Educação e Reforço Escolar</h3>
              </div>
              <p>
                Aulas de reforço, alfabetização e preparação para o mercado de trabalho.
              </p>
            </div>
          </div>

          {/* ARTE */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Arte"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <Palette size={20} />
                </div>
                <h3>Arte e Cultura</h3>
              </div>
              <p>
                Oficinas de música, dança e artes visuais que estimulam criatividade.
              </p>
            </div>
          </div>

          {/* ESPORTE */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
                alt="Esporte"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <Bike size={20} />
                </div>
                <h3>Esporte e Lazer</h3>
              </div>
              <p>
                Atividades esportivas que promovem saúde, disciplina e inclusão social.
              </p>
            </div>
          </div>

          {/* APOIO */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2"
                alt="Apoio às famílias"
              />
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <div className={styles.icon}>
                  <Users size={20} />
                </div>
                <h3>Apoio às Famílias</h3>
              </div>
              <p>
                Atendimento psicossocial e orientação para fortalecer vínculos familiares.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
