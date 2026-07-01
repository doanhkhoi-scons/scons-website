import Container from "@/components/Container";
import { services } from "@/data/company";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {services.eyebrow}
          </p>

          <h2 className={styles.title}>
            {services.title}
          </h2>

          <p className={styles.description}>
            {services.description}
          </p>
        </div>

        <div className={styles.grid}>
          {services.items.map((item) => (
            <div
              key={item.title}
              className={styles.card}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}