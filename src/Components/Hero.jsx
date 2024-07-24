import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "../styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      toast.info("Development mərhələsindəyik", {
        position: "top-center",
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Sağlamlıq portalınız</p>
          <h2 className="text-title">
          Daha yaxşı sabah üçün vahid sağlamlıq şəbəkəniz.
          </h2>
          <p className="text-descritpion">
          Onlayn həkimlərlə danışın və bir neçə dəqiqə ərzində tibbi məsləhət, onlayn reseptlər, doldurma və tibbi qeydlər alın. Tələb olunan səhiyyə xidmətləri əlinizin altında.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Görüş təyin edin
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>?</p>
              <p>Pasiyent</p>
            </div>

            <div className="text-stats-container">
              <p>?</p>
              <p>Profesional Həkim</p>
            </div>

            <div className="text-stats-container">
              <p>?</p>
              <p>Təcrübə</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
