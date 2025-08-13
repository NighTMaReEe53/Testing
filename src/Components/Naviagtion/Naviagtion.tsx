import { CiLight, CiPhone } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { IoCloseSharp, IoHomeOutline } from "react-icons/io5";
import "./naviagtion.css";
import { useEffect, useState } from "react";
import { LiaInfoSolid, LiaProjectDiagramSolid } from "react-icons/lia";
import { MdOutlineMenuOpen } from "react-icons/md";
import { TbStars } from "react-icons/tb";

const Naviagtion = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<
    "home" | "about" | "projects" | "contact" | string
  >("home");

  const HandleScrolled = () => {
    setIsScrolled(window.scrollY > 50);

    const sections = ["home", "about", "skills", "project", "contact"];
    const ScrollPosition = window.scrollY + 100;

    const SectionSkills = document.getElementById("skills");
    const AllProgress = document.querySelectorAll(".progress p");

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          ScrollPosition >= offsetTop &&
          ScrollPosition < offsetTop + offsetHeight
        ) {
          setActive(section);
          break;
        }

        if (window.scrollY > SectionSkills!.offsetTop + 10) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          AllProgress.forEach((el: any, i) => {
            el.style.width = `${el.dataset.width}`;
            el.classList.add(`element-${i}`);
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScrolled);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => window.removeEventListener("scroll", HandleScrolled);
  }, [isOpen]);

  return (
    <header className={`${isScrolled && "show"}`}>
      <div className="container">
        <div className="content-header">
          <a href="#index.html" className="logo">
            <h1>
              <FaCode size={30} color="var(--mainColor)" />
              Yara Kamal
            </h1>
          </a>
          <ul className={`links ${isOpen && "show"}`}>
            <span className="close" onClick={() => setIsOpen(false)}>
              <IoCloseSharp size={35} color="#F05" />
            </span>
            <li>
              <a href="#home" className={`${active === "home" && "active"}`}>
                <IoHomeOutline />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`${active === "about" && "active"}`}>
                <LiaInfoSolid />
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`${active === "skills" && "active"}`}
              >
                <TbStars />
                Skill's
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={`${active === "project" && "active"}`}
              >
                <LiaProjectDiagramSolid />
                Project's
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${active === "contact" && "active"}`}
              >
                <CiPhone />
                Contact Me
              </a>
            </li>
          </ul>
          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <MdOutlineMenuOpen size={35} color="var(--whiteColor)" />
          </div>
          <div className="icon">
            <span title="Light Mode">
              <CiLight size={25} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Naviagtion;
