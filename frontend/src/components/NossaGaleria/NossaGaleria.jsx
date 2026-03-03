import styles from "./NossaGaleria.module.css";
import img1 from "../../assets/images/1.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/4.jpeg";
import img5 from "../../assets/images/5.jpeg";
import img6 from "../../assets/images/6.jpeg";
import img7 from "../../assets/images/7.jpeg";
import img8 from "../../assets/images/8.jpeg";
import img9 from "../../assets/images/9.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function NossaGaleria() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Galeria de Fotos</h2>
          <div className={styles.divider}></div>
          <p>
            Atendimento que chega, acolhe e transforma.
          </p>
        </div>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Galeria de fotos ${index + 1}`} />
          ))}
        </div>

      </div>
    </section>
  );
}
