import ServiceGrid from "../components/ServiceComponents/ServiceGrid";
import { motion } from "framer-motion";

const service = () => {
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
              SERVICES
            </span>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-custom-montserrat font-extrabold leading-[1.2px] tracking-wide">
              What I Do
            </h3>
          </div>
        </div>
        <div>
          <ServiceGrid />
        </div>
      </section>
    </motion.div>
  );
};

export default service;
