import style from "./index.module.scss";

const DownloadButton = () => {
  return (
    <div className={style.ButtonContainer}>
      <a
        className={style.CVDownload}
        href="/download/Resume_AndreaP.pdf"
        download="Andrea_Perez_Resume.pdf"
      >
        Download my CV
      </a>
    </div>
  );
};

export default DownloadButton;
