import {
  FaCopyright,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
  MdEmail,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/milfredmtz/" target="_blank">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Milfred08" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <h2>Made by Milfred Martinez &copy; 2022.</h2>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
