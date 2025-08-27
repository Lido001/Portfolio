import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workStages } from "./aboutData";
import { FaMapMarkerAlt } from "react-icons/fa";

const TimeLine = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const isFirstInView = useInView(firstRef, { amount: 0.5, once: true });
  const isSecondInView = useInView(secondRef, { amount: 0.5, once: true });
  return (
    <div>
      <div className="md:px-24 lg:py-24 lg:hidden flex flex-col lg:justify-between w-full grid-cols-2 gap-x-16 gap-y-16 bg-black p-6">
        <div ref={firstRef} className="flex flex-col gap-y-12">
          <h1 className="font-custom-montserrat text-xl font-bold">
            Education
          </h1>
          <div className="flex flex-col gap-y-12 border-l-2 border-gray-300">
            {workStages.education.map((stage, index) => (
              <ul key={index} className="relative">
                <motion.li
                  className="flex flex-col items-start relative gap-y-4 md:gap-x-6"
                  animate={isFirstInView ? { opacity: 1, x: 0 } : {}}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="w-1/2 flex journey">
                    <span className="py-3 px-6 rounded-full bg-(--bs-custom-aboutbg) text-(--bs-custom-aboutclr) text-nowrap ms-4 md:ms-6">
                      {stage.time}
                    </span>
                  </div>
                  <div className="w-full ms-4">
                    <h3 className="text-wrap text-base font-semibold font-custom-montserrat lg:mb-0.5 ">
                      {stage.title}
                    </h3>
                    <span className="text-(--bs-custom-aboutclr) text-sm font-custom-mulish font-normal tracking-wide">
                      {stage.description}
                    </span>
                  </div>
                </motion.li>
              </ul>
            ))}
          </div>
        </div>
        <div ref={secondRef} className="flex flex-col gap-y-12">
          <h1 className="font-custom-montserrat text-xl font-bold">
            Experience
          </h1>
          <div className="flex flex-col gap-y-12 border-l-2 border-gray-300">
            {workStages.experience.map((stage, index) => (
              <ul key={index} className="relative">
                <motion.li
                  className="flex flex-col items-start relative gap-y-4 md:gap-x-6"
                  animate={isSecondInView ? { opacity: 1, x: 0 } : {}}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <div className="w-1/2 flex journey">
                    <span className="py-3 px-6 rounded-full bg-(--bs-custom-aboutbg) text-(--bs-custom-aboutclr) text-nowrap ms-4 md:ms-6">
                      {stage.time}
                    </span>
                  </div>
                  <div className="w-full ms-4">
                    <div className="flex flex-col">
                      <h3 className="text-wrap text-base font-semibold font-custom-montserrat lg:mb-0.5">
                        {stage.title}
                      </h3>
                      <h6 className="flex items-center gap-x-0.5 text-wrap text-sm text-gray-300 font-medium font-custom-montserrat mb-1">
                        <span>
                          <FaMapMarkerAlt />
                        </span>
                        {stage.location}
                      </h6>
                    </div>
                    <span className="text-(--bs-custom-aboutclr) text-sm font-custom-mulish font-normal tracking-wide">
                      {stage.description}
                    </span>
                  </div>
                </motion.li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
