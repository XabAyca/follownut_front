import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center pt-1 text-lg-start text-muted">
      <section className="">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            
            <div className="col-md-2 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold about-footer">
                <i className="fas me-5 mx-1"></i>
                <a href="/about" className="text-reset text-decoration-none">
                  About
                </a>
              </h6>
              <h6 className="text-uppercase fw-bold follownut-footer">
                <i className="fas fa-gem me-3"></i>FollowNut'
              </h6>
              <p>
                De la prise de rendez-vous, au suivi des patients, FollowNut
                offre une solution simple et efficace.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold ">Liens utiles</h6>
              <p>
                <Link to="/about" className="text-reset">
                  À propos de nous
                </Link>
              </p>
              <p>
                <Link to="/cgu" className="text-reset">
                  CGU
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
              <h6 className="text-uppercase fw-bold ">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> France
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                follownut@yopmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center copyright">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://follownut.herokuapp.com/">
          {" "}
          Follownut.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;