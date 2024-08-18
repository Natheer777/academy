import "./Navbar.css";
import Logo from "../../assets/Logo/الشعار-2-png.png";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import {  GrServices } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <>
<div className="container">
<div className="title container">
  <ul>
    <li>  
          <h1 className=" left">أكاديمية اللغة اليابانية</h1>
    </li>

    <li> <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
     </li>
  </ul>
         
        </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active item1 hidden">
                <a className="nav-link" href="#">
                  <FaHome />الصفحة الرئيسية
                  <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item item2 hidden">
                <Link className="nav-link" to="/academy/about">
               <IoPerson />   من نحن ؟
                </Link>
              </li>
              <li className="nav-item item3 hidden">
                <Link className="nav-link" to="/academy/Date">
              <GrServices />    مواعيد الدروس
                </Link>
              </li>
              <li className="nav-item item4 hidden">
                <a className="nav-link" href="#Contact">
               <FaPhoneAlt />   تواصل معنا
                </a>
              </li>
              <li className="nav-item dropdown item5 hidden">
                <a
                  className="nav-link dropdown-toggle fs-5"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                <LuLanguages />{/* {t("Navbar-languages")} */}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    onClick={() => {
                      i18n.changeLanguage("ja");
                    }}
                    className="dropdown-item"
                    // href="/#"
                  >
                    日本語
                  </a>
                  <a
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className="dropdown-item"
                    // href="/#"
                  >
                    English
                  </a>
                  <a
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                    className="dropdown-item"
                    // href="/#"
                  >
                    العربية
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </div>
    </>
  );
}
