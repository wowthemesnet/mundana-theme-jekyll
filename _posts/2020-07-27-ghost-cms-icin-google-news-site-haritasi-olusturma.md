---
layout: post
title:  "Ghost CMS için Google News site haritası oluşturma"
categories: [ Teknoloji ]
image: assets/images/ghost-google-news.jpg
tags: [ ghost ]
---
Ghost her ne kadar diğer içerik yönetim sistemlerine kıyasla bilinirlik konusunda zayıf olsa da özellikle özgür basın ve habercilik açısından oldukça büyük bir potansiyele sahip. Kendi içerisinde barındırdığı ücretli abonelik ve bülten hizmetleri ile diğer içerik yönetim sistemlerinde harici olarak satın almanız gereken pek çok servisi Ghost size üçüncü parti entegrasyonları ile kendi içerisinde sunuyor.

Bir basın & haber sitesi için Google News'a kayıtın önemi ise yayınladığınız içeriklerin çok daha hızlı ve kolay bir şekilde arama sonuçlarına eklenmesini sağlamasıdır. Bu sayede Ghost'unuzda yayınladığınız içerikler çok daha hızlı bir şekilde arama motorlarına kayıt edilir ve arama sonuçlarındaki etkileşimleriniz artar.

Ghost CMS'in [resmi belgelerinde](https://ghost.org/tutorials/create-a-google-news-sitemap/) bu konu ile ilgili adımlar açıkça anlatılmış, ancak Türkçe bir kaynak olması açısından ben de yayınlamayı uygun gördüm. Eğer konu ile ilgili herhangi bir sorun yaşarsanız yorum kısmından benimle iletişime geçebilir veya resmi [Ghost Topluluğunda](https://forum.ghost.org/) tartışma başlatabilirsiniz.

## Kurulum
Ghost CMS için Google News destekleyen bir site haritası oluşturmak oldukça kolaydır ve yalnızca iki basit adımdan oluşur. Tüm işlemleri Ghost Admin üzerinden gerçekleştireceğiniz için yönetim paneline erişiminiz olduğundan emin olun. Bu iki adımda mevcut Routes dosyamızı düzenleyeceğiz ve tema dosyalarımızın içine site haritasının oluşması için referans bir şablon oluşturacağız.

## Routes'u düzenleyin
İlk olarak Ghost Admin sayfasını açın ve Labs sayfasını görüntüleyin. Labs sayfası içerisinde bulunan Routes seçeneklerinde listelenen "Download current routes.yaml" bağlantısına tıklayarak güncel routes.yaml dosyasnızı düzenlemek üzere bilgisayarınıza indirin. İndirdiğiniz belgeyi Notepad veya Notepad++ gibi yazılımlarla indirdiğiniz dosyayı açın ve ekleyin.

```
routes:
  /sitemap/:
    template: sitemap
    content_type: text/xml
```

Dosyayı kaydedin ve yine Labs > Routes kısmında yer alan "Upload routes YAML" butonuna tıklayarak düzenlediğiniz dosyayı yükleyin.

### Site haritası dosyasını oluşturun
Ghost Admin'de bu defa Design sayfasını görüntüleyin. "Installed Themes" altında bulunan "Active" olarak belirtilmiş mevcut temanızı "Download" bağlantısına tıklayarak indirin. İndirdiğiniz sıkıştırılmış tema dosyasını açın ve tema dosyalarınızın içine sitemap.hbs adlı bir dosya oluşturun. Oluşturduğunuz dosynın içine aşağıdaki kodları ekleyin.

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  {{#get "posts" limit="1000" order="published_at desc" include="tags"}}
    {{#foreach posts visibility="all"}}
    <url>
      <loc>{{url absolute="true"}}</loc>
      <news:news>
        <news:publication>
          <news:name>{{@site.title}}</news:name>
          <news:language>{{lang}}</news:language>
        </news:publication>
        {{#if @labs.members}}
          {{#has visibility="member"}}
            <news:access>Registration</news:access>
          {{/has}}
          {{#has visibility="paid"}}
            <news:access>Subscription</news:access>
          {{/has}}
        {{/if}}
        <news:genres>Blog</news:genres>
        <news:publication_date>{{date published_at format="YYYY-MM-DDTHH:mm:ssZ"}}</news:publication_date>
        <news:title>{{title}}</news:title>
        <news:keywords>{{tags limit="5" autolink="false"}}</news:keywords>
      </news:news>
    </url>
    {{/foreach}}
  {{/get}}
</urlset>
```

sitemap.hbs dosyası dahil olan güncel tema dosyalarınızı Design sayfasının içerisinde bulunan "Upload a theme" butonuna tıklayarak yükeyin.

## Detaylar
Eğer tüm işlemleri başarılı bir şekilde gerçekleştirdiyseniz `/sitemap/` sayfasını görüntüleyerek site haritanızı görüntüleyebilirsiniz. Eğer sayfa görüntüleniyorsa [Truugo](https://www.truugo.com/xml_validator/)'yu veya [WebSitePlanet](https://www.websiteplanet.com/tr/webtools/sitemap-validator/)'i kullanarak oluşturulan XML dosyasını doğrulayabilirsiniz.

Oluşturduğunuz siteamp.hbs dosyasını da kendi sitenize göre düzenlemeniz gerekebilir. Bunun için Google News'ın [resmi belgelerine](https://support.google.com/news/publisher-center/answer/9606710?hl=tr) göz atmanızda mutlaka fayda olacaktır. Eğer Ghost'unuzda abonelik sistemini aktif ettiyseniz Google News'ın içeriğin kimler tarafından erişilebilir olduğunu anlaması için `news:access` özelliğini kullanmanız gerekmektedir.

Tüm bunların ardından Google News'a kayıt için gerekli adımları başlatabilirsiniz. Bu sayede hazırladığınız içerikler daha fazla okuyucuya daha hızlı şekilde ulaşacaktır.

Daha önce benzer bir yöntemle [Ghost CMS için Yandex Turbo Pages akışı oluşturma](https://tolgaaltas.com/ghost-cms-icin-yandex-turbo-pages-akisi-olusturma/) hakkında bir yazı yazmıştım. Eğer Yandex arama sonuçlarında sitenizin daha üst sıralarda yer almasını istiyorsanız mutlaka göz atmanızı öneririm. WebSitePlanet'in daha kolay ve kullanıcı dostu olduğunu bildirdiği için Laurie Sallow'a teşekkürler.
