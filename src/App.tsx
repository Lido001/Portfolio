import "./App.css";
import SideBar from "./components/HomeComponents/sidebar";
import About from "./pages/about";
import Service from "./pages/service";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Contact from "./pages/Contact";
import { useEffect, useRef } from "react";
import SmoothScrollProvider from "./components/smoothScrollProvider";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the page was reloaded using performance API
    const navigationEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      navigate("/", { replace: true }); // Redirect to Home Page
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="lg:flex bg-(--bs-custom-body) justify-center">
        <div>
          <SideBar />
        </div>
        <div
          ref={scrollRef}
          style={{ overscrollBehavior: "contain" }}
          className="w-full h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <SmoothScrollProvider scrollContainer={scrollRef} />
    </>
  );
}

export default App;
