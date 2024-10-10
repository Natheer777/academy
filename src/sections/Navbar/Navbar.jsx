import "./Navbar.css";
import Logo from "../../assets/Logo/الشعار-2-png.png";
import { FaHome } from "react-icons/fa";
// import { IoPerson } from "react-icons/io5";
// import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
import { HiChevronDoubleDown } from "react-icons/hi";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active item1 hidden">
              <Link className="nav-link" to="/academy">
                <FaHome />
                الصفحة الرئيسية
                <span className="sr-only"></span>
              </Link>
            </li>
            {/* <li className="nav-item item2 hidden">
              <Link className="nav-link" to="/academy/about">
                <IoPerson /> من نحن ؟
              </Link>
            </li> */}
            {/* <li className="nav-item item3 hidden">
              <Link className="nav-link" to="/academy/Date">
                <GrServices /> محتويات الدروس
              </Link>
            </li> */}
            <li className="nav-item item2 hidden">
              <Link className="nav-link" to="/academy/Level_division">
                تقسيم المستويات
              </Link>
            </li>
            <li className="nav-item item3 hidden">
              <Link className="nav-link" to="/academy/Fees">
                الرسوم
              </Link>
            </li>
            <li className="nav-item item4 hidden">
              <Link className="nav-link dropdown-item" to="/academy/Register">
                طريقة التسجيل
              </Link>
            </li>

            <li className="nav-item item4 hidden">
              <Link className="nav-link dropdown-item" to="/academy/Teachers">
                التعريف بالأساتذة
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <HiChevronDoubleDown /> باقي الأقسام
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="nav-item item4 hidden">
                  <Link
                    className="nav-link dropdown-item"
                    to="/academy/Study_materials"
                  >
                    المواد الدراسية
                  </Link>
                </li>
                <li className="nav-item item4 hidden">
                  <Link
                    className="nav-link dropdown-item"
                    to="/academy/More_services"
                  >
                    خدمات إاضافية
                  </Link>
                </li>
                <li className="nav-item item4 hidden">
                  <Link
                    className="nav-link dropdown-item"
                    to="/academy/Support"
                  >
                    الدعم الفني
                  </Link>
                </li>
              </div>
            </li>
          </ul>
          <div className="buttons">
            <button className="login_nav">تسجيل الدخول</button>
            <Link to="/academy/Register_account">
              <button className="register_nav">سجل الان</button>
            </Link>
          </div>
        </div>
      </nav>

      {/*     
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
                <Link className="nav-link" to="/academy">
                  <FaHome />الصفحة الرئيسية
                  <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item item2 hidden">
                <Link className="nav-link" to="/academy/about">
               <IoPerson />   من نحن ؟
                </Link>
              </li>
              <li className="nav-item item3 hidden">
                <Link className="nav-link" to="/academy/Date">
              <GrServices />    محتويات الدروس
                </Link>
              </li> */}
      {/* <li className="nav-item item3 hidden">
                <Link className="nav-link none" to="/academy/Login">لوحة التحكم
                </Link>
              </li> */}
      {/* <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Articles">
                        المقالات
                </Link>
              </li> */}
      {/* <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Questions">
                    الاسئلة المتكررة              
                 </Link>
              </li> */}
      {/* <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Level_division">
                    تقسيم المستويات            
                 </Link>
              </li>
              <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Register">
                  طريقة التسجيل           
                 </Link>
              </li>
              <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Teachers">
                التعريف بالأساتذة        
                 </Link>
              </li>
              <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Study_materials">
               المواد الدراسية      
                 </Link>
              </li>
              <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/More_services">
        خدمات إاضافية    
                 </Link>
              </li>
              <li className="nav-item item4 hidden">
                <Link className="nav-link" to="/academy/Support">
       الدعم الفني  
                 </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
            </div> */}
    </>
  );
}
