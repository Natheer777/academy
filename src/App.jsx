import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { About, Dash, Date_lisson, Home, Login } from "./pages/index";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../src/assets/Logo/الشعار-2-png.png";
import { FaLine } from "react-icons/fa";
import ProtectedRoute from "./pages/ProtectedRoute";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


function App() {



/////////////////////////////////////////////

  /////////////////////////////////////////////
  useEffect(() => {
    setInterval(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const leftElements = document.querySelectorAll(".left");
      const rightElements = document.querySelectorAll(".right");
      const hiddenElements = document.querySelectorAll(".hidden");
      const topElements = document.querySelectorAll(".top");
      leftElements.forEach((el) => observer.observe(el));
      rightElements.forEach((el) => observer.observe(el));
      hiddenElements.forEach((el) => observer.observe(el));
      topElements.forEach((el) => observer.observe(el));

      return () => {
        leftElements.forEach((el) => observer.unobserve(el));
        rightElements.forEach((el) => observer.unobserve(el));
        hiddenElements.forEach((el) => observer.unobserve(el));
        topElements.forEach((el) => observer.unobserve(el));
      };
    });
  }, []);


  ////////////////////////////////////

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  ///////////////////////////////////

  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  ///////////////////

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  return (
    <>
      <div className="social">
        <ul onClick={toggleIcons} style={{ cursor: "pointer" }}>
          <li className="click">
            <IoChatbubbleEllipsesOutline />
          </li>
          {showIcons && (
            <>
              <li className="line top">
                <a href="https://line.me/ti/p/IuAqVt59QV">
                  <FaLine />
                </a>
              </li>
              <li className="email top">
                <a href="mailto:contact@sawagroup.jp">
                  <MdEmail />
                </a>
              </li>
              <li className="whatsapp top">
                <a href="https://wa.link/mr0gya">
                  <FaWhatsapp />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      {loading ? (
        <img className="Loading" src={Logo} alt="" />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/academy/" element={<Home />} />
              <Route path="/academy/About" element={<About />} />
              <Route path="/academy/Date" element={<Date_lisson />} />
              {/* <Route path="/academy/Dash" element={<Dash/>} /> */}
              <Route path="/academy/Login" element={<Login />} />
              <Route 
            path="/academy/Dash" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
              {<Dash />}
              </ProtectedRoute>
            } 
          />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
