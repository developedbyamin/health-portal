import React from "react";
import { useState } from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      toast.info("Development mərhələsindəyik", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Niyə bizi seçməlisiniz</span>
        </h3>
        <p className="ba-description">
        Sizin rifahınızı bizim əsas prioritetimizə çevirərək, ekspert qayğısı, rahatlığı və fərdi həllərdən istifadə edin. Daha yaxşı sağlamlıq və xoşbəxt həyat üçün səyahətə bizə qoşulun.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Ən yaxşı peşəkar həkimlər
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Ən yaxşı peşəkar həkimlər
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Canlı Çatı dəstəyi
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Qeydiyyat Asan və Tez
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Görüş təyin edin
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
