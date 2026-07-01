import Container from "@/components/Container";
import { advantages } from "@/data/company";
import styles from "./Advantages.module.css";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {advantages.eyebrow}
          </p>

          <h2 className={styles.title}>
            {advantages.title}
          </h2>

          <p className={styles.description}>
            {advantages.description}
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.items.map((item) => (
            <div
              key={item.number}
              className={styles.card}
            >
              <div className={styles.number}>
                {item.number}
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