---
layout: post
title: "Ghost CMS için Yandex Turbo Pages akışı oluşturma"
categories: [ Teknoloji ]
image: assets/images/turbo-pages.jpg
tags: [ ghost ]
---
Yandex Turbo Pages, Google'ın AMP teknolojisine benzer bir servistir. AMP'e kıyasla geliştiricilerin sistemlerine entegrasyonu oldukça basittir. Turbo Pages için yeni bir RSS oluşturarak kullanmaya hemen başlayabilirsiniz.

Ancak Yandex'in Turbo Pages özelliği genellikle Avrupa ve Amerika bölgelerinde geliştirilen içerik yönetim sistemleri tarafından varsayılan olarak desteklenmez. Neyse ki AMP'e göre entegrasyonu çok daha kolay olduğundan Yandex Turbo Pages'i kendi sisteminize de kolaylıkla entegre edebilirsiniz, tıpkı Ghost'a entegre edebileceğimiz gibi. Bu içerik temel olarak [Kartashev](https://kartashev.me/en/how-to-connect-yandex-turbo-pages-to-ghost-blog/)'in blogundan edinilen bilgiler ışığında hazırlanmıştır.

## Kurulum
Kurulum için öncelikle temamızın dosyaları arasına yeni bir dosya daha eklememiz gerekiyor. Bunun için öncelikle Ghost paneline gidelim, Settings altında bulunan Design sekmesinde yer alan Installed Themes'de yer alan kullandığımız temayı indirelim. Tema dosyalarımızın içerisinde turbo.hbs adlı bir dosya oluşturalım ve içerisine aşağıdaki kodları ekleyelim;

```
<?xml version = "1.0" encoding = "UTF-8"?>
<rss
  xmlns:yandex="http://news.yandex.ru"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:turbo="http://turbo.yandex.ru"
  version="2.0">
<channel>
<title><![CDATA[ {{@blog.title}} ]]></title>
<description><![CDATA[ {{@blog.description}} ]]></description>
<link>{{@blog.url}}</link>
<language>{{lang}}</language>
<turbo:analytics type="Google" id="UA-164600120-1"></turbo:analytics>
<turbo:analytics type="Yandex" id="62324554"></turbo:analytics>
<image>
    <url>{{@blog.url}}/favicon.png</url>
    <title>{{@blog.title}}</title>
    <link>{{@blog.url}}</link>
</image>
<lastBuildDate>{{date format="ddd, DD MMM YYYY HH:mm:ss ZZ"}}</lastBuildDate>

{{#get "posts" limit="all" include="authors"}}
    {{#foreach posts}}
    <item turbo="true">
        <title><![CDATA[ {{title}} ]]></title>
        <link>{{url absolute="true"}}</link>
        <turbo:topic><![CDATA[ {{title}} ]]></turbo:topic>
        <turbo:source>{{url absolute="true"}}</turbo:source>
        <author><![CDATA[ {{primary_author.name}} ]]></author>
        <pubDate>{{date format="ddd, DD MMM YYYY HH:mm:ss ZZ"}}</pubDate>
        <media:content url="{{feature_image}}" medium="image"/>
        <turbo:content><![CDATA[ <img src="{{feature_image}}"/> <p>{{excerpt}}</p> {{content}} ]]></turbo:content>
    </item>
    {{/foreach}}
{{/get}}

</channel>
</rss>
```

Temel olarak aslında Alexey'in hazırladığı ile hemen hemen aynı. Ama biz dilin otomatik tanımlanmasını sağlayan küçük bir düzeltme yaptık. Alexey ayrıca filtreleme için kendi İngilizce gönderine göre bir düzenleme yapmıştı, biz tüm gönderileri kapsaması için küçük bir düzenleme yaptık. Bir de ben öne çıkan görsellerin de gözükmesi için çok küçük bir ekleme daha yaptım kodda. Daha sonra Excerpt kısmının RSS'te gözükmediğini fark ederek içeriğin bütünlüğünün bozulmaması amacıyla bu kısmı da ekledim. Kısaca Kartashev bize Custom RSS için güzel bir şablon oluşturmuş ama pek çok eskikliği içerisinde barındırıyordu. Bizim yaşadığımız en büyük sorun ise dil bilgisi ile beraber tarih formatının da Türkçe'ye dönüşmesiydi ki bu RSS'in doğrulanmasında hata yaratıyordu. Bu nedenle `<pubDate>{{date format="ddd, DD MMM YYYY HH:mm:ss ZZ"}}</pubDate>` kısmını silmeniz gerekebilir. Ayrıca 12. ve 13. satırlardaki Google ve Yandex servislerine ait takip kodlarını da değiştirmeyi unutmayın. Ardından düzenlemiş olduğunuz dosyayı kaydedin ve Ghost'a yükleyin.

Bir sonraki adım ise Routes üzerinde gerçekleşecek. Bunun için yine panele gidin, Settings altındaki Labs menüsünü görüntüleyin. Beta Features altında yer alan Routes'ta bulunan Download current routes.yaml bağlantısına tıklayın. Mevcut dosyayı açtıktan sonra `routes:` satırının hemen altına aşağıdaki kodu ekleyin;

```
  /rss/turbo/:
    template: turbo
    content_type: text/xml
```
    
Dosyayı kaydedin ve yeniden yükleyin. Tüm işlemler bu kadar, eğer her şey doğru ise siteniz.com/rss/turbo bağlantısını kullanarak akışınızı görüntüleyebilirsiniz. Servisin Yandex'te etkili olması için sitenizi [Yandex.Webmaster](https://webmaster.yandex.com/) servisine kaydetmeli ve Turbo Pages için ilgili akışı tanımlamalısınız. Tanımlama işlemi esnasında hata kodu alıyorsanız muhtemelen yukarıda bahsettiğim tarihlerin Türkçe görüntülenmesi nedeniyledir, ilgili satırları sildiğinizde bir sorun yaşamayacağınızı düşünüyorum.

[Melih](https://melihcaliskan.com/)'e de buradan hatayı çözmeye vakit ayırdığı için teşekkür ederim, bayağı vakit ayırıp araştırdı ama bir sonuca varamadık maalesef.

Bunun haricinde [Ghost CMS için Google News site haritası oluşturma](https://tolgaaltas.com/ghost-cms-icin-google-news-site-haritasi-olusturma/)yı düşünüyorsanız bu konu hakkında da bir yazı yazdım. Eğer Ghost CMS ile bir basın & haber sitesi hazırlamaya ilginiz varsa yazdığım yazıya da mutlaka göz atmanızı tavsiye ederim.
