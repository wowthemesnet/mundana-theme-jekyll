---
layout: post
title:  "Ghost CMS tabanlı sitenize GraphComment ekleyin"
categories: [ Teknoloji ]
image: assets/images/ghost-graphcomment.jpg
tags: [ ghost, graphcomment ]
---
Pek çok internet sitesi sahibi bazı sebeplerden dolayı Disqus'ı ([benim gibi](/yorumlarda-disqus-yerine-graphcomment-tercih-ettim/)) sevmiyor. İnternette üçüncü parti yorumlar için Facebook Comments, Commento ve CommentBox gibi pek çok alternatif mevcut, GraphComment da onlardan birisi. Ghost'unuzda kullanması (tıpkı Disqus ve diğer alternatifler gibi) oldukça basittir. GraphComment temelde ücretsiz bir servistir ancak iki adet [ödeme planı](https://graphcomment.com/en/pricing.html) da bulunmaktadır. Ancak pek çok internet sitesi sahibi için 1,000,000 veri yüklenmesi için erişilemeyecek bir limittir.

Her şeyden önce bir [GraphComment](https://graphcomment.com/admin/#/register) hesabı oluşturun ve Ghost tabanlı sitenizi GraphComment Backoffice'ine [ekleyin](https://graphcomment.com/admin/#/website/new). Unutmayın, bu rehber Ghost CMS için varsayılan olarak sunulan Casper teması için düzenlenmiştir ancak pek çok tema için kurulum aynıdır veya küçük farklılıklar içerir.

## Ghost-GraphComment kodunu kopyalayın
İlk olarak, Ghost tabanlı siteniz için olan GraphComment kodunu kopyalayın. Aşağıdaki kod bir örnektir, GraphComment Backoffice'inden kendi kodunuzu edinebilirsiniz.
```
<div id="graphcomment"></div>
<script type="text/javascript">

  /* - - - CONFIGURATION VARIABLES - - - */

  // make sure the id is yours
  window.gc_params = {
    graphcomment_id: 'GRAPHCOMMENT IDSİ',

    // if your website has a fixed header, indicate it's height in pixels
    fixed_header_height: 0,
  };

  /* - - - DON'T EDIT BELOW THIS LINE - - - */

  
  (function() {
    var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
    gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
  })();

</script>
```

## Yorum kodunu post.hbs dosyasına yapıştırın
Ardından, Ghost temanızda yorumların gözükmesini istediğiniz yere kodu ekleyin. Bu genellikle `post.hbs` içeriğin hemen ardında gözükmesi için dosyasıdır. Casper temasında, yorum servisi eklemeniz için özel bir alan zaten belirtilmiştir, bu GraphComment kodunu yerleştirmeniz için iyi bir alan olabilir.

![65. ve 69. satırlarını temizlediğinize emin olun.](/assets/images/graphcomment-code.jpg "65. ve 69. satırlarını temizlediğinize emin olun.")

## GraphComment ID'nizi bulun
Ardından GraphComment Backoffice'i ziyaret edip Setup sekmesinden kendinize ait ID'yi temin edebilirsiniz.

## Kendi ID'nizi GraphComment koduna ekleyin
Son olarak post.hbs dosyasına eklediğiniz GraphComment kodunda aşağıdaki kodu bulun:
```
graphcomment_id: 'GRAPHCOMMENT IDSİ',
```
ve burada yer alan `GRAPHCOMMENT IDSİ` kısmını kendi ID'niz ile değiştirin. Ardından dosyayı kaydedin ve güncel dosyaları Ghost Admin üzerinden yükleyin Ghost'unuzu yeniden başlatın. Yorumlar artık sitenizde görünecektir.

## Ve daha fazlası...
GraphComment ile sitenize her bir gönderi için yorum sayısı veya Enler listesi (son yorumlar, en iyi yorumlar ve en çok yorum alan gönderiler) ekleyebilirsiniz. GraphComment Backoffice'inde yer alan Setup sekmesini ziyaret edin ve araçlar için kodlarınızı alın. Tek yapmanız gereken tıpkı yukarıda yaptığımız gibi görünmesini istediğiniz yere ilgili kodları yapıştırmaktır.
