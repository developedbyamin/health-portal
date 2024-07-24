import React from "react";
import InformationCard from "./InformationCard";
import { faNotesMedical, faTruckMedical, faAtom } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Biz nə edirik?</span>
        </h3>
        <p className="info-description">
        Biz sizin ehtiyaclarınıza uyğunlaşdırılmış geniş çeşidli tibbi xidmətlər təklif edərək, səhiyyə xidmətini sizin rahatlığınıza gətiririk. Platformamız sizə ekspert tibbi məsləhətlər verən, onlayn reseptlər verən və istədiyiniz zaman tez doldurma təklif edən təcrübəli onlayn həkimlərlə əlaqə saxlamağa imkan verir. 
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Mərkəzləşdirilmiş vahid sistem"
          description="Sağlamlıq Portalı həkimlər, klinikalar və xəstəxanalar da daxil olmaqla səhiyyə təminatçılarının hərtərəfli və mərkəzləşdirilmiş kataloqunu təklif edir."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Sadələşdirilmiş görüş təyinləri"
          description="Platforma tibb işçiləri ilə görüşləri planlaşdırmaq və idarə etmək üçün istifadəçi dostu bir sistem təqdim edir.."
          icon={faNotesMedical}
        />

        <InformationCard
          title="İnteqrasiya edilmiş İdarə"
          description="Sağlamlıq Portalı fərdi sağlamlıq məlumatlarını idarə etmək və müxtəlif provayderlər arasında qayğının koordinasiyası üçün funksiyaları ehtiva edir."
          icon={faAtom}
        />
      </div>
    </div>
  );
}

export default Info;
