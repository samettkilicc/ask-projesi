import React from 'react';

const activities = [
  { emoji: '🍿', title: 'Evde Sinema Gecesi', description: 'Beraber battaniyeye sarılıp film izleyelim.' },
  { emoji: '🍪', title: 'Kurabiye Yapımı', description: 'Birlikte mutfağa girip kurabiye yapalım.' },
  { emoji: '🎮', title: 'Oyun Gecesi', description: 'İkili oyunlar oynayıp kahkahalar atalım.' },
  { emoji: '🧼', title: 'Birlikte Temizlik', description: 'Müzik açıp dans ederek evi toparlayalım.' },
  { emoji: '🎨', title: 'Resim Yapma', description: 'Beraber tuvale veya dijitale duygularımızı dökelim.' },
  { emoji: '📚', title: 'Kitap Okuma Saati', description: 'Aynı kitabı okuyup sonra sohbet edelim.' },
  { emoji: '🧘', title: 'Yoga/Stretching', description: 'Beraber rahatlayalım, nefes alalım.' },
  { emoji: '🎵', title: 'Müzik Gecesi', description: 'Sevdiğimiz şarkılarla mini bir konser yapalım.' },
  { emoji: '👩‍🍳', title: 'Birlikte Yemek Tarifi Deneme', description: 'Yeni bir tarif bulup deneyelim.' },
  { emoji: '🕯️', title: 'Loş Işıkta Sohbet', description: 'Mum ışığında sessizce konuşalım.' },
  { emoji: '🌅', title: 'Gün Doğumu İzleme', description: 'Sabah erken kalkıp birlikte doğayı selamlayalım.' },
  { emoji: '🌳', title: 'Parka Gitme', description: 'Çimenlere uzanıp gökyüzünü izleyelim.' },
  { emoji: '🚲', title: 'Bisiklet Turu', description: 'Yakınlarda bir rota çizip sürelim.' },
  { emoji: '🛍️', title: 'Pazar Gezmesi', description: 'El ele dolaşarak alışveriş yapalım.' },
  { emoji: '📸', title: 'Dışarıda Fotoğraf Çekimi', description: 'Birbirimizin fotoğrafını çekelim.' },
  { emoji: '🍦', title: 'Dondurma Molası', description: 'Favori dondurmacımıza gidelim.' },
  { emoji: '🏞️', title: 'Doğa Yürüyüşü', description: 'Ormanda sessizce yürüyelim.' },
  { emoji: '🌌', title: 'Yıldızları İzleme', description: 'Gece gökyüzünü beraber inceleyelim.' },
  { emoji: '🛶', title: 'Kürek Çekme', description: 'Sessiz bir gölde kürek çekelim.' },
  { emoji: '🏖️', title: 'Kumsalda Ayak Basma', description: 'Ayaklarımızı suya sokalım.' },
  { emoji: '🎭', title: 'Evde Tiyatro', description: 'Rol yaparak eğlenelim.' },
  { emoji: '🎬', title: 'Kısa Film Çekimi', description: 'Telefonla kısa sahneler çekelim.' },
  { emoji: '🧶', title: 'El İşi Projesi', description: 'Bir şeyler örüp hatıra bırakalım.' },
  { emoji: '📝', title: 'Birbirimize Mektup Yazma', description: 'İçimizdekileri kaleme alalım.' },
  { emoji: '🎨', title: 'Boyama Kitabı', description: 'Beraber mandala veya çocuk kitabı boyayalım.' },
  { emoji: '🎧', title: 'Podcast Dinleme', description: 'Aynı şeyi dinleyip üzerine tartışalım.' },
  { emoji: '🧩', title: 'Puzzle', description: 'Birlikte sabırla tamamlayalım.' },
  { emoji: '📓', title: 'Anı Defteri', description: 'Anılarımızı yazalım, süsleyelim.' },
  { emoji: '🎤', title: 'Karaoke Gecesi', description: 'Beraber bağıralım, eğlenelim.' },
  { emoji: '📦', title: 'Kutu Süsleme', description: 'Sevgililer gününe özel bir kutu hazırlayalım.' },
  { emoji: '💌', title: 'Post-it Mesaj Oyunu', description: 'Gizlice notlar bırakıp bulmalarını sağlayalım.' },
  { emoji: '🧴', title: 'Mini Masaj', description: 'Stresi atalım, yakınlaşalım.' },
  { emoji: '🌠', title: 'Dilek Tutma', description: 'Birlikte yıldızlara bakıp dilek dileyelim.' },
  { emoji: '🎁', title: 'Sürpriz Hazırlama', description: 'Karşılıklı küçük sürprizlerle şaşırtalım.' },
  { emoji: '🌸', title: 'Çiçek Toplama', description: 'Doğadan hatıralar biriktirelim.' },
  { emoji: '💑', title: 'İlk Tanışma Sahnesini Oynama', description: 'Eskileri yad edelim.' },
  { emoji: '💍', title: 'Evlilik Planı Hayali', description: 'Hayal kursak nasıl olurdu?' },
  { emoji: '📖', title: 'Romantik Hikaye Okuma', description: 'İçinde kendimizi bulalım.' },
  { emoji: '🍷', title: 'Şarap & Peynir Akşamı', description: 'Küçük şık bir akşam.' },
  { emoji: '🎈', title: 'Balkonda Balon Uçurma', description: 'Gökyüzüne sevgi yollayalım.' },
  { emoji: '🕵️', title: 'Evde Define Avı', description: 'Mini ipuçları ile birbirimizi yönlendirelim.' },
  { emoji: '🎲', title: 'Zar Oyunu', description: 'Zar at, gelen sayıya göre görev yap.' },
  { emoji: '🔮', title: 'Gelecek Tahmini', description: 'Birbirimize fal bakalım.' },
  { emoji: '🧠', title: 'Kelime Oyunu', description: 'Sözcüklerle dans edelim.' },
  { emoji: '🎯', title: 'Balon Patlat Görev Seç', description: 'Her balonda bir görev.' },
  { emoji: '🐾', title: 'Hayvan Barınağı Ziyareti', description: 'Birlikte sevgi dağıtalım.' },
  { emoji: '🛌', title: 'Tembellik Günü', description: 'Yatakta kalıp günü geçirelim.' },
  { emoji: '📦', title: 'Sürpriz Kutu Açılımı', description: 'İçinde ne var bilmiyoruz.' },
  { emoji: '👗', title: 'Kostüm Giyme', description: 'Farklı tarzlarda poz verelim.' },
  { emoji: '💃', title: 'Dans Etme', description: 'İstediğin gibi dans et!' },
  { emoji: '🗓️', title: 'Gelecek Planı Yapma', description: 'Beraber bir yıl sonrasını hayal edelim.' },
  { emoji: '🧳', title: 'Hayal Tatil Rotaları', description: 'Gitmek istediğimiz yerleri seçelim.' },
  { emoji: '📍', title: 'İlk Fırsatta Yapılacaklar Listesi', description: 'Mini check-list oluşturalım.' },
  { emoji: '🌍', title: 'Ülkeler Listesi', description: 'Beraber görmek istediğimiz ülkeleri sıralayalım.' },
  { emoji: '🛒', title: 'Haftalık Planlama', description: 'Beraber market listesi bile romantik olabilir.' }
];

const WeeklyPlans = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-4">
        Bu Hafta Ne Yapalım? 💡
      </h2>
      <div className="row justify-content-center">
        {activities.map((activity, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">{activity.emoji}</div>
                <h5 className="card-title text-pink">{activity.title}</h5>
                <p className="card-text text-muted">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlans;