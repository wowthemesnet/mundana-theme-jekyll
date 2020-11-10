---
id: 7146
title: Cara Install Linux Manjaro Versi Mate
date: 2020-08-21T18:19:50+07:00
author: Linux Mania
layout: post
guid: https://wildanfauzy.com/?p=7146
permalink: /mencoba-linux-manjaro-versi-mate/
snax_approved_by:
  - "1"
snax_approval_data:
  - 2020-08-21 18:19:50
wpp_send_notification_for_new_post:
  - "1"
wpdiscuz_post_rating:
  - "5"
wpdiscuz_post_rating_count:
  - "1"
image: /wp-content/uploads/2020/08/Screenshot-pada-2020-08-20-23-17-41-min.png
categories:
  - Linux
tags:
  - manjaro
  - mate
---
Sudah tidak asing lagi dengan distro linux yang satu ini, manjaro adalah distro linux yang selalu nangkring di urutan teratas distrowatch.com walaupun sudah tergeser dengan mx linux tapi masih dalam urutan tiga besar.

Ada berbagai macam versi desktop environment mulai dari xfce yang sudah terkenal sangat enteng di laptop ram dua giga pun ngacir, atau rada berat dikit kde dan gnome yang pasaran. 

Percobaan kali ini bukan desktop environment yang disebutkan diatas melainkan DE Mate, bukan versi resmi dari manjaro melainkan versi komunitas, tapi masih di dukung oleh manjaro itu sendiri. 

Tentu ada perbedaan dari versi yang sudah resmi, jika penasaran ingin mencobanya silahkan bisa download di link berikut [Manjaro-Mate](https://manjaro.org/downloads/community/mate/)

Eittss tapi pertama-tama harus memburning iso yang sudah di download tadi, atau menggunakan usb sebagai media instalasi, setelah sudah tancapkan usb lagu setting boot ke flashdiks yang sudah ada instalasi manjaro.

## Mulai Instalasi <figure class="wp-block-image size-large">

![manjaro mate](https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-15-57-59-min.png) </figure> 

Setelah berhasil booting dari flashdiks akan masuk ke live manjaro, kalian bisa mencoba tanpa menginstall, atau bisa langsung memasang dengan mengklik launch installer maka akan muncul gambar seperti diatas.

## Mengatur Lokasi<figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-22-58-51-min.png" alt="pilih lokasi" class="wp-image-7151" /> </figure> 

Selanjutnya masuk pada menu pilihan lokasi, disini kalian harus memilih lokasi tinggal dimana, perlu di perhatikan karena Indonesia ada tiga zona waktu maka pilih sesuai tempat tinggal kalian biar sinkron aja gitu, secara otomatis setelah terhubung ke Internet maka waktu akan diatur secara otomatis enggak perlu setting waktu sendiri.

## Mengatur Papan Ketik atau Keyboard <figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-22-59-28-min.png" alt="Pilih Papan Ketik" class="wp-image-7152" /> </figure> 

Setelah mengatur lokasi, langkah selanjutnya adalah memilih papan ketik atau layout keyboar kalian, perlu diingat karena sebelumnya memilih lokasi di indonesia, biasanya otomatis akan memilih papan ketik bahasa jawi atau bahasa daerah Indonesia lainnya, ubah ke layout keyboard kalian, pada umumnya layout keyboard laptop pasaran itu US atau UK.

## Mengatur Partisi<figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-22-59-41-min.png" alt="setting partisi manjaro " class="wp-image-7153" /> </figure> 

Ini bagian yang lumayan sakral, yaitu memilih disk partisi untuk menginstall manjaro, ada empat pilihan bisa dual boot dengan os yang sudah terpasang di laptop kalian, atau memilih fresh install yaitu menghapus data semuanya dan mengganti dengan linux manjaro, saya sendiri sudah menyiapkan satu buah partisi untuk manjaro jadi pilihan yang terakhir yaitu manual partitioning.

## Mengatur Nama Pengguna <figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-23-01-05-min.png" alt="data pengguna pc" class="wp-image-7154" /> </figure> 

Selanjutnya mengisi data pengguna pc kalian terserah mau diisi apa, asal jangan sampai lupa password bisa enggak kebuka nanti, pertama nama kalian, lalu nama untuk login, dan password, kalian juga bisa mencentang pilihan username dan password yang sama untuk mengakses superuser di terminal, atau mencentang pilihan login tanpa menggunakan password tapi tetep kalian harus membuat password.

Jika sudah beres semua tinggal menunggu sistem terpasang di laptop kalian, waktu pemasangan tergantung dari tipe penyimpanan yang kalian gunakan kalo masih pake hardisk yah cukup lama, mending yang rpm 7200 lumayan lah, kalo pake ssd bisa lebih cepat proses pemasangan.

## Proses Instalasi <figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-23-12-37-min.png" alt="selesai pemasangan manjaro " class="wp-image-7155" /> </figure> 

Sabar menunggu karena masih pake hardisk akhirnya selesai juga instalasi manjaro versi mate, selanjutnya minum dulu biar rilek, terus restart laptop kalian jangan lupa mencabut media instalasinya yah.

## Update Setelah Beres Memasang <figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-pada-2020-08-20-23-39-53-min.png" alt="" class="wp-image-7156" /> </figure> 

Untuk mendapatkan pengalaman yang lebih asik kalian bisa langsung mengupdate, biar lebih update aja sih, enggak juga gapapa tapi bakal ribet nanti kalo enggak diupdate, mending perbarui yah, udah nurut aja walau gede juga update nya sampe satu giga enggak apa2 lah.

Perintah Manjaro sama ubuntu beda yah enggak pake apt lagi tapi pake pacman karena keturunan dari arch linux, ketik perintah di bawah ini untuk update sistem atau bisa langsung nongol pemberitahuan buat update.

<pre class="wp-block-code"><code>sudo pacman -Syu</code></pre>

Atau pake ini

<pre class="wp-block-code"><code>sudo pacman -Syyu</code></pre>

Setelah selesai update silakan menikmati manjaro versi mate, kelebihan dari manjaro update nya cepet kalian juga bisa ganti-ganti kernel linux sesuka kalian aja, bebas dah.