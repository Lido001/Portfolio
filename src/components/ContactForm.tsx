import { GrSend } from "react-icons/gr";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState("SEND A MESSAGE");

  // Initialize EmailJS once when the component mounts
  useEffect(() => {
    emailjs.init("976XweanLjLgWriNo"); // Replace with your EmailJS user ID
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setIsSending(true);
      setButtonText("Sending...");

      emailjs
        .sendForm("service_i22v54k", "template_nikdvom", form.current)
        .then(
          () => {
            // Success alert
            Swal.fire({
              title: "Message Sent!",
              text: "Thank you for reaching out. We'll get back to you soon!",
              icon: "success",
              confirmButtonText: "OK",
              confirmButtonColor: "#3085d6",
            });

            // Reset form and button state
            setIsSending(false);
            setButtonText("SENT A MESSAGE");
            form.current?.reset();
          },
          (error) => {
            // Error alert
            Swal.fire({
              title: "Error!",
              text: "Failed to send the message. Please try again later.",
              icon: "error",
              confirmButtonText: "Retry",
              confirmButtonColor: "#d33",
            });

            // Reset button state
            setIsSending(false);
            setButtonText("SENT A MESSAGE");
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div>
      <section>
        <form id="contact-form" action="post" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-y-12">
            <input
              type="text"
              name="fromname"
              placeholder="Name"
              required
              autoComplete="off"
              className="bg-transparent border-b-2 text-xl font-custom-montserrat decoration-0 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
              className="bg-transparent border-b-2 text-lg font-custom-montserrat focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact"
              required
              autoComplete="off"
              className="bg-transparent border-b-2 text-lg font-custom-montserrat focus:outline-none"
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Message"
              required
              autoComplete="off"
              className="bg-transparent border-b-2 text-lg font-custom-montish focus:outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="relative overflow-hidden px-6 py-2 font-custom-montserrat font-semibold text-black bg-white border-2 border-black transition-all duration-300 ease-in-out group disabled:opacity-50"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-white flex items-center gap-2 justify-center">
                {buttonText}
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-75 ease-in-out">
                  <GrSend />
                </span>
              </span>
              {/* Background Effect */}
              <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center"></span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
