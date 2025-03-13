import ProjectsGrid from "../components/PortfolioComponents/ProjectsGrid";
import { motion } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <motion.div
      className="text-white"
      initial={{ opacity: 0, x: -125 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
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
              {["All", "Web Apps", "UI/UX Designs", "Branding"].map(
                (category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`relative transition-all duration-300 pb-1
    ${
      selectedCategory === category
        ? "text-white translate-y-[-2px] after:scale-x-100"
        : "text-gray-400 hover:text-white hover:translate-y-[-2px] after:scale-x-0"
    }
    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:w-full
    after:transition-transform after:duration-300 after:ease-in-out after:origin-left
    hover:after:scale-x-100`}
                    >
                      {category}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <ProjectsGrid selectedCategory={selectedCategory} />
      </section>
    </motion.div>
  );
};

export default Portfolio;
