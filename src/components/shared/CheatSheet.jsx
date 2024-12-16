const sections = [
  {
    title: "GitHub",
    imgSrc: "/src/assets/imgs/iconGithub.png",
    buttonLink: "assets/docs/github-cheat-sheet.pdf",
    buttonLabel: "Guia Atajos",
  },
  {
    title: "HTML",
    imgSrc: "/src/assets/imgs/iconTags.png",
    buttonLink: "assets/docs/github-cheat-sheet.pdf",
    buttonLabel: "Guia Atajos",
    additionalLink: {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      text: "css",
    },
  },
  {
    title: "MySQL",
    imgSrc: "/src/assets/imgs/iconGithub.png",
    buttonLink: "assets/docs/github-cheat-sheet.pdf",
    buttonLabel: "Guia Atajos",
  },
];

const Section = ({ title, imgSrc, buttonLink, buttonLabel, additionalLink, imgClass }) => (
  <div className="col-md col-sm-12 py-2">
    <div className="row">
      <div className="d-flex justify-content-center pb-2">
        <h2>{title}</h2>
        <img src={imgSrc} className={`img-fluid ${imgClass || ''}`} alt={title} />
        {additionalLink && (
          <h6>
            <a href={additionalLink.url} target="_blank" rel="noopener noreferrer">
              {additionalLink.text}
            </a>
          </h6>
        )}
      </div>
    </div>
    <div className="row px-5">
      <button
        className="btn btn-primary btn-rounded"
        onClick={() => (window.location.href = buttonLink)}
      >
        <span>
          <img src="/src/assets/imgs/iconPdf2.png" alt="pdfDownload" />
        </span>
        {buttonLabel}
      </button>
    </div>
  </div>
);


function CheatSheet() {
  return (
    <section id="cheat-sheet" className="p-5 bg-dark text-light">
      <div className="container">
        <h1>Otras guías utiles</h1>
        <div className="row pt-5">
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
);
};
export default CheatSheet;