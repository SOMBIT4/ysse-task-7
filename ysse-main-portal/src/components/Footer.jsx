import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/ysse-logo.png";
import "./Footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Notices", to: "/notices" },
  { label: "Programs", to: "/programs" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="YSSE logo" className="footer-logo" />
            <span>YSSE</span>
          </Link>
          <p>
            Youth Stage for Skills &amp; Empowerment — equipping young people
            with the skills, mentorship, and opportunities to lead tomorrow.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li>Dhaka, Bangladesh</li>
            <li>hello@ysse.org (placeholder)</li>
            <li>+880 000-000000 (placeholder)</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.label[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} YSSE — Stage of Innovation. All rights reserved.</p>
        <p>Built with React &amp; Framer Motion.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
