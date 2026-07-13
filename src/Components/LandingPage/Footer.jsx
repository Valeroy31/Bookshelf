import "../../css/Footer.css";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import logo from "../../assets/files/logo-dark.svg";

const columns = [
  {
    title: "Product",
    links: ["Discover", "My Shelves", "Community", "Genres"],
  },
  {
    title: "Company",
    links: ["About", "Open Source", "Donate", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Code of Conduct", "Cookies"],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer-cta">
          <h2 className="footer-cta__title">
            Your reading life deserves a{" "}
            <span className="footer-cta__mark">beautiful home.</span>
          </h2>
          <p className="footer-cta__sub">
            Free forever. No ads. No tracking. Just books.
          </p>
          <Link to="auth/users/sign_up">
            <button className="footer-cta__btn">Create your free shelf</button>
          </Link>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <img className="footer-brand__logo" src={logo} alt="Bookshelf" />
            <p className="footer-brand__tagline">
              Made for readers, by readers. A community-funded, open-source
              project. No ads. No algorithms. Just books.
            </p>
          </div>

          {columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4 className="footer-col__title">{col.title}</h4>
              <ul className="footer-col__list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a className="footer-col__link" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom__copy">
            © 2026 Bookshelf — built by readers, in the open.
          </p>
          <span className="footer-bottom__version">
            <MessageSquare size={14} />
            v1.0
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
