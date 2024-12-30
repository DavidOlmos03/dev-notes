import PdfButton from "../views/PdfButton";
import { useTranslation } from "react-i18next";

const sections = [
  {
    title: "GitHub",
    imgSrc: "/assets/imgs/iconGithub.png",
    documentName: "github-cheat-sheet.pdf",
  },
  {
    title: "HTML",
    imgSrc: "/assets/imgs/iconTags.png",
    documentName: "html-tags-chart.pdf",
    additionalLink: {
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      text: "css",
    },
  },
  {
    title: "MySQL",
    imgSrc: "/assets/imgs/iconMysql.png",
    documentName: "MySQL-Commands-Cheat-Sheet-by-PhoenixNAP.pdf",
  },
];

const Section = ({ title, imgSrc, documentName, buttonLabel, additionalLink, imgClass }) => (
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
      <PdfButton     
        image="/assets/imgs/iconPdf2.png"
        alt="pdf"    
        documentName= {documentName}
      />   
    </div>
  </div>
);


import ScrollAnimation from 'react-animate-on-scroll';

function CheatSheet() {
  const { t } = useTranslation('CheatSheet');
  
  return (
    <section id="cheat-sheet" className="p-5 bg-dark text-light">
      <div className="container">
          <h1>{t('other-guides')}</h1>
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
