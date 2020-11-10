---
id: 4732
title: Pindah Haluan Dari Cloudflare Ke Quic.cloud
date: 2020-07-01T09:21:24+07:00
author: pemuda malkis
layout: post
guid: https://wildanfauzy.com/pindah-haluan-dari-cloudflare-ke-quic-cloud/
permalink: /pindah-haluan-dari-cloudflare-ke-quic-cloud/
nb_of_words:
  - "484"
neve_meta_enable_content_width:
  - 'off'
post_views_count:
  - "2"
mashsb_timestamp:
  - "1596599375"
mashsb_shares:
  - "0"
mashsb_jsonshares:
  - '{"total":0}'
jnews_social_counter_last_update:
  - "1598711179"
jnews_social_counter_all:
  - 'a:7:{s:8:"facebook";i:2;s:7:"twitter";s:1:"0";s:8:"linkedin";i:0;s:11:"stumbleupon";i:0;s:6:"google";i:0;s:9:"pinterest";i:0;s:2:"vk";s:1:"0";}'
jnews_social_counter_total:
  - "2"
image: /wp-content/uploads/2020/07/pexels-photo-216631.jpeg
categories:
  - Share
tags:
  - cdn
  - cloudflare
  - quic.cloud
---
CDN atau Content Delivery Network, sangat membantu untuk mendistribusikan konten css, gambar dan masih banyak lagi, sehingga tidak perlu repot mengambil data pada server, bisa diakses oleh pantulan dari data yang disimpan di server terdekat di lokasi pengakses.

Sudah hampir dua tahun menggunakan cloudflare, walaupun menggunakan paket yang free tetepi hasilnya cukup memuaskan untuk blog yang kecil ini, banyak fitur yang sangat berguna, seperti minify css dan html, dan yang baru seperti amp real url.

Tidak lupa pula ssl gratisan dengan mode flexible tidak perlu memasang ssl di cpanel, tetapi kadang sering jengkel juga, kadang error tapu kadang-kadang hehehe.

Perjalanan ngeblog dengan cloudflare baik-baik saja, hingga suatu ketika iseng-iseng mengatur settingan karena kamaren sempat maintenance, ternyata baru ada di server litespeed sudah mendukung cdn dari quic cloud, tergiur juga untuk menggunakan quic cloud.

Jika dilihat dari namanya quic wah pasti kenceng wuzz wuz nih, terjemahan kasarnya quic itu kencang hehehe, akhirnya mulai lah dengan menekan tombol enable CDN.<figure class="wp-block-image size-large">

<img loading="lazy" width="1080" height="672" src="https://wildanfauzy.com/wp-content/uploads/2020/07/20200701_084917-1.jpg" alt="mencoba cdn quic.cloud" class="wp-image-4728" /> </figure> 

Setelah menekan tombol enable, masalah datang karena masih awam dengan cdn yang satu ini, berhasil memverifikasi domain key dan error dibagian verifikasi cname, terhambat oleh domain SOA, ada opsi dengan menggunakan WWW karena sudah nyaman dengan naked domain, akhirnya mencari tau di berbagai forum.<figure class="wp-block-image size-large">

<img loading="lazy" width="1072" height="1220" src="https://wildanfauzy.com/wp-content/uploads/2020/07/20200701_090251.jpg" alt="" class="wp-image-4729" /> </figure> 

Trial and error akhirnya berhasil juga mengatur cdn quic.cloud dengan menggunakan naked domain tanpa tambahan www soalnya harus mengubah url alamat wordpress sudah terlanjur nyaman dengan naked domain, sebenarnya masih kalah pamor dengan cloudflare yang sudah banyak fitur.

Kelebihan cdn quic.cloud diantaranya bisa menggunakan koneksi QUIC atau generasi penerus dari http/2 yaitu http/3 yang dikembangkan oleh google mampu mengurangi latency tapi masih beta, selain itu bisa menggunakan ssl gratis dari let&#8217;s encrypt, jika di cloudflare menggunakan sni cloudflare.<figure class="wp-block-image size-large">

<img loading="lazy" width="1076" height="1162" src="https://wildanfauzy.com/wp-content/uploads/2020/07/20200701_091033.jpg" alt="http/3" class="wp-image-4730" /> </figure> 

Menggunakan koneksi QUIC atau http/3, pada umumnya website masih menggunakan koneksi TLS 1.2/1.3 dan belum banyak yang mendukung koneksi QUIC, Chrome browser sudah mendukung koneksi quic, tidak bisa membandingkan dengan cdn cloudflare karena baru menggunakan quic cloud beberapa hari.

Akhirnya berteman dengan cloudflare cukup lama, berpaling menggunakan quic.cloud, terima kasih cloudflare entar kalo ada masalah sama quic cloud bakal clbk lagi sama cloudflare hehehe.