import React, { useState } from "react";
import "./Home.css"



function Home() {

//anasayfadaki ürünleri tanıttığımız kartları döndürür
  return(
    <div>
    
    <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <img src="/reklam/kadınReklam.png" class="img-fluid rounded" alt="..." />
        
      </div>
      <div class="col-md-6">
        <h3 class="card-title">Kadın</h3>
        <p class="card-text">Kadın Ayakkabılarıyla Her Adımda Güzellik! Stilini ve kişiliğini yansıtan kadın
          ayakkabılar mı arıyorsun? O zaman doğru yerdesin! Geniş kadın ayakkabı yelpazemizle her tarza ve her zevke
          uygun modeli bulabilirsin. 
          Kadın ayakkabılarımızla: 
          Kendini daha şık ve özgüvenli hissedebilir,
          Rahatlığın keyfini çıkarabilir,
          Her adımda stilini tamamlayabilir ve dikkatleri üzerine çekebilirsin.
        </p>
      </div>
    </div>
  </div>



  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 text-end">
        <h3 class="card-title">Erkek</h3>
        <p class="card-text">Konfor ve Şıklığın Buluştuğu Nokta: Erkek Ayakkabıları Stilini ve kişiliğini yansıtan
          erkek ayakkabılar mı arıyorsun? O zaman doğru yerdesin! Geniş erkek ayakkabı yelpazemizle her tarza ve her
          zevke uygun modeli bulabilirsin. 
          Erkek ayakkabılarımızla: 
          Kendini daha şık ve özgüvenli hissedebilir,
          Rahatlığın keyfini çıkarabilir,
          Her adımda stilini tamamlayabilir ve dikkatleri üzerine çekebilirsin.
          Ayrıca: 
          Dayanıklı ve uzun ömürlü erkek ayakkabı modellerimizle,
          Ayak sağlığını da gözetebilirsin.
        </p>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/erkekReklam.png" class="img-fluid rounded" alt="..." />
      </div>
    </div>
  </div>

  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/sporReklam.png" class="img-fluid rounded" alt="..." />
      </div>
      <div class="col-md-6">
        <h3 class="card-title">Spor Ayakkabı</h3>
        <p class="card-text">Sınırları Zorla, Kendini AşHayatın her anına hareket katmak için spor ayakkabılara mı
          ihtiyacın var? O zaman doğru yerdesin! Geniş spor ayakkabı yelpazemizle her spor dalına ve her tarza uygun
          modeli bulabilirsin. 
          Spor ayakkabılarımızla: 
          Kendini daha rahat ve özgür hissedebilir,
          Performansını artırabilir,
          Stilini tamamlayabilir ve her adımda şık görünebilirsin. 
          Ayrıca: 
          Dayanıklı ve uzun ömürlü spor ayakkabı modellerimizle,
          Ayak sağlığını da gözetebilirsin.</p>
      </div>
    </div>
  </div>
  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 text-end">
        <h3 class="card-title">Nike</h3>
        <p class="card-text">Nike ile Mümkansızı Başar!
          Nike: Sınırları zorlamanın, imkansızı başarmak için cesaret etmenin ve her zaman zirveye ulaşmanın simgesi.
        
          Nike Ayakkabıları ile:
          Kendini Aş: Her adımda potansiyelini keşfet, Nike'ın yenilikçi teknolojileri ile sınırlarını zorla ve
          imkansızı başar.
          Hedeflerine Ulaş: Farklı spor türlerine ve her seviyeye uygun Nike ayakkabı modelleri ile hedeflerine emin
          adımlarla ilerle.
          Stilini Göster: Nike'ın ikonik tasarımları ve trendleri ile her zaman şık ve özgün bir stil sahibi ol. 
          Efsanevi Performansı Deneyimle: Sporcular tarafından yıllardır tercih edilen Nike ayakkabı modelleri ile sen
          de bir efsane ol.
          Nike'da Seni Bekleyenler:
          Koşu Ayakkabıları: Hızlı ve çevik olmanı sağlayan, her koşu parkuruna uygun modeller. 
          Futbol Ayakkabıları: Çim sahalarda ve futsal sahalarda hakimiyet kurmanı sağlayacak, güçlü ve dayanıklı
          modeller.
          Günlük Ayakkabılar: Rahatlığı ve şıklığı bir araya getiren, günlük tarzına tamamlayıcı modeller.</p>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/nikeReklam.jpg" class="img-fluid rounded" alt="..." />
      </div>
    </div>
  </div>
 
  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/adidasad.jpg" class="img-fluid rounded" alt="..." />
      </div>

      <div class="col-md-6">
        <h3 class="card-title">Adidas</h3>
        <p class="card-text">Adidas ile Her Adımda Mükemmellik
          Performansın ve şıklığın öncüsü, sporun ruhunu yansıtan ikonik bir marka.
          Adidas Ayakkabıları ile:
          Sınırları Aş: Her adımda kendine meydan oku, Adidas'ın yenilikçi teknolojileri ile imkansızları başar.
          Kendini Göster: Farklı tarzlara ve zevklere hitap eden Adidas ayakkabı modelleri ile her zaman özgün ve stil
          sahibi ol.
          Konforu Yaşa: Adidas'ın ergonomik tasarımları ve yüksek kaliteli malzemeleri ile ayakların her an rahat etsin.
        
          Efsanevi Kaliteyi Deneyimle: Adidas'ın sporcular tarafından yıllardır tercih edilen ayakkabı modelleri ile sen
          de bir efsane ol.
          Adidas'da Seni Bekleyenler:
          Koşu Ayakkabıları: Hızlı ve çevik olmanı sağlayan, her koşu parkuruna uygun modeller.
          Spor Ayakkabıları: Günlük tarzına spor bir dokunuş katmak için ideal, şık ve rahat modeller.
          Futbol Ayakkabıları: Çim sahalarda ve futsal sahalarda hakimiyet kurmanı sağlayacak, güçlü ve dayanıklı
          modeller.
          Günlük Ayakkabı: Günlük hayatta tarzını en şık şekilde 3 çizgi ile yansıtan modeller. </p>
      </div>
    </div>
  </div>
  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 text-end">
        <h3 class="card-title">Puma</h3>
        <p class="card-text">Puma ile Hareket Et!
          Puma: Güç, hız ve tarzın mükemmel birleşimi
          Puma Ayakkabıları ile:
          Kendini Sınırlama: Her koşu ve antrenmanda sınırlarını zorla, Puma'nın yenilikçi teknolojileri ile daha uzağa
          git.
          Şık Ol: Farklı tarzlara ve zevklere hitap eden Puma ayakkabı modelleri ile her zaman şık ve özgün kal.
          Rahatlık Yaşa: Puma'nın konforlu ve ergonomik tasarımları ile ayakların her adımda rahat etsin.
          Efsanevi Performansı Deneyimle: Puma'nın ikonik sporcular tarafından tercih edilen ayakkabı modelleri ile sen
          de bir efsane ol.
          Puma'da Seni Bekleyenler:
          Koşu Ayakkabıları: Hızlı ve çevik olmanı sağlayan, her koşu parkuruna uygun modeller.
          Spor Ayakkabıları: Günlük tarzına spor bir dokunuş katmak için ideal, şık ve rahat modeller.
          Futbol Ayakkabıları: Çim sahalarda ve futsal sahalarda hakimiyet kurmanı sağlayacak, güçlü ve dayanıklı
          modeller.
          Günlük Ayakkabı: Günlük hayatta bütün gözlerin sana dönmesini sağlayacak en yeni modeller
          </p>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/pumaReklam.jpg" class="img-fluid rounded" alt="..." />
      </div>
    </div>
  </div>
  

  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/kramponReklam.png" class="img-fluid rounded" alt="..." />
      </div>

      <div class="col-md-6">
        <h3 class="card-title">Krampon</h3>
        <p class="card-text">Mükemmel Tutuş: Her türlü zemin ve hava koşulunda maksimum tutuş ve denge sağlar.
          Hafiflik: Ayaklarınızı yormadan, size inanılmaz bir hız ve çeviklik kazandırır.
          Güçlü Vuruşlar: Topu daha sert ve isabetli vurabilmeniz için tasarlanmıştır.
          Dayanıklılık: Uzun ömürlü ve dayanıklı, en zorlu antrenmanlara ve maçlara dayanıklıdır.
          Şık Tasarım: Farklı renk ve modellerde, sahadaki stilinizi tamamlayacak tasarımlar.
          Kramponlarımızla: Rakiplerinizi geride bırakacak,
          Gol pozisyonlarını artıracak,
          maçın hakimi olacaksınız.
          Kramponlarımız: Profesyonel futbolcular için idealdir,
          Futbol sevgisini her yaştan oyuncuya yaşatır.</p>
      </div>
    </div>
  </div>
  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 text-end">
        <h3 class="card-title">Klasik Ayakkabı</h3>
        <p class="card-text">
          Zarif Tasarım: Her ortama uyum sağlayan, zarif ve şık tasarımlar.
          Yüksek Kalite: Uzun ömürlü ve dayanıklı, en kaliteli malzemelerden üretilmiştir.
          Rahatlık: Gün boyu konforlu kullanım için tasarlanmıştır.
          Çeşitlilik: Farklı renk, model ve materyallerde seçenekler mevcuttur.
          Zamansız Trend: Klasikler her zaman modadır, trendlerden etkilenmez.
          Klasik Ayakkabılarımızla:
          İş hayatında profesyonelliğinizi yansıtabilir,
          Özel günlerde şıklığınızı tamamlayabilir,
          Günlük hayatınızda rahat ve tarz sahibi olabilirsiniz.
          Klasik Ayakkabılarımız:
          Babalar Günü hediyesi için idealdir,
          Sevdiklerinizi şık bir hediye ile mutlu edebilirsiniz.</p>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/klasikAyakkabı.png" class="img-fluid rounded" alt="..." />
      </div>
    </div>
  </div>
  

  <div class="container-fluid p-5"
    >
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <img src="../reklam/botReklam.png" class="img-fluid rounded" alt="..." />
      </div>

      <div class="col-md-6">
        <h3 class="card-title">Bot</h3>
        <p class="card-text">
        Kışa Hazır mısınız? Bot Ayakkabılarıyla Tanışın!
        Soğuk havalar geldi, yağmur ve kar yağmaya başladı. 
        Ayaklarınızın üşümesine ve ıslanmasına mı izin vereceksiniz? 
        Hayır! Bot ayakkabılarımızla tanışın ve kışa şık ve rahat bir şekilde adım atın. 
        Bot Ayakkabılarımızın Özellikleri: 
        Su geçirmez: Yağmur ve kardan ayaklarınızı korur. 
        Sıcak tutar: Soğuk havalarda ayaklarınızın üşümesini önler. 
        Rahat: Uzun süreli kullanıma uygundur. 
        Şık: Farklı tarzlara ve zevklere hitap eden modellerimiz mevcuttur. 
        Dayanıklı: Yüksek kaliteli malzemelerden üretilmiştir.
        Bot Ayakkabılarımızla: 
        Rahatça yürüyebilir, koşabilir ve oynayabilirsiniz.
        Kış sporlarının keyfini çıkarabilirsiniz.
        Karlı havalarda bile dışarı çıkmaktan çekinmezsiniz.
        Stilinizi tamamlayabilir ve şık bir görünüm elde edebilirsiniz.
      </p>
      </div>
    </div>
  </div>
  
    </div>

  )
  
  
}

export default Home;
