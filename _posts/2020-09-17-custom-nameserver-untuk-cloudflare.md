---
id: 8103
title: Custom Nameserver Untuk Cloudflare
date: 2020-09-17T15:19:46+07:00
author: pemuda malkis
layout: post
guid: https://wildanfauzy.com/?p=8103
permalink: /custom-nameserver-untuk-cloudflare/
image: /wp-content/uploads/2020/09/photo_2020-09-17_15-42-09.jpg
categories:
  - Internet
  - Share
tags:
  - cloudflare
---
Setelah kemarin berhasil melakukan transfer domain, ada fitur baru ditemui yaitu private nameserver, rasa penasaran begejolak akhirnya mencoba untuk ngoprek lebih lanjut.

Terinspirasi dari portal berita tirto.id, dimana tirto menggunakan cdn cloudflare tetapi memakai nameserver sendiri, tidak seperti biasa pemakai cloudflare gratisan dengan nama ns seperti sukikem.ns.cloudflare.com atau yang lainnya wkwk.

Seperti harus menguprage langganan jika dilihat dari fitur custom hostname yang terdapat di cloudflare, karena saya sendiri menggunakan hanya untuk dns manager tidak menggunakan cdn cloudflare.

Sebenarnya ini sama saja dengan membuat child nameserver tetap saja parent ns mengarah ke ip shared milik cloudflare.

## Cara Membuat Private Nameserver

Pertama pastikan layanan register domain memiliki fitur name server, tidak semua register domain menyediakan private nameserver, tanyakan terlebih dahulu ke penyedia layanan.

Berawal ketika melihat whois domain tirto di terminal linux terdapat nameserver dengan nama yang tudak asing ditelinga yaitu misbah.tirto.id, minke.tirto.id, dan marco.tirto.id.

Ketika nama tersebut tidak asing ditelinga saya, minke adalah nama panggilan dari Tirto Adhi Soerjo di novel tetralogi bumi manusia karangan pramoedya ananta toer.

Sedangkan misbah, seingat saya haji misbah atau lebih dikenal dengan haji merah, seorang tokoh muhamdiyah jalur kiri.

Sedangkan marco adalah anak muda yang membantu minke dalam mengurus penerbitan koran dalam novel jejak langkah banyak diceriakan tentang marco seorang wartawan muda, keras dan memiliki jiwa radikal yang kuat.

Oke sekilas tentang ketiga nama tersebut lanjut ke pembahasan, masuk ke layanan domain manager jika ada fitur private nameserver klik pilihan tersebut lalu masukan nama ns yang kalian inginkan.<figure class="wp-block-image size-large">

<img loading="lazy" width="1080" height="933" src="https://wildanfauzy.com/wp-content/uploads/2020/09/IMG_20200917_151319_382.jpg" alt="Custom Nameserver Untuk " class="wp-image-8102" /> </figure> 

Masukan nama sebagai nameserver kesukaan kalian jika standar biasanya menggunakan ns1, ns2. kalian bebas mau pake nama apa saja boleh asal diarahkan ke ip yang sama dengan nameserver cloudflare.

Disini saya terinspirasi dengan tirto.id maka menggunakan nama untuk ns pram dan juga minke hehe, bebas mau nama pacar atau nama kucing periharaan, membuat child nameserver menjadikan website lebih profesional ketika melihat di whois 😀

## Cara Mencari IP Shared Cloudflare

Selanjutnya adalah mencari ip dari nameserver cloudfare, pertama masuk ke dashboard cloudflare lalu klik pilihan dns terdapat nameserver untuk domain kalian seperti zelda.ns.cloudflare.com, wakijan.ns.cloudflare.com ketila sudah mengetahui, selanjutnya lakukan pencarian ip di layanan whois domain, saya sendiri menggunakan terminal.<figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/09/Screenshot-pada-2020-09-17-15-30-52.png" alt="" class="wp-image-8104" /> </figure> 

Setelah melakukan whois nameserver cloudflare kalian ada beberapa ip, pilih ip yang pertama, lalu kembali ke domain manager tambahkan ip tesebut ke custum ns di menu private nameserver, setelah berhasil membuat child nameserver.

Gunakan child nameserver ke pengaturan nameserver, lalu ganti nameserver cloudflare dengan custum ns yang sudah kalian buat, jangan lupa untuk mendisable lock domain agar nameserver bisa diubah, selesai deh.

Tunggu 48 jam agar custum ns bisa terpropagansi dengan seluruh dns, Propagasi dns adalah masa tunggu pengenalan DNS pada domain, dari koneksi internet yang mengakses domain tersebut. Pada umumnya propagasi DNS tersebut kurang lebih 1-48jam dan setiap provider koneksi internet berbeda-beda waktu propagasi dns tersebut. Lama atau cepatnya propagasi DNS, tergantung dari kecepatan resolver ISP yang Anda gunakan, dalam mengenali DNS pada domain. menurut (<a href="https://www.rumahweb.com/journal/apa-itu-propagasi-dns/" target="_blank" rel="noreferrer noopener">rumahweb</a>).

Selesai deh selamat menggunakan nameserver dengan domain sendiri 😀 jadi seperti ini<figure class="wp-block-image size-large">

<img loading="lazy" width="1080" height="1013" src="https://wildanfauzy.com/wp-content/uploads/2020/09/photo_2020-09-17_15-42-09.jpg" alt="" class="wp-image-8105" /> </figure> 

**_*Catatan_**

**_Cara diatas hanya percobaan, setelah menggunakan percobaan diatas selama satu minggu dapat surat cinta bahwa nameserver cloudflare akan dihapus dalam waktu tiga hari, setelah mengecek ke dashboard cloudflare benar saja status domain jadi moved, solusinya memang harus upgrade ke paket bisnis agar bisa custum nameserver cloudflare, nantinya akan disetting oleh teknisi dari cloudflare nameserver kita dengan glue dns, hehehe._**