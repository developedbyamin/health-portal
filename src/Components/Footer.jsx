import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Health Portal<span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Onlayn həkimlərlə danışın və onlayn tibbi məsləhət alın
              dəqiqələr ərzində reseptlər, əlavələr və tibbi qeydlər. Tələb üzrə
              səhiyyə xidmətləri parmaklarınızın ucunda.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Xidmətlər</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Biz nə edirik?</a>
            </li>
            <li>
              <a href="#services">Mərkəzləşdirilmiş vahid sistem</a>
            </li>
            <li>
              <a href="#services">Sadələşdirilmiş görüş təyinləri</a>
            </li>
            <li>
              <a href="#services">İnteqrasiya edilmiş İdarə</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Hüquqi</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>Ümumi Məlumat</Link>
            </li>
            <li>
              <Link to={"/legal"}>Məxfilik Siyasəti</Link>
            </li>
            <li>
              <Link to={"/legal"}>Xidmət Şərtləri</Link>
            </li>
            <li>
              <Link to={"/legal"}>Konsultasiyalar</Link>
            </li>
            <li>
              <Link to={"/legal"}>Necə İşləyir</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Bizimlə əlaqə</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:developedbyamin@gmail.com">developedbyamin@gmail.com</a>
            </li>
            <li>
              <a href="tel:+994519994189">+994519994189</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024. Bütün hüquqlar qorunur</p>
      </div>
    </div>
  );
}

export default Footer;
