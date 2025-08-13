import { useState } from "react";
import "./project.css";
import { DATA_PRODUCT, type IProduct } from "../Data/Index";
import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { motion } from "motion/react";

const Project = () => {
  const [Product, setProduct] = useState<IProduct[]>(DATA_PRODUCT);
  const [active, setIsActive] = useState<
    "all" | "html" | "javascript" | "react" | "tailwind" | string
  >("all");

  // Get Product

  const MY_PRODUCTS = Product.map((el, i) => {
    return (
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="box"
        key={el.id}
      >
        <img src={`${el.src}`} alt="" />
        <div className="text">
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <span>
            Created By : <span>{el.technology}</span>
          </span>
          <div className="icons">
            <FiGithub size={25} />
            <IoIosLink size={25} />
          </div>
        </div>
      </motion.div>
    );
  });

  const handleClicked = (item: string) => {
    const GET_PRODUCT = DATA_PRODUCT.filter((el) => el.technology == item);
    setIsActive(item);
    setProduct(GET_PRODUCT);
    if (item == "all") {
      setProduct(DATA_PRODUCT);
    }
  };

  return (
    <div className="project" id="project">
      <div className="main-title">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Project's
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Explore my latest work spanning web development, design, and creative
          technology. Each project represents a unique challenge and innovative
          solution.
        </motion.p>
      </div>

      <div className="container">
        <div className="list">
          <li
            className={`${active == "all" && "active"}`}
            onClick={() => handleClicked("all")}
          >
            ALL
          </li>
          <li
            className={`${active == "html" && "active"}`}
            onClick={() => handleClicked("html")}
          >
            HTML / CSS
          </li>
          <li
            className={`${active == "javascript" && "active"}`}
            onClick={() => handleClicked("javascript")}
          >
            Javascript
          </li>
          <li
            className={`${active == "react" && "active"}`}
            onClick={() => handleClicked("react")}
          >
            React
          </li>
          <li
            className={`${active == "tailwind" && "active"}`}
            onClick={() => handleClicked("tailwind")}
          >
            Tailwind
          </li>
        </div>
        <div className="content-project">{MY_PRODUCTS}</div>
      </div>
    </div>
  );
};

export default Project;
