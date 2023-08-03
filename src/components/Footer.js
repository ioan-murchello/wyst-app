import React from "react"; 
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = ({ year }) => {
  let newYear = new Date().getFullYear();
  let  yearInfoString;
  if (newYear > year) {
     yearInfoString = `${year}-${newYear}`;
  } else {
     yearInfoString = year;
  }
  return (
    <footer className="section footer">
      <p className="copyright">
        copyright &copy; WYST-app
        <span id="date">{ yearInfoString}</span> all rights reserved
      </p>
      <ul className="footer-icons">
        <li key={0}>
          <a
            href="https://ioan-murchello.github.io/my-portfolio/my_portfolio/"
            rel="noreferrer"
            target="_blank"
            className="footer-icon"
          >
            <AiFillGithub size={35} />
          </a>
        </li>
        <li key={1}>
          <a
            href="https://instagram.com/janosmurza?igshid=MjEwN2IyYWYwYw=="
            rel="noreferrer"
            target="_blank"
            className="footer-icon"
          >
            <AiOutlineInstagram size={35} />
          </a>
        </li>
        <li key={2}>
          <a
            href="https://www.linkedin.com/feed/"
            rel="noreferrer"
            target="_blank"
            className="footer-icon"
          >
            <AiFillLinkedin size={35} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
