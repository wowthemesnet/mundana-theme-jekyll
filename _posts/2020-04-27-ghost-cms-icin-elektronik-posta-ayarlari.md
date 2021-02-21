---
layout: post
title:  "Ghost CMS için elektronik posta ayarları"
categories: [ Teknoloji ]
image: assets/images/mail.jpg
tags: [ ghost ]
---
Herkese merhabalar,
Bu yazıda kişisel blogumun da altyapısını kullandığı Ghost CMS için elektronik posta ayarlarının nasıl yapılması gerektiğine dair küçük bir bilgi vereceğim. Bu konuda oldukça sorun yaşadım, ancak bir çözüme ulaştım. Muhtemelen ilk kurulum yapan kullanıcıların da benzer bir sorun yaşayacağını düşündüğüm için küçük bir metin hazırlamamın Türk kullanıcılara faydalı olacağına inanıyorum.

İlk olarak bu yazıda Yandex.Connect servisini kullanacağımızdan bahsetmem gerekiyor. Bu sayede kendi alan adımıza ait bir elektronik postayı ücretsiz olarak elde edeceğiz, hem de Ghost yapılandırmasını yapacağız. Bunu önermemin sebebi Gmail ile bir türlü sorunu aşamamam oldu.

## Bir Yandex hesabı oluşturun
Elbette bu işlemi gerçekleştirmeniz için bir Yandex hesabı oluşturmanız gerekiyor. Eğer herhangi bir Yandex hesabınız yoksa [buradan](https://passport.yandex.com.tr/registration/mail) oluşturmaya başlayabilirsiniz. Eğer bir Yandex hesabınız varsa bu adımı atlayabilirsiniz.

## Alan adınıza özel e-posta oluşturun
Şimdi ise alan adınıza ait bir elektronik posta adresi oluşturabilmeniz için Alan Adı için Yandex.Mail servisine kaydolmanız gerekiyor, onun için de buraya [tıklamanız](https://domain.yandex.com/domains_add/) gerekiyor. Evet biliyorum, sayfa İngilizce ancak yapacaklarımız çok da zor değil.

İlk olarak üst kısımdan **Free** servis planını seçerek ilerlemeye başlayalım. Ardından **Create** butonuna tıklayarak yeni bir alan adı tanımlayalım. Yeni bir alan adı için DNS kaydı, MX kaydı ve DKIM kaydı oluşturacağız. Tüm bunlar için CloudFlare kullanıyorsanız DNS sekmesine gitmeniz gerekiyor. Eğer kullanmıyorsanız alan adınızı aldığınız servis sağlayıcısı üzerinden de adımları gerçekleştirebilirsiniz.

Tüm bunlarla ilgili detaylar zaten servisin sayfasında açıkça belirtiliyor, evet daha önce de bahsettiğim gibi İngilizce olarak anlatılıyor ancak çok zor bir İngilizce değil ve çeviri servisleri ile kolayca anlayabileceğinizi düşünerek bu kısmı çok uzatmıyorum.

### Bir elektronik posta hesabı oluşturma
Tüm kayıtları gerçekleştirdikten sonra Users sekmesine gidin ve Add users ile yeni bir kullanıcı oluşturun. Burada kullanacağınız username ve password bilgilerini saklamanız gerektiğini kesinlikle unutmayın. Eğer zaten bu elektronik posta adresini düzenli olarak kullancaksanız zaten yapacağınızı umuyorum.

### Ghost yapılandırması
Ghost yapılandırmasını gerçekleştirmek için Ghost'un kurulu olduğu dizine gidin ve config.production.json dosyasını düzenlemek için açın. Aşağıdaki mail değerini dosyadan silin;

```
  "mail": {
    "transport": "Direct"
  },
```

ve yerine aşağıdaki örneği kendi bilgilerinizle düzenleyin;

```
  "mail": {
    "from": "kullaniciadi@alanadi.com",
    "transport": "SMTP",
    "options": {
      "host": "smtp.yandex.ru",
      "port": 587,
      "auth": {
        "user": "kullaniciadi@alanadi.com",
        "pass": "SifreniBurayaYaz"
      }
    }
  },
```
  
İşte burada yapmanız gereken her şey bu kadar! Ama henüz hazır değiliz. Servisi kullanmaya başlamadan önce şartları kabul etmeniz gerektiği için Yandex'e alan adınız için oluşturduğunuz elektronik posta adresi ile bir kereliğine giriş yapın ve şartları kabul edin. Bunun arından SSH'a bağlanıp `ghost restart` komutunu çalıştırmanız gerekiyor. Servisin çalıştığını kontrol etmek için ise Ghost sitenizin yönetim paneline gidin, **Settings** altındaki **Labs** sayfasını görüntüleyin ve **Testing Tools** altındaki **Test email configuration** seçeneğinde bulunan **Send** butonuna basın. Eğer tüm adımları doğru yaptıysanız herhangi bir sorun olmayacaktır.
