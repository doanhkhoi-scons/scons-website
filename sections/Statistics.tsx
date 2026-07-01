import Container from "@/components/Container";
import { statistics } from "@/data/company";
import styles from "./Statistics.module.css";

export default function Statistics() {
  return (
    <section className={styles.statistics}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {statistics.eyebrow}
          </p>

          <h2 className={styles.title}>
            {statistics.title}
          </h2>

          <p className={styles.description}>
            {statistics.description}
          </p>
        </div>

        <div className={styles.grid}>
          {statistics.items.map((item) => (
            <div
              key={item.label}
              className={styles.card}
            >
              <h3>{item.value}</h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}