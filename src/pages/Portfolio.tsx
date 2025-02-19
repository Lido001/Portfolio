import ProjectsGrid from "../components/PortfolioComponents/ProjectsGrid";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div className="text-white"
    initial={{opacity: 0, x: -125}}
    animate={{opacity: 1, x: 0}}
    transition={{duration:1,ease:"easeInOut"}}>
      <section className="lg:px-32 lg:py-24 p-6 pt-24">
        <div className="w-full flex flex-col gap-y-10">
          <div>
            <span className="px-1.5 py-2.5 bg-(--bs-custom-aboutbg) text-custom-aboutcolor text-xs font-semibold font-custom-montserrat leading-0">
              Portfolio
            </span>
          </div>
          <div className="mb-9 md:mb-6 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between lg:items-center">
            <h3 className="text-3xl font-custom-montserrat font-extrabold md:leading-[1.2px] tracking-wide">
              Creative Portfolio
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start lg:justify-end gap-6 md:gap-10 lg:gap-12 text-(--bs-custom-serviceclr)">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Web Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  UI/UX Designs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ProjectsGrid />
      </section>
    </motion.div>
  );
};

export default Portfolio;
