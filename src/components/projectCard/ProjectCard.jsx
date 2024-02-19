import styles from "./index.module.scss";

const ProjectCard = ({ cardData }) => {
  const { id, title, description, image, skills, vercelLink, gitHubLink } =
    cardData;
  return (
    <div className={styles.ProjectCard}>
      <img
        className={styles.ProjectImage}
        src={cardData.image}
        alt={`${title} picture`}
      />
      <div className={styles.ProjectContent}>
        <h3 className={styles.ProjectTitle}>{title}</h3>
        <p className={styles.ProjectDescription}>{description}</p>
        <div className={styles.ProjectSkills}>
          {cardData.skills.map((skill, id) => {
            return <p key={id}>{skill}</p>;
          })}
        </div>
        <div className={styles.ProjectLinks}>
          <a className={styles.VercelLink} href={vercelLink}>
            Demo
          </a>
          <a className={styles.GitHubLink} href={gitHubLink}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
