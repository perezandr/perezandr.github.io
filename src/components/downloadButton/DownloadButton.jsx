import style from "./index.module.scss";

const DownloadButton = () => {
  return (
    <div className={style.ButtonContainer}>
      <a
        className={style.CVDownload}
        href="/download/Resume_AndreaP.pdf"
        download="Resume_AndreaP.pdf"
      >
        Download my CV
      </a>
    </div>
  );
};

export default DownloadButton;
