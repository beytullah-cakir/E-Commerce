import "./Bottombar.css";

export default function Bottombar() {
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
          <h2>Linkler</h2>
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
          <textarea
            name="message"
            class="text-input contact-input"
            placeholder="Mesajınızı buraya yazın"
          ></textarea>
          <button type="submit" class="btn btn-big contact-btn">
            Gönder
          </button>
        </div>
        
      </div>
    
  );
}
