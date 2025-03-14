import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import Typing from "../components/HomeComponents/typewriter";
import { motion } from "framer-motion";
import profileimg from "../assets/images/Profile1.jpg";

const Home = () => {
  return (
    <motion.div
      className="flex w-full h-full md:h-fit lg:h-screen items-center justify-center pt-10 md:pt-24 md:pb-12 lg:overflow-x-hidden"
      initial={{ opacity: 0, x: -125 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="xl:flex justify-center items-center w-full lg:px-4 lg:gap-x-24">
        <div className="flex justify-center px-16 lg:p-0 md:mb-4">
          <div className="avatar-wrapper">
            <img
              className="avatar-img w-full h-full object-cover"
              src={profileimg}
              alt="Profile"
            />
          </div>
        </div>
        <div className="text-white w-auto flex flex-col justify-center items-center xl:items-start gap-5 lg:gap-0 md:gap-6 p-4">
          <h2
            className="md:text-6xl text-center text-4xl font-extrabold md:font-semibold md:mb-6 px-10 lg:p-0"
            style={{ fontFamily: "nura, sans-serif" }}
          >
            LIDO SHANFEAR
          </h2>
          <h1 className="text-2xl font-semibold lg:mb-6">
            <span className="h-auto w-lg">
              <Typing />
            </span>
          </h1>
          <p className="md:w-lg text-center xl:text-start font-custom-mulish font-normal tracking-(--tracking-4) lg:mb-6">
            A React Developer crafting fast, scalable, and intuitive web
            applications with React, TypeScript, and Tailwind CSS. Passionate
            about clean code, performance, and seamless user experiences.
          </p>
          <ul className="flex py-4 lg:w-2/5">
            <li className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out px-3">
              <a className="custom-link" href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out px-3">
              <a className="custom-link" href="">
                <FaTwitter />
              </a>
            </li>
            <li className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out px-3">
              <a className="custom-link" href="">
                <RiInstagramFill />
              </a>
            </li>
            <li className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out px-3">
              <a
                className="custom-link"
                href="https://www.linkedin.com/in/lido-shanfear-b39744308"
              >
                <GrLinkedin />
              </a>
            </li>
            <li className="hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out px-3">
              <a className="custom-link" href="https://github.com/Lido001">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
