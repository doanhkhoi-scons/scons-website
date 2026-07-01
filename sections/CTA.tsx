import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { cta } from "@/data/company";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="contact" className={styles.cta}>
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {cta.eyebrow}
          </p>

          <h2 className={styles.title}>
            {cta.title}
          </h2>

          <p className={styles.description}>
            {cta.description}
          </p>

          <Button>
            {cta.button}
          </Button>
        </div>
      </Container>
    </section>
  );
}