import CodeHighlighter from "../codeHighlighter/CodeHighlighter";
import styles from "./index.module.scss";

const AboutMe = () => {
  const cssCode = `#AndreaPerez {
        location: Amsterdam, NL;
        contact: "andrea.perez.pa@gmail.com";
    
        .interests {
          camping: 100%;
          ancient-history: 100%;
          snorkeling: 100%;
          cooking: 100%;
          handicraft: 100%;
        }
    
        .education {
          Bootcamp: Full Stack Developer, Edgemony, Palermo;
          PhD: Prehistoric Archaeology, University of Trento, Italy;
          MSc: Quaternary Archaeology, University of Ferrara, Italy;
        }
      }`;

  return (
    <div className={styles.AboutMeContainer}>
      <CodeHighlighter codeString={cssCode} />
    </div>
  );
};

export default AboutMe;
