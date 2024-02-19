import Navbar from "./components/navbar/index";
import Hero from "./components/hero/index";
import AboutMe from "./components/aboutMe/AboutMe";
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
