import { FaHeart } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <div className="container">
      <h2 className="copyright">
        Created By <span> Eng / Yara Kamal </span>
        <FaHeart size={25} color="#f05" />
        <FaHeart size={25} color="#f05" />
      </h2>
    </div>
  );
};

export default Footer;
