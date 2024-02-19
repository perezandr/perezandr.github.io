import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <h1 className={styles.HeroTitle}>Hi, I'm Andrea Perez</h1>
      <p className={styles.HeroText}>
        I am a web developer. I like to build beautiful web apps.
      </p>
    </div>
  );
};

export default Hero;
