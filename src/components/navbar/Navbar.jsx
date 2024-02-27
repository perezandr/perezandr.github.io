import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.NavBarContainer}>
      <nav className={styles.NavBar}>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a href="Resume_AndreaP.pdf" download="Resume_AndreaP.pdf">
          MyResumé
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
