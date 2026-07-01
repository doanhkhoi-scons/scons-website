import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { about } from "@/data/company";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <div className={styles.grid}>
          {/* Nội dung */}

          <div className={styles.content}>
            <p className={styles.eyebrow}>
              {about.eyebrow}
            </p>

            <h2 className={styles.title}>
              {about.title}
            </h2>

            <p className={styles.description}>
              {about.description}
            </p>

            <p className={styles.description2}>
              {about.description2}
            </p>

            <Button>
              {about.button}
            </Button>
          </div>

          {/* Hình ảnh */}

          <div className={styles.image}>
            <img
              src="/images/about/about.jpg"
              alt="S.CONS"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}