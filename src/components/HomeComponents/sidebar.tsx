import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoPerson, IoNewspaperOutline } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
import { PiBriefcaseFill } from "react-icons/pi";
import { IoIosMail, IoMdMenu, IoMdClose } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/images/Profile1.jpg";

const SideBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar (Sticky on small screens) */}
      <div className="xl:hidden fixed top-0 left-0 w-full bg-black p-4 text-white flex justify-between items-center z-50">
        <IoMdMenu
          size={30}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <Avatar alt="" src={profileImg} sx={{ width: 32, height: 32 }} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white w-72 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0 xl:relative xl:h-screen xl:w-72 flex flex-col md:gap-y-12 lg:justify-between justify-between py-4 overflow-hidden md:overflow-y-scroll lg:overflow-hidden`}
      >
        {/* Close Button (only visible on small screens) */}
        <div className="flex flex-col gap-y-6 md:gap-y-4 lg:gap-y-6 xl:gap-y-12">
          <div className="xl:hidden flex justify-end pt-4 pe-4 md:p-1 md:pe-4 lg:p-4">
            <IoMdClose
              size={30}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Avatar and Role */}
          <div className="flex flex-col justify-center items-center gap-y-6 xl:pt-12">
            <Avatar
              alt=""
              src={profileImg}
              sx={{
                width: { xs: 100, sm: 80, md: 100 },
                height: { xs: 100, sm: 80, md: 100 },
              }}
            />
            <h6
              className="text-white font-semibold text-nowrap tracking-wider"
              style={{ fontFamily: "nura, sans-serif" }}
            >
              MERN STACK DEVELOPER
            </h6>
          </div>

          {/* Navigation List */}
          <ul className="text-white w-full flex flex-col list ps-4 ">
            <li
              onClick={() => {
                navigate("/");
                setActive("home");
                setIsOpen(false);
              }}
              className={`${
                active === "home" ? "active" : "list"
              } flex items-center cursor-pointer px-2.5 py-3`}
            >
              <FaHome />
              <span className="ms-2">Home</span>
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setActive("about");
                setIsOpen(false);
              }}
              className={`${
                active === "about" ? "active" : "list"
              } flex items-center cursor-pointer px-2.5 py-3`}
            >
              <IoPerson />
              <span className="ms-2">About</span>
            </li>
            <li
              onClick={() => {
                navigate("/service");
                setActive("service");
                setIsOpen(false);
              }}
              className={`${
                active === "service" ? "active" : "list"
              } flex items-center cursor-pointer px-2.5 py-3`}
            >
              <TbSettingsFilled />
              <span className="ms-2">Services</span>
            </li>
            <li
              onClick={() => {
                navigate("/portfolio");
                setActive("portfolio");
                setIsOpen(false);
              }}
              className={`${
                active === "portfolio" ? "active" : "list"
              } flex items-center cursor-pointer px-2.5 py-3`}
            >
              <PiBriefcaseFill />
              <span className="ms-2">Portfolio</span>
            </li>
            <li
              onClick={() => {
                navigate("/news");
                setActive("news");
                setIsOpen(false);
              }}
              className={`${
                active === "news" ? "active" : "list"
              } flex items-center cursor-pointer px-2.5 py-3`}
            >
              <IoNewspaperOutline />
              <span className="ms-2">News</span>
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                setActive("contact");
                setIsOpen(false);
              }}
              className={`${
                active === "contact" ? "active" : "list"
              } flex items-center cursor-pointer px-2.5 py-3`}
            >
              <IoIosMail />
              <span className="ms-2">Contact</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-white ps-6">
          <p>&copy; INC. 2024-2025</p>
        </div>
      </div>
    </>
  );
}
export default SideBar;
