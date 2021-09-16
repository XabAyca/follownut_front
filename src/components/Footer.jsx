import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="text-center pt-1 text-lg-start bg-light text-muted">
      <section class="">
        <div class="container text-center text-md-start">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 class="text-uppercase fw-bold ">
                <i class="fas fa-gem me-3"></i>FollowNut'
              </h6>
              <p>
                De la prise de rendez-vous, au suivi des patients, FollowNut
                offre une solution simple et efficace.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 class="text-uppercase fw-bold ">Stack technique</h6>
              <p>
                <a href="#!" class="text-reset">
                  Ruby On Rails
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  JavaScript
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
              <h6 class="text-uppercase fw-bold ">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> France
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                follownut@yopmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center copyright">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://follownut.herokuapp.com/">
          {" "}
          Follownut.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;