import FizzyButton from "../components/AboutComponents/Fizzybutton";
import ProgressBar from "../components/AboutComponents/ProgressBar";
import WorkJourney from "../components/AboutComponents/WorkJourney";
import { Skills } from "../components/AboutComponents/aboutData";
import Carousel from "../components/AboutComponents/carousel";
import { motion } from "framer-motion";
// import aboutimg from "../assets/images/1746630177847....jpg";
// import aboutimg from "../assets/images/1746970788356.....jpg";
// import aboutimg from "../assets/images/edit1..png";
// import aboutimg from "../assets/images/profile..png";
import SkillsSet from "../components/AboutComponents/skillsSet";
import { useState } from "react";

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <motion.div
      className="text-white lg:px-3"
      initial={{ opacity: 0, x: -125 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <header className="lg:px-28 mb-12 flex flex-col justify-center px-6">
        <div className="flex flex-col justify-self-start pt-16 lg:w-full">
          <div className="my-6">
            <span className="px-2 py-3 text-xs bg-custom-aboutbg text-custom-aboutcolor font-custom-mulish font-semibold">
              ABOUT
            </span>
          </div>
          <div className="mb-12">
            <h3 className="font-custom-montserra text-3xl font-extrabold tracking-wide">
              About Me
            </h3>
          </div>
          {/* <div className="h-auto lg:mb-12 mb-6">
            <img src={aboutimg} alt="" />
          </div> */}
          <div className="lg-mb-12">
            <h3 className="text-2xl font-bold font-custom-montserrat mb-1">
              LIDO SHANFEAR
            </h3>
            <span className="text-custom-aboutcolor font-custom-mulish text-base">
              Web Developer
            </span>
          </div>
          <div className="border-1 border-custom-color border-bottom lg:my-6 my-5"></div>
          <div className="flex flex-col gap-5">
            <p className="text-custom-aboutcolor custom-p">
              Hi, I’m Lido Shanfear, an aspiring React Developer with a strong
              passion for building dynamic and user-friendly web applications.
              Proficient in React, TypeScript, and Tailwind CSS, I focus on
              writing clean, efficient, and maintainable code to create seamless
              digital experiences.
            </p>
            <p className="text-custom-aboutcolor custom-p">
              As a fresher, I am eager to apply my skills, learn from industry
              experts, and contribute to innovative projects. I am looking for
              an opportunity to prove my abilities, grow as a developer, and
              make a meaningful impact in a collaborative environment.
            </p>
          </div>
          <div className="border-1 border-custom-color border-bottom lg:my-6 my-5"></div>

          <div className="flex flex-col md:flex-row lg:gap-40 gap-12 lg:mb-6">
            <div className="flex gap-x-12 justify-self-start">
              <ul className="grid gap-y-3 font-bold">
                <li>
                  <span>Birthday: </span>
                </li>
                <li>
                  <span>Age: </span>
                </li>
                <li>
                  <span>Address: </span>
                </li>
                <li>
                  <span>Email:</span>
                </li>
                <li>
                  <span>Phone:</span>
                </li>
              </ul>
              <ul className="grid gap-y-3 text-custom-aboutcolor">
                <li>
                  <span>28-09-2003</span>
                </li>
                <li>
                  <span>21</span>
                </li>
                <li>
                  <span>Verkilambi, kanyakumari, Tamil Nadu</span>
                </li>
                <li>
                  <span>lidoshanfear@gmail.com</span>
                </li>
                <li>
                  <span>+91 8489622549</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-12 justify-start">
              <ul className="grid gap-y-3 font-bold">
                <li>
                  <span>Nationality : </span>
                </li>
                <li>
                  <span>Study : </span>
                </li>
                <li>
                  <span>Degree : </span>
                </li>
                <li>
                  <span>Interest :</span>
                </li>
                <li>
                  <span>Freelance :</span>
                </li>
              </ul>
              <ul className="grid gap-y-3 text-custom-aboutcolor">
                <li>
                  <span>Indian</span>
                </li>
                <li>
                  <span>Anna University</span>
                </li>
                <li>
                  <span>Bachelors</span>
                </li>
                <li>
                  <span>Reading Books</span>
                </li>
                <li>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-bottom border-custom-color my-5"></div>
          <div className="my-6">
            <FizzyButton />
          </div>
        </div>
      </header>
      <div className="flex justify-between flex-col p-5 py-18 gap-y-14 lg:gap-y-20 lg:p-12 w-full bg-black">
        <div className="w-full xl:px-12 flex flex-col lg:gap-y-12 gap-y-5">
          <h1 className="font-semibold text-2xl font-custom-montserrat">
            Programming Skills
          </h1>
          <div className="flex flex-col gap-y-5">
            {Skills.programmingSkills.map((item, index) => (
              <div key={index}>
                <ProgressBar percentage={item.percentage} skill={item.skill} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full xl:px-12 flex flex-col lg:gap-y-12 gap-y-5">
          <h1 className="font-semibold text-2xl font-custom-montserrat">
            Languages
          </h1>
          <div className="flex flex-col gap-y-5 lg:pb-4">
            {Skills.languageSkills.map((item, index) => (
              <div key={index}>
                <ProgressBar
                  percentage={item.percentage}
                  skill={item.language}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:px-28 py-12 px-6">
        <h1 className="font-custom-montserrat text-4xl font-semibold mb-3 text-center pt-6">
          My Technical <span className="text-red-500">Skills</span>
        </h1>

        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12 text-(--bs-custom-serviceclr) pt-6">
          {["All", "Front End", "Back End"].map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`relative transition-all duration-300 pb-1
    ${
      selectedCategory === category
        ? "text-white translate-y-[-2px] after:scale-x-100"
        : "text-gray-400 hover:text-white hover:translate-y-[-2px] after:scale-x-0 hover:cursor-pointer"
    }
    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:w-full
    after:transition-transform after:duration-300 after:ease-in-out after:origin-left
    hover:after:scale-x-100`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <SkillsSet selectedCategory={selectedCategory} />
      </div>
      <div>
        <WorkJourney />
      </div>
      <div className="my-12">
        <Carousel />
      </div>
    </motion.div>
  );
};

export default About;
