---
id: 8246
title: Membuat Perpustakaan Online Seadanya
date: 2020-09-23T20:45:30+07:00
author: Redaksi
layout: post
guid: https://wildanfauzy.com/?p=8246
permalink: /membuat-perpustakaan-online-seadanya/
image: /wp-content/uploads/2020/09/membuat-Perpustakaan-Digital.jpg
categories:
  - Share
---
<p class="has-drop-cap">
  Beberapa hari yang lalu melakukan tranfer domain dengan harga promo, ketika checkout baru sadar mendapatkan hosting gratis, wah asik juga beli gorengan gratis cabe.
</p>

Bingung buat apa itu hosting, hanya mempunyai satu domain saja, pada awalnya ingin diterminate saja daripada sia-sia tapi hal itu berubah setelah minum indocafe dan makan indomie empal gentong.

Kebetulan sudah nyewa hosting juga udah lama di BOC Hosting, males rasanya kalo migrasi hosting, lagian kontraknya masih lama, akhirnya tetap menggunakan domain utama sebagai subdomain.

Masuk ke cpanel baru nyadar pake inodes bukan meteran storage, istilah marketingnya hosting unlimited wkwkwk, akhirnya kepikiran untuk mengcopy koleksi ebook di laptop ke hosting.

## Cara Membuat Perpustakaan digital Sederhana 

Pertama harus mempunyai storage yang bisa diakses online, namanya juga perpus online bukan fisik, jadi haeus punya storage online atau hosting.

Disini saya membuat dengan subdomain di <https://perpus.wildanfauzy.com> karena beda ip address harus mengatur dns A ke server yang tadi dqpet gratis.

Enggak tau kenapa, proses bikin subdomain kayaknya lama mungkin karena domain utama bukan di hosting sini.

## Upload ebook ke hosting

Namanya juga bikin perpustakaan walaupun seadanya tapi harus ada isinya dong, upload ke hosting tepatnya di directori subdomain, percuma di folder public_html kan pakenya subdomain.

Pastikan buku yang kalian upload enggak terkendala sama hak cipta, usahakan ebook yang mempunyai izin bisa disebarkan secara bebas.

Kabanyakan ebook publik domain atau memang diberi kebebasan sama penulisnya buat disebarkan luaskan, kalo bermasalah sama hak cipta jangan diupload sembarangan. 

## Memasang script directory listing sederhana

Banyak pilihan script agar directory listing apache enggak membosankan, cari aja di github banyak pilihan mulai daei php, laravel dll.

Karena engga mau yang berhubungan dengan framework, disini lebih milih script yang simple aja yang penting enggak monoton bangetlah. 

Menggunakan script dari ivanweiler yaitu _indian bisa di download <a rel="noreferrer noopener" href="https://github.com/ivanweiler/_indian" target="_blank">disini</a> atau bisa cari-car aja di github pake keyword _&#8220;directory listing&#8221;_. milih script ini karena simple terus dibangun pake css.

Hasilnya kaya gini <figure class="wp-block-image size-large">

<img loading="lazy" width="1080" height="811" src="https://wildanfauzy.com/wp-content/uploads/2020/09/20200923_203403.jpg" alt="perpustakaan online mini" class="wp-image-8247" /> </figure> 

Iya cuma gitu doang kumpulan folder sama file, enggak ada judul, cuma index of. bisa langsung dicek di <https://perpus.wildanfauzy.com> simple bisa langsung dibaca lewat pdf viewer online kalo lewat desktop.

Cara install script directory listing di apache server bisa dilihat di file readme.md mungkin cukup sekian dulu boleh mampir langsung kesana mumpung bandwidth-nya masih ada wkwkkw