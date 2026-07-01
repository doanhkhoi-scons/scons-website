import Container from "@/components/Container";
import { projects } from "@/data/company";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Container>

        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {projects.eyebrow}
          </p>

          <h2 className={styles.title}>
            {projects.title}
          </h2>

          <p className={styles.description}>
            {projects.description}
          </p>
        </div>

        <div className={styles.grid}>
          {projects.items.map((project) => (
            <div
              key={project.title}
              className={styles.card}
            >
              <img
                src={project.image}
                alt={project.title}
              />

              <div className={styles.content}>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}