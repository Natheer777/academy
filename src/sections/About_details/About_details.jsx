import './About_details.css'
import { FaFacebook, FaInstagram, FaSnapchat, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function About_details() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="content">
                <div className="icons">
                    <p><FaSnapchat /></p>
                    <p><FaInstagram /></p>
                    <p><FaTelegram /></p>
                    <p><FaWhatsapp /></p>
                    <p><FaYoutube /></p>
                    <p><FaTwitter /></p>
                    <p><FaFacebook /></p>
                </div>
                <p className='text-center'>مع أكاديمية اللغة العربية ستكون اللغة العربية هي المادة الأفضل عند أبنائك.</p>
                <div className="category">
                  <h1>اكاديمية اللغة العربية</h1>
                  <h3>الإتقان في تعليم لغة القان</h3>
                  <p>امنح أبناءك فرصة الاستمتاع بتجربة فريدة ومميزة في تعليم اللغة العربية والحفاظ على هويتهم الأصيلة.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
