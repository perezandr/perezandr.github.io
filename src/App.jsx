import Navbar from "./components/navbar/index";
import Hero from "./components/hero/index";
import AboutMe from "./components/aboutMe/AboutMe";
import DownloadButton from "./components/downloadButton/DownloadButton";
import Skills from "./components/skills/Skills";
import ProjectCard from "./components/projectCard/ProjectCard";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import projectData from "./assets/projectData.json";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.Container}>
          <Navbar />
          <Hero />
          <AboutMe />
          <DownloadButton />
          <h2 id="Skills" className={styles.SectionTitle}>
            Skills
          </h2>
          <Skills />
          <h2 id="Projects" className={styles.SectionTitle}>
            Projects
          </h2>
          <div className={styles.ProjectsContainer}>
            {projectData.projects.map((projectData) => (
              <ProjectCard cardData={projectData} key={projectData.id} />
            ))}
          </div>
          <h2 id="Contact" className={styles.SectionTitle}>
            Contact
          </h2>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
