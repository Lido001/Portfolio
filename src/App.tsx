import "./App.css";
import SideBar from "./components/HomeComponents/sidebar";
import About from "./pages/about";
import Service from "./pages/service";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Contact from "./pages/Contact";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="lg:flex bg-(--bs-custom-body) justify-center scroll-smooth">
        <div>
          <SideBar />
        </div>
        <div className="w-full h-screen overflow-y-auto">
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
    </>
  );
}

export default App;




// import "./App.css";
// import SideBar from "./components/HomeComponents/sidebar";
// import About from "./pages/about";
// import Service from "./pages/service";
// import {Routes,Route} from 'react-router-dom'
// import Home from "./pages/home";
// import Portfolio from "./pages/Portfolio";
// import News from "./pages/News";
// import Contact from "./pages/Contact";
// function App() {

//   return (
//     <>
//       <div className="lg:flex bg-(--bs-custom-body) justify-center scroll-smooth">
//         <div className="">
//           <SideBar />
//         </div>
//         <div className="w-full h-screen overflow-y-scroll">
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/service" element={<Service/>}/>
//             <Route path="/portfolio" element={<Portfolio/>}/>
//             <Route path="/news" element={<News/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;