import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.NavBarContainer}>
      <nav className={styles.NavBar}>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
