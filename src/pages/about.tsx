import FizzyButton from "../components/AboutComponents/Fizzybutton";
import ProgressBar from "../components/AboutComponents/ProgressBar";
import WorkJourney from "../components/AboutComponents/WorkJourney";
import { Skills } from "../components/AboutComponents/aboutData";
import { MdArrowRight } from "react-icons/md";
import Carousel from "../components/AboutComponents/carousel";
import { motion } from "framer-motion";
import aboutimg from "../assets/images/about.jpg";

const About = () => {
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
          <div className="h-auto lg:mb-12 mb-6">
            <img src={aboutimg} alt="" />
          </div>
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
      <div className="xl:flex-row flex justify-between flex-col p-5 py-18 gap-y-14 lg:gap-y-20 lg:p-12 w-full bg-black">
        <div className="w-full xl:pr-12 flex flex-col lg:gap-y-12 gap-y-5">
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
        <div className="w-full xl:pl-12 flex flex-col lg:gap-y-12 gap-y-5">
          <h1 className="font-semibold text-2xl font-custom-montserrat">
            Language Skills
          </h1>
          <div className="flex flex-col gap-y-5">
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

      <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 lg:m-12 lg:py-12 p-5 my-12">
        <div>
          <h1 className="font-custom-montserrat text-2xl font-semibold mb-3">
            Knowledges
          </h1>
          <div className=" place-items-start flex flex-col gap-y-2">
            {Skills.knowledges.map((item, index) => (
              <div className="flex items-center gap-x-3">
                <li className="list-none">
                  <MdArrowRight className="text-2xl" />
                </li>
                <li
                  key={index}
                  className="list-none font-custom-mulish text-custom-aboutcolor"
                >
                  {item.application}
                </li>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-custom-montserrat text-2xl font-semibold mb-3">
            Interests
          </h1>
          <div className="place-items-start  flex flex-col gap-y-2">
            {Skills.interests.map((item, index) => (
              <div className="flex items-center gap-x-3">
                <li className="list-none">
                  <MdArrowRight className="text-2xl" />
                </li>
                <li
                  key={index}
                  className="list-none font-custom-mulish text-custom-aboutcolor"
                >
                  {item.technologies}
                </li>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-custom-montserrat text-2xl font-semibold mb-3">
            Interests
          </h1>
          <div className="place-items-start flex flex-col gap-y-2">
            {Skills.interests.map((item, index) => (
              <div className="flex items-center gap-x-3">
                <li className="list-none">
                  <MdArrowRight className="text-2xl" />
                </li>
                <li
                  key={index}
                  className="list-none font-custom-mulish text-custom-aboutcolor"
                >
                  {item.technologies}
                </li>
              </div>
            ))}
          </div>
        </div>
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
