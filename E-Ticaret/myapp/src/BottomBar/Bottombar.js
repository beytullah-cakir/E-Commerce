import "./Bottombar.css";

export default function Bottombar() {

  // sayfa altındaki alt barı oluşturur
  return (
    
      <div class="main">
        <div class="footer-section about">
          <h2>Hakkımızda</h2>
          <ul>
            <li>
              Şirket hakkında bilgi
            </li>
            <li>
              İletişim
            </li>
            <li>
              Sosyal medya hesaplarımız
            </li>
          </ul>
        </div>
        <div class="footer-section links">
          <ul>
            <li>
              Hesabım
            </li>
            <li>
              Mağazalar
            </li>
            <li>
              İletişim
            </li>
          </ul>
        </div>
        <div class="footer-section contact-form">
          <h2>Bize Ulaşın</h2>
          <h4>ayakkabidunyasi@gmail.com</h4>
          
        </div>
        
      </div>
    
  );
}
