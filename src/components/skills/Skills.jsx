import styles from "./index.module.scss";

const Skills = () => {
  return (
    <section className={styles.SkillsContainer}>
      <div className={styles.ImageContainer}>
        <img src="/icons/html.svg" alt="Html5" />
        <p>Html5</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/css.svg" alt="CSS3" />
        <p>Css3</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/javascript.svg" alt="Javascript" />
        <p>Javascript</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/react.svg" alt="ReactJS" />
        <p>React</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/sass.svg" alt="Sass" />
        <p>Sass</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/nodejs.svg" alt="NodeJS" />
        <p>Node.js</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/nextjs.svg" alt="NextJS" />
        <p>Next.js</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/vitejs.svg" alt="Vite" />
        <p>Vite</p>
      </div>
      <div className={styles.ImageContainer}>
        <img src="/icons/threejs.svg" alt="ThreeJS" />
        <p>Three.js</p>
      </div>
    </section>
  );
};

export default Skills;
