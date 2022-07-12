import React from "react";

//import stock
import steve from "../img/team/steve.jpg";
import jet from "../img/team/jet.jpg";
import karl from "../img/team/karl.jpg";
import william from "../img/team/william.jpg";
import janice from "../img/team/janice.png";
import kandyce from "../img/team/kandyce.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="team" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Team</h3>
                <p className="subtitle-a">
	    		Everyone at CNDL WRLD is an innovator who specializes in some of the greatest technology ever seen by people. We're proud to have them in our family.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={steve} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={steve} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Steve Kanadle</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            CEO Founder Visionary
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={steve}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
	        </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={jet} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={jet} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Jet Aulti</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
	                     CFO SpreadsheetLover Doctor
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={jet}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={karl} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={karl} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Karl Kennedy</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            CIO IT SecEng
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={karl}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={william} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={william} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">William Cope</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
	                     CTO Designer Engineer
	                  </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={william}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={janice} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={janice} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Janice Kim</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            COO #TeamMom
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={janice}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={kandyce} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={kandyce} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Kandyce Kummings</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HR/PR Manager
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={kandyce}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
