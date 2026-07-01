import Image from "next/image";
import Container from "@/components/Container";
import { partners } from "@/data/company";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {partners.eyebrow}
          </p>

          <h2 className={styles.title}>
            {partners.title}
          </h2>

          <p className={styles.description}>
            {partners.description}
          </p>
        </div>

        <div className={styles.grid}>
          {partners.items.map((partner) => (
            <div
              key={partner.name}
              className={styles.card}
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={180}
                height={80}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}