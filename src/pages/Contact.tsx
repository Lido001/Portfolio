import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div className="text-white"
    initial={{ opacity: 0, x: -125 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1,ease: "easeInOut" }}>
      <section className="lg:px-32 lg:py-24 p-6 pt-24">
        <div className="w-full flex flex-col  gap-y-10">
          <div>
            <span className="px-1.5 py-2.5 bg-(--bs-custom-aboutbg) text-custom-aboutcolor text-xs font-semibold font-custom-montserrat leading-0">
              CONTACT
            </span>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-custom-montserrat font-extrabold leading-[1.2px] tracking-wide">
              Get In Touch
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-y-16">
          <div className="py-10">
            <iframe
              className="filter grayscale saturate-50 brightness-100 w-full hover:grayscale-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80383.44563591163!2d77.36523764609659!3d8.170470760536846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1739358276337!5m2!1sen!2sin"
              height="450"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
