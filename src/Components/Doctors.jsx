import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Həkimlərimizlə Tanışın</span>
        </h3>

        <p className="dt-description">
        Health Portal-da yüksək səviyyəli səhiyyə xidmətləri göstərməyə həsr olunmuş müstəsna mütəxəssis həkimlərimizlə tanış olun. Sizi daha sağlam və xoşbəxt həyata aparacaq onların bilik və təcrübəsinə etibar edin.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Süleyman Məmmədov"
          title="Baş cərrah"
          stars="4.9"
          reviews="1839"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Ruslan Həmidov"
          title="Stomatoloq"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Murad İsgəndərov"
          title="Endokrinoloq"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Anar Süleymanov"
          title="Hematoloq"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
