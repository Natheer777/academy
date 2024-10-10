import "./Footer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/Logo/الشعار-2-png.png";
export default function Footer() {
  return (
    <>
      {/* <footer className="footer">
        <MDBFooter
          bgColor="bg-secondary"
          className="text-white text-center text-lg-left"
        >
          <MDBContainer className="p-4">
            <MDBRow>
              <MDBCol lg="3" md="4">
                <div className="text-uppercase">
                  <img className="Logo_Footer" src={logo} alt="" />
                </div>

                <p></p>
              </MDBCol>
              <MDBCol lg="9" md="8">
                <h5 className="text-uppercase adress"> Adress</h5>

                <ul className="list-unstyled">
                  <li>
                    <RiHomeOfficeLine /> Office
                  </li>
                  <li>
                    <FaMobileAlt />
                    Phone
                  </li>
                  <a href="https://wa.link/mr0gya">
                    <li>
                      <FaWhatsapp /> Whatsapp
                    </li>
                  </a>
                  <a href="https://line.me/ti/p/IuAqVt59QV">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-line"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                      </svg>{" "}
                      Line
                    </li>
                    </a>
                    <a href="mailto:contact@sawagroup.jp">
                      

                    <li>
                      <MdEmail />Email
                    </li>
                  </a>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &copy; {new Date().getFullYear()}
            <a className="text-white">
              Copyright © 2022 SAWA GROUP LLC. All Rights Reserved.
            </a>
          </div>
        </MDBFooter>
      </footer> */}











<footer className="text-right pt-70 footer">
<div className="container">
<div className="row">
<div className="col-md-4 col-sm-4 col-12">
<div className="footerLogo">
<a href="index.php">
<img src={logo} alt="Logo" className="d-inline-block align-text-top" />
</a>
</div>
</div>
<div className="col-md-3 col-sm-4 col-xs-6 desktop">
<h4 className="fw-600 text-green-dark">
ترميز المالية </h4>
<div className="mt-3">
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co//contacts" target="_self">
تواصل معنا </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/sharia-committee" target="_self">
اللجنة الشرعية </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/career" target="_self">
انضم للفريق </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/terms-conditions" target="_self">
الشروط والأحكام </a>
</h6>
</div>
</div>
<div className="col-md-3 col-sm-4 col-xs-6 mobile">
<div className="mt-3">
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co//contacts" target="_self">
تواصل معنا </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/faq" target="_self">
الاسئلة الشائعة </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/career" target="_self">
انضم للفريق </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/terms-conditions" target="_self">
الشروط والأحكام </a>
</h6>
</div>
</div>
<div className="col-md-2 col-12 d-none d-md-block">
<h4 className="fw-600 text-green-dark">المنتج</h4>
<div className="mt-3">
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co//contacts" target="_self">
مركز المساعدة </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/faq" target="_self">
الاسئلة الشائعة </a>
</h6>
<h6 className="mb-3 fz-15 fw-200 level_1">
<a href="https://tarmeez.co/سياسة-الخصوصية" target="_parent">
سياسة الخصوصية </a>
</h6>
</div>
</div>
<div className="col-md-3 col-sm-4 col-xs-6">
<div className="footer-4-content">
<h6>رقم التواصل</h6>
<h6><i className="fa-solid fa-phone"></i><a href="tel:011 834 9687"> 011 834 9687</a></h6>
<p>ساعات العمل الرسمية تبدأ من الأحد حتى الخميس من الساعة 9 صباحًا إلى 4 مساءًا.</p>
<div className="social-menu mb-3">
<ul>
<li><a href="https://instagram.com/tarmeez_capital?igshid=MzRlODBiNWFlZA==" target="blank"><i className="fab fa-instagram"></i></a></li>
<li><a href="https://twitter.com/tarmeez_capital"><i className="fa-brands fa-x-twitter"></i></a></li>
<li><a href="https://www.linkedin.com/company/tarmeez-capital/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
</ul>
</div>
</div> </div>
</div>
<div className="text-right footer-notice">
<p>إشعار المخاطر: يعد الاستثمار في الأوراق المالية استثمارًا عالي المخاطر، ولا يدخل تحت مسؤولية شركة ترميز ضمانها أو التأمين عليها بأي شكل من الأشكال ويجب أن يقرّ المستخدم لمنصة ترميز أن استثماره عرضة لجميع أنواع المخاطر بشكل كامل أو جزئي وأن استثماره يعد خاضعًا لقيود محددة من حيث مدته وإمكانية بيعه أو تسييله. ويدرك بأن دور منصة ترميز مقتصر على عرض طلبات التمويل بعد مراجعتها وتقييمها وعرضها على المستثمرين بما يتفق مع متطلبات هيئة السوق المالية.</p> </div>
</div>
</footer>


    </>
  );
}
