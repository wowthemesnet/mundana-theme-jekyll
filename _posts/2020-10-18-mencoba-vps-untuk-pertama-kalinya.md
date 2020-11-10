---
id: 8431
title: Mencoba VPS Untuk Pertama Kalinya
date: 2020-10-18T12:57:34+07:00
author: pemuda malkis
layout: post
guid: https://wildanfauzy.com/?p=8431
permalink: /mencoba-vps-untuk-pertama-kalinya/
image: /wp-content/uploads/2020/10/vps-untuk-pemula.jpg
categories:
  - Internet
tags:
  - ubuntu
  - vps
---
Sebenarnya enggak butuh-butuh banget sama vps (virtual private server) karena shares hosting yang saya pakai masih mumpuni untuk menjalankan blog ini, tapi yang namanya rasa penasaran kalo enggak nyoba malah ke bawa mimpi wkwkwk.

Sehabis bangun tidur langsung searching vps murah indonesia, hmm yang keluar layanan hosting itu-itu lagi, kesel juga sih, akhirnya mencari dengan kekuatan kage bunsin, yaitu ngubek-ngubek di forum, karena iklan biasanya manis diawal.

Ngubek-ngubek sampe nemu ikan cupang albino, banyak juga harganya yang miring, sebenarnya yang jual layanan luar kaya upcloud, digital ocean harganya oke juga tapi karena engga punya kartu kredit nyari yang lokalan aja.

Alasannya sih cukup sepele aja sih, pengen ngerasain punya server sendiri terus punya akses root, ketik-ketik di terminal lewat ssh gitu.

Nemu juga yang harganya pas terus dapet diskon juga, enaknya nyari di forum hosting bisa nanya langsung sama yang jualanya kalo ada apa-apa tinggal nanya, malu bertanya sesat di jalan kata orang mah gitu.

Pertama mau nyari yang lokasi server di Indonesia tapi setelah dipikir2 ke singapura aja deh, bukan karena jelek server Indonesia tapi harganya masih mahal menurut kantong saya mah hehehe, ditambah ada dua kategori bandwidth ix sama iix.

Modal penasaran sama sering nongkrong di terminal xubuntu, sore itu langsung meyakinkan untuk beli vps satu bulan aja, sekalian belajar trial dan error, karena belajar yang oke adalah langsung praktek, kalo baca-baca tanpa aksi jadi kurang amunisi ngomong apa sih aing.

Order di layanan hosting yang ada nama jagonya, setelah diaktifkan, langsung create vps dengan server di Singapura, dipilihan order ada opsi buat install webuzo.

Ehh taunya dikasih link tutorial kirain mau dikasih tau step by step, karena cuma buat kebutuhan pribadi enggak jadi deh tuh install panel kaya webuzo.

Enggak pake panel kaya cpanel, directadmin dll, polosan aja lagian spek yang dibeli enggak dewa amat, spek standar kelas menengah ke bawah wkwkwk.

Disaranin pake centos, tapi sudah terbiasa peka keluarga ubuntu jadi pasang debian aja lah di vps, langsung ngubek-ngubek github buat pasang script, nemu juga akhirnya.

One click installer openlitespeed dan WordPress, alesannya karena terbiasa pake litespeed aja sih, kebetulan litespeed ada versi opensource yaitu openlitespeed fiturnya enggak beda jauh.

Masalah datang karena blog udah pake hsts, jadi error mulu di chrome deh, alias enggak bisa diakses, perlu di pasang cerbot lets encrypt dulu di vps agar blog bisa diakses di chrome.

Biar enggak pusing kalo akses subdomain pake wildcard dari lets encrypt dengan konfigurasi dns challenges, akhirnya bisa di akses masuk ke dashboard WordPress lewat browser.

Masih nyari-nyari tunning litespeed biar ngacir kaya kuda liar baru keluar rumah, configurasi server bagian tunning max connection dinaikin, connection timeout dikecilin, terus aktifkan compresi gzip/brotli jangan lupa enable QUIC.