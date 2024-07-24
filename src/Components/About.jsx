import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Bizim haqqımızda</span>
        </h3>
        <p className="about-description">
        Əlçatan və fərdiləşdirilmiş səhiyyə xidməti üçün etibarlı tərəfdaşınız olan Health Portal-a xoş gəlmisiniz. Mütəxəssis həkimlərimiz və klinikalarımız sizin rifahınızı ön planda tutaraq onlayn məsləhətləşmələr və ixtisaslaşmış xidmətlər təklif edirlər. Daha sağlam özünüzə doğru bu yolda bizə qoşulun.
        </p>

        <h4 className="about-text-title">Bizim ilə</h4>

        <SolutionStep
          title="Mütəxəssis seçin"
          description="Sizin üçün uyğun xidməti tapın və Health Portal-da asanlıqla re edin. Mütəxəssis həkimlər xüsusi qayğı təklif edərək sağlamlığınızı prioritetləşdirir."
        />

        <SolutionStep
          title="Görüş təyin edin"
          description="Sizə ən uyğun olan tarix və vaxtı seçin və bizim xüsusi tibbi mütəxəssislər komandamıza fərdi qayğı ilə rifahınızı təmin etsin."
        />

        <SolutionStep
          title="Problemlərinizə həll tapın"
          description="Təcrübəli həkimlərimiz və mütəxəssislərimiz sizə mümkün olan ən yaxşı sağlamlığınıza nail olmaq üçün ekspert məsləhətləri və fərdi müalicə planları təqdim etmək üçün buradadırlar."
        />
      </div>
    </div>
  );
}

export default About;
