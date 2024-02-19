import styles from "./index.module.scss";

const Contact = () => {
  const email = "andrea.perez.pa@gmail.com";
  return (
    <section className={styles.ContactSection}>
      <a href={`mailto:${email}`}>
        <img src="./icons/email.svg" alt="" />
      </a>
      <a href="https://github.com/perezandr">
        <img src="./icons/github.svg" alt="" />
      </a>
      <a href="https://www.linkedin.com/in/andrea-perez-b84114161/">
        <img src="./icons/linkedin.svg" alt="" />
      </a>
    </section>
  );
};

export default Contact;
