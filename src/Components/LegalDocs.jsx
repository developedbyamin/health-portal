import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
        Health Portal <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Ümumi Məlumat</p>
        <p className="legal-description">
          Health Portal, etibarlı onlayn səhiyyə platformasına xoş gəlmisiniz. Missiyamız, mütəxəssis tibbi məsləhət və müalicə axtaran şəxslərə əlçatan və fərdi səhiyyə xidmətləri təqdim etməkdir. Platformamızdan istifadə etməklə Məxfilik Siyasətimiz və Xidmət Şərtlərimizdə göstərilən şərtləri qəbul edirsiniz.
        </p>

        <p className="legal-title">Məxfilik Siyasəti</p>
        <p className="legal-description">
          Sizin məxfiliyiniz bizim üçün çox vacibdir. Məxfilik Siyasətimiz şəxsi və tibbi məlumatlarınızı necə topladığımızı, istifadə etdiyimizi və qoruduğumuzu təsvir edir. Məlumatlarınızın təhlükəsiz şəkildə idarə edildiyinə və ən yüksək məxfiliklə qorunduğuna əmin ola bilərsiniz.
        </p>

        <p className="legal-title">Xidmət Şərtləri</p>
        <p className="legal-description">
          Health Portal-dan istifadə edərkən, Xidmət Şərtlərimizi qəbul edirsiniz. Bu, platformamızdan istifadə qaydaları, həkimlərlə qarşılıqlı əlaqə və hər iki tərəfin məsuliyyətlərini əhatə edir. Bu şərtləri başa düşmək bütün istifadəçilər üçün rahat bir təcrübə təmin etmək üçün vacibdir.
        </p>

        <p className="legal-title">Konsultasiyalar</p>
        <p className="legal-description">
          Platformamız sizi onlayn konsultasiyalar aparan mütəxəssis həkimlərlə əlaqələndirir. Bu konsultasiyalar yerində tibbi ziyarətlərin əvəzi deyil, lakin tibbi məsləhət, reseptlər və yol göstərişi üçün rahat bir seçimdir. Ən yaxşı qayğı almaq üçün dəqiq və tam məlumat vermək vacibdir.
        </p>

        <p className="legal-title">Necə İşləyir</p>
        <p className="legal-description">
          Health Portal səhiyyə xidmətinə çıxışı sadələşdirmək üçün nəzərdə tutulub. Siz mütəxəssisi seçə, randevu təyin edə və virtual konsultasiya keçirə bilərsiniz. Mütəxəssislərimiz sizə ehtiyaclarınıza uyğun fərdi məsləhətlər və müalicə planları təklif edirlər. Unutmayın ki, təcili hallarda dərhal tibbi yardım tələb olunur və yerli tibb müəssisənizə yönəldilməlidir.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024. Bütün hüquqlar qorunur.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
