function CheatSheet() {
  return (
    <section id="cheat-sheet" className="p-5 bg-dark text-light">
      <div className="container">
   
               <h1>Otras guías utiles</h1>
               <div className="row pt-5">
                  <div className="col-md">
                    <div className="d-flex content-justify-start pb-2">
                      <h2>GitHub</h2>
                      <img src="/src/assets/imgs/iconGithub.png" className="img-fluid" alt=""></img>
                    </div>
                <button
                className="btn btn-primary btn-rounded"
                onClick={() => window.location.href = 'assets/docs/github-cheat-sheet.pdf'}
                
                >
                <span>
                    <img src="/src/assets/imgs/iconPdf2.png" alt="pdfDownload" ></img>
                </span>
                Guia Atajos
                </button>
                  </div>
                  <div className="col-md">
                    <div className="d-flex content-justify-start pb-2">
                      <h2>HTML</h2>
                      <img src="/src/assets/imgs/iconTags.png" className="img-fluid" alt=""></img>
                      <h6><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">css</a></h6>
                    </div>
                    <button
                       className="btn btn-primary btn-rounded"
                       onClick={() => window.location.href = 'assets/docs/github-cheat-sheet.pdf'}
                       >
                      <span><img src="/src/assets/imgs/iconPdf2.png" alt="pdfDownload"></img></span>
                        Guia Atajos
                    </button>
                  </div>
                  <div className="col-md">
                    <div className="d-flex content-justify-start pb-2">
                      <h2>MySQL</h2>
                      <span>
                      <img src="/src/assets/imgs/iconMysql.png" className="img-fluid w-50" alt="pdfDownload"></img>
                      </span>
                    </div>
                    <button
                     className="btn btn-primary btn-rounded"
                     onClick={() => window.location.href = 'assets/docs/github-cheat-sheet.pdf'}
                     >
                      <span><img src="/src/assets/imgs/iconPdf2.png" alt="pdfDownload"></img></span>
                        Guia Atajos
                    </button>
                  </div>
               </div>
      </div>
    </section>

);
};

export default CheatSheet;