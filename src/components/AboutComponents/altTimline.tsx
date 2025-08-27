import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workStages } from "./aboutData";
import { FaMapMarkerAlt } from "react-icons/fa";

const AltTimeLine = () => {
  const TimelineItem = ({ stage, index, withLocation = false }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });
    const isLeft = index % 2 === 0;

    return (
      <motion.div
        ref={ref}
        className={`hidden relative lg:flex flex-col w-full ${
          isLeft ? "items-start ps-17.5" : "items-end pe-18"
        }`}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        transition={{ duration: 0.6, delay: index * 0.25 }}
      >
        {/* Time bubble */}
        <div
          className={`relative w-[45%] flex ${
            isLeft ? "justify-end pe-5" : "justify-start ps-5 "
          }`}
        >
          <div>
            <span className="inline-block py-1.5 px-4 rounded-full text-sm font-semibold bg-(--bs-custom-aboutbg) text-(--bs-custom-aboutclr)">
              {stage.time}
            </span>
            {/* Connector circle */}
            <span
              className="absolute top-1 w-5 h-5 rounded-full border-1 border-white bg-black "
              style={{
                left: isLeft ? "auto" : "-12px",
                right: isLeft ? "-2rem" : "auto",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>

        {/* Content box */}
        <div className=" w-[45%] p-5 rounded-xl shadow-lg bg-black/20 backdrop-blur-sm">
          <h3 className="text-lg font-bold font-custom-montserrat">
            {stage.title}
          </h3>
          {withLocation && (
            <h6 className="flex items-center gap-x-1 text-sm text-gray-300 font-medium mt-0.5">
              <FaMapMarkerAlt /> {stage.location}
            </h6>
          )}
          <p className="text-(--bs-custom-aboutclr) text-sm font-custom-mulish mt-3 leading-relaxed ps-4">
            {stage.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-black p-6 md:px-24 lg:py-24">
      {/* Education */}
      <div className=" hidden lg:flex flex-col gap-y-12">
        <h1 className="font-custom-montserrat text-2xl font-bold text-center mb-12">
          Education
        </h1>
        <div className="relative flex flex-col pt-12 pb-6 gap-y-6">
          {/* central line only inside timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2" />
          {workStages.education.map((stage, index) => (
            <TimelineItem key={index} stage={stage} index={index} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="hidden lg:flex flex-col gap-y-12 mt-20">
        <h1 className="font-custom-montserrat text-2xl font-bold text-center mb-12">
          Experience
        </h1>
        <div className="relative flex flex-col gap-y-6 pb-6 pt-12">
          {/* central line only inside timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2" />
          {workStages.experience.map((stage, index) => (
            <TimelineItem
              key={index}
              stage={stage}
              index={index}
              withLocation
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AltTimeLine;
