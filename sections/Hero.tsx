"use client";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";
import { hero } from "@/data/company";

export default function Hero() {
  return (
      <section id="home" className={styles.hero}>
        <div className={styles.overlay} />
      <Container>
       <div className={styles.content}>
       <div className={styles.text}>
          <p className={styles.eyebrow}>
            {hero.eyebrow}
          </p>

          <h1 className={styles.title}>
            {hero.title}
          </h1>

          <p className={styles.subtitle}>
            {hero.subtitle}
          </p>

         <div className={styles.buttons}>
           <Button
    onClick={() => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    }}
>
    {hero.primaryButton}
</Button>

            <Button
    secondary
    onClick={() => {
        document
            .getElementById("footer")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    }}
>
    {hero.secondaryButton}
</Button>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}