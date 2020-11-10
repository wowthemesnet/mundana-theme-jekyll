---
id: 8542
title: Cara Install Imagick Dan Memcached Di Openlitespeed
date: 2020-10-23T13:45:49+07:00
author: Linux Mania
layout: post
guid: https://wildanfauzy.com/?p=8542
permalink: /cara-install-imagick-dan-memcached-di-openlitespeed/
image: /wp-content/uploads/2020/10/imagic-memcached-litepspeed.png
categories:
  - Linux
tags:
  - imagick
  - memcached
  - openlitespeed
  - ubuntu
---
Pada umumnya fitur extensi php imagick atau imagemagick tidak terpasang secara default, ketika mengecek kesehatan situs akan ada rekomendasi untuk mengaktifkan imagick, fitur tersebut sangat berguna untuk memproses gambar di wordpress.

**ImageMagick** adalah sebuah perangkat lunak grafis yang gratis. Kemampuannya antara lain mampu membuat, memodifikasi dan menampilkan gambar-gambar bitmap serta mampu membaca, melakukan konversi dan menulis ke dalam berbagai format gambar yang berbeda. Selain itu perangkat lunak ini dapat melakukan crop, mengganti warna, rotasi, menggabungkan dan mengaplikasikan berbagai efek. menurut (<a rel="noreferrer noopener" href="https://id.wikipedia.org/wiki/ImageMagick" target="_blank">wikipedia</a>)

## Menambahkan repository litespeed

Lalu bagaimana cara memasang fitur tersebut, jika menggunakan panel seperti cpanel bisa dipilih pada bagian php selector, centang extensi imagick, karena saya tidak menggunakan panel alias manual makan harus menginstall lewat repo litespeed.

Pertama masuk ke ssh vps kalian lalu tambahkan repository litespeed

<pre class="wp-block-code"><code>sudo wget -O - http://rpms.litespeedtech.com/debian/enable_lst_debian_repo.sh | sudo bash</code></pre>

Seteleh ditambahkan lakukan update

<pre class="wp-block-code"><code>sudo apt update</code></pre>

Tunggu hingga proses update selesai, tambahkan perintah dibawah untuk melihat paket extensi lsphp yang tersedia.

<pre class="wp-block-code"><code>sudo apt-cache search lsphp</code></pre><figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/10/imagick-litespeed.png" alt="" class="wp-image-8543" /> </figure> 

## Install Imagick

Maka akan banyak pilihan extensi lsphp, karena disini akan memasang imagick jadi pilih bagian imagick, install sesuai dengan versi php yang kalian gunakan, disini saya menggunakan php versi 7.4, proses instalasi dengan perintah berikut.

<pre class="wp-block-code"><code>sudo apt install lsphp74-imagick</code></pre>

Jika kalian menggunakan versi php yang berbeda tinggal ganti dengan versi yang kalian gunakan misal mengguanakan versi 7.1, ganti jadi lsphp71-imagick, tungu hingga proses selesai, sudah deh terinstall, agar berjalan perlu merestart php dengan perintah.

<pre class="wp-block-code"><code>sudo touch /usr/local/lsws/admin/tmp/.lsphp_restart.txt
sudo systemctl restart lsws</code></pre>

## Install Memcached

Sudah deh, imagick terpasang, jika kalian ingin sekalia mengaktifkan memcached untuk bisa menggunakan fitur object cache di lscache kalian bisa langsung menginstall dengan perintah berikut.

<pre class="wp-block-code"><code>sudo apt install lsphp74-memcached</code></pre>

Memcached adalah sistem cache memori terdistribusi untuk tujuan umum. sering digunakan untuk mempercepat situs web yang didorong database dinamis dengan menyimpan data dan objek dalam RAM untuk mengurangi berapa kali sumber data eksternal (seperti database atau API) harus dibaca. Memcached adalah perangkat lunak gratis dan bersumber terbuka, menurut wikipedia.

Setelah berhasil menginstall memcached, lakuka restart php kembali, setelah itu masuk ke dashboad wordpress lalu mengatur object cache di litespeed cache -> cache -> object, klik on dan pilih memcached.<figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/10/memcached.png" alt="" class="wp-image-8544" /> </figure> 

## Debug

Pastikan status memcached extension sudah enable dan masukan host dengan alamat ip address kalian, atau pengaturan default dengan host disi &#8220;localhost&#8221; dan port &#8220;11211&#8221; setelah itu klik, cek pastikan connection test passed berarti objek cache bekerja dengan benar.

Jika mengalami connection failed ketika mengaktifkan memcached cek koneksi di terminal dengan perintah berikut &#8220;telnet localhost 11211&#8221; atau bisa membaca di docs litespeed untuk mendebug di link learn more atau <a rel="noreferrer noopener" href="https://docs.litespeedtech.com/lscache/lscwp/admin/#how-to-debug" data-type="URL" data-id="https://docs.litespeedtech.com/lscache/lscwp/admin/#how-to-debug" target="_blank">disini</a> semoga berhasil, cukup sekian dan terima kasih.