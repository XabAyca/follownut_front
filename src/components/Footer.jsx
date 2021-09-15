import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-light text-muted">
        <section
          class="d-flex justify-content-center
          justify-content-lg-between p-4 border-bottom">
        </section>
        <p className="text-center mt-3">
          Copy Right &copy; <Link className="follownut-link-copyright">FollowNut's</Link>
        </p>
      </footer>
    </>
  )
}

export default Footer;