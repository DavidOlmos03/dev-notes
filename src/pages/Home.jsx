// src/Home.jsx
import '../styles/Home.css'
import { useTranslation } from "react-i18next";
import Card from "../components/shared/Card"

const Home = () => {

  const { t } = useTranslation('Home');
 
  return (
    <section className="text-center text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-center">
                <div className="p-5 shadow rounded mx-auto">
                    <h1 className="text-dark">{t("welcome")} <span id="span-title">Dev Notes</span></h1>
                    {/* Wellcome to Dev Notes */}
                    <p className="lead my-4 text-dark">
                      {t("welcome-text")}
                    {/*This website is for sharing my notes about different technologies that I have learned on my journey in software development. It is only a small section of my portfolio.*/}
                    </p>
                      <a className="btn btn-primary btn-lg" href="/">
                          {t("button")}
                      </a>
                </div>
            </div>
      <div className="mt-5 d-flex justify-content-center flex-wrap">
      <Card 
        image="/src/assets/imgs/portfolio.png"
        title="David Olmos - Portfolio"
        text={t("portfolio")}
        href="https://davidolmos-portfolio.netlify.app/about"
      />
      <Card 
        image="/src/assets/imgs/mundoStem.png"
        title="Mundo Stem"
        text={t('mundoStem')}
        href="https://mundostem.netlify.app/"
      />
      <Card 
        image="/src/assets/imgs/wind-rose.png"
        title="Wind Rose"
        text={t('wind-rose')}
        href="https://wind-rose.streamlit.app/"
      />
    </div>
      </div>
    </section>
  );
};
export default Home;

