---
id: 4812
title: Menggabungkan Quic Cloud dengan Cloudflare
date: 2020-07-04T21:30:57+07:00
author: pemuda malkis
layout: post
guid: https://wildanfauzy.com/?p=4812
permalink: /menggabungkan-quic-cloud-dengan-cloudflare/
nb_of_words:
  - "407.66666666667"
neve_meta_enable_content_width:
  - 'off'
post_views_count:
  - "1"
mashsb_timestamp:
  - "1596599375"
mashsb_shares:
  - "0"
mashsb_jsonshares:
  - '{"total":0}'
wpdiscuz_post_rating:
  - "4"
wpdiscuz_post_rating_count:
  - "1"
image: /wp-content/uploads/2020/07/Quic-Cloud-Content-Delivery-Network-Gratis.png
categories:
  - Share
---
**Wildanfauzy.com &#8211;** Setelah kemarin menggunakan full dari quic cloud dan meninggalkan cloudflare, masalah datang secara teratur, untuk memverifikasi cname quic cloud harus menggunakan root domain, dimana hal tersebut akan mengalami error karena SOA domain.

Cara termudah jika ada masalah dengan root domain adalah menggunakan www atau subdomain, tentu hal sebut merubah domain alias dari yang sudah terbiasa menggunakan naked domain, cara kedua dengan cname flattening, harus menggunakan layanan dns manager pihak ketiga.

Mengubah nameserver kembali dengan ns milik cloudflare dan akhirnya bisa dengan cname flattening, pada akhirnya tidak bisa benar-benar lepas dengan cloudflare yhahaha.<figure class="wp-block-image size-large">

<img src="https://wildanfauzy.com/wp-content/uploads/2020/09/cname-flattening-cloudflare-1024x233.png" alt="" class="wp-image-7937" /> </figure> 

Pertama membuat pengaturan baru di dns manager, mengatur origin ip server, dan menambah cname di root domain dengan cname quic cloud, jika menggunakan domain alias tambahkan juga cname untuk www agar tidak ada masalah dengan origin ip, untuk lebih lanjut bisa membaca <a rel="noreferrer noopener" href="https://docs.litespeedtech.com/products/lscdn/onboarding/#step3-configure-dns-records-and-verify" target="_blank">disini</a>

Setelah berhasil memverifikasi cname dan bypass csn quic cloud bisa dimatikan, mendapatkan ssl gratis dari let&#8217;s encrypt, baru dua hari masalah datang lagi, karena amp real url masih diaktifkan.

Akhirnya memutuskan untuk mengkombinasikan quic cloud dengan cloudflare, mengatur ulang dns kembali menggunakan cdn dari cloudflare.

Sedangkan quic cloud disable cdn, tetapi masih menggunakan layanan image optimization, ccss dan lqip, dimana image optimization di cloudflare harus menggunakan layanan yang berbayar yhahaha.

## Image optimization

Berguna untuk mengkompress ukuran gambar tanpa menghilangkan kualitas dari gambar aslinya, dan menggunakan format gambar generasi terbaru yaitu .webp

## Critical CSS

Merender website lebih cepat, permintaan file CSS dapat secara signifikan meningkatkan waktu yang dibutuhkan halaman web untuk membuat. Alasannya adalah bahwa secara default browser akan menunda rendering halaman sampai selesai memuat, mem-parsing dan mengeksekusi semua file CSS yang direferensikan. menurut <a rel="noreferrer noopener" href="https://www.smashingmagazine.com/2015/08/understanding-critical-css/" target="_blank">smashingmagazine</a>

## Low Quality Image Placeholder (LQIP)

LQIP awalnya diperkenalkan untuk memungkinkan halaman web memuat dengan benar secara tertib, sekaligus menghasilkan gambar berkualitas sangat kecil ukuran kecil untuk menggantikan konten selama proses pemuatan gambar yang sebenarnya. menurut <a rel="noreferrer noopener" href="https://cloudinary.com/blog/low_quality_image_placeholders_lqip_explained#:~:text=LQIP%20was%20originally%20introduced%20to,conjunction%20with%20JavaScript%20lazy%20loading." target="_blank">Cloudinary</a>

Ketiga layanan tersebut ada di quic cloud, sedangkan cdn sendiri saya disable lebih memilih menggunakan milik cloudflare, akhirnya kedua makhluk itu bisa bersatu yhahaha.