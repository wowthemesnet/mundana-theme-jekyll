---
id: 8617
title: Migrasi Personal Blog ke Hugo Dengan Netlify dan Forestry
date: 2020-11-07T14:30:51+07:00
author: pemuda malkis
layout: post
guid: https://wildanfauzy.com/?p=8617
permalink: /migrasi-personal-blog-ke-hugo-dengan-netfily-dan-forestry/
image: /wp-content/uploads/2020/11/hugo.png
categories:
  - Internet
---
Semua berawal dari promo domain empat ribu yaitu domain my. id sebuah kebanggaan memakai domain. id walaupun dengan subdomain dotmy bukan langsung ke dotid.

Akhirnya beli dua domain aep.my.id dan idan.my.id, untuk domain aep.my.id digunakan untuk projek kecil2 bikin website warung kopi dekat rumah hehehe.

Sedangkan untuk domain idan.my.id buat personal blog atau catatan sehari-hari yang sifatnya rada personal gitu, yaelah namanya juga personal blog.

Pas awal menggunakan cms wordpress dengan vps dan terus berganti ke hosting website ini, tapi setelah dipikir2 cuma lima postingan tapi ngabisin space 200mb bikin menuhin space aja.

Tertarik dengan static generate blog seperti hexo dan github pages, setelah nyoba ngoprek berhari2 akhirnya milih framework hugo, selain gampang cara mekenya, ternyata hugo ringan sekali.

## Cara Install Hugo di Ubuntu

Cara pasang di xubuntu atau ubuntu ada dua versi, mau versi lawas atau terbaru, kalo yang lawas pake apt install, versi terbaru install menggunakan snap milik ubuntu.

<pre class="wp-block-code"><code>sudo snap install hugo</code></pre>

<pre class="wp-block-code"><code>hugo version</code></pre>

Menggunakan snap untuk instalasi hugo versi terbaru atau apt versi lawas, bisa juga pake makefile pake source code hugo tapi males ahh lama wkwkw.<figure class="wp-block-image size-large">

<img loading="lazy" width="1080" height="756" src="https://wildanfauzy.com/wp-content/uploads/2020/11/20201105_205718.jpg" alt="" class="wp-image-8615" /> </figure> 

## Cara Membuat Blog dengan Hugo

Setelah berhasil memasang hugo di laptop kalian selanjutnya membuat blog dengan hugo, cukup mudah kok tinggal lakukan perintah berikut blog langsung jadi.

<pre class="wp-block-code"><code>hugo new site test.example.com</code></pre><figure class="wp-block-image size-large">

<img loading="lazy" width="1075" height="1138" src="https://wildanfauzy.com/wp-content/uploads/2020/11/20201105_210328.jpg" alt="" class="wp-image-8616" /> </figure> 

iya udah jadi blog kamu, tapi jangan seneng dulu itu masih kosongan semua, harus diisi semuanya, membuat postingan, halaman, thema, dan widget kesukaan kalian.

### Membuat postingan

<pre class="wp-block-code"><code>hugo new post/first.md</code></pre>

### Membuat tema hugo

<pre class="wp-block-code"><code>hugo new theme (nama tema kamu)</code></pre>

### Menjalankan hugo di localhost

Jika kalian sudah membuat blog dan tema serta postingan awal, kalian bisa langsung mencoba website yang sudah kalian buat di localhost

<pre class="wp-block-code"><code>cd (folderwebsite)
hugo server</code></pre><figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/11/hugo-server.png" alt="" class="wp-image-8623" /> </figure> 

Tunggu beberapa detik sampai website kamu siap, lalu kalian bisa cek blog yang sudah dibuat di browser di alamat http://localhost:1313/ jika sudah cocok dengan tampilan dan tidak ada error bisa di push ke repo lalu deploy.

Setelah udah semua tinggal push ke repo github kalian deh, tapi kayaknya ribet deh yah, kalo bikin semuanya dari awal hehe.

## Blog Hugo dengan Netlify dan Forestry

Pertama kalian harus mempunyai akun github, selanjutnya netlify dan forestry, tenang semuanya bisa log in with github kok.

  * Akun Github
  * Akun Netlify 
  * Akun Forestry

Pertama Fork repo dari <a rel="noreferrer noopener" href="https://github.com/themefisher/northendlab-hugo" target="_blank">northendlab-hugo</a> setelah tercopy semua ke akun github kalian, selanjutnya tinggal import ke forestry, dan log in with github pilih repo yang sudah difork di akun github, tunggu sampai proses selesai.

Jika proses import selesai sampai ada tulisan welcome to your cms, selanjutnya host website kalian di Netlify, login dengan akun github lalu pilih new site from git, pilih github dan repi yang sudah kalian fork tadi.

Tunggu hingga proses deploy beres, sudah deh blog hugo kalian online, jika mempunyai domain tambahkan domain di Netlify dan menggunakan dns dari Netlify otomatis akan terkonfigurasi langsung.

Selanjutnya Tinggal edit blog sesuai selera kalian, selamat mencoba, hasilnya sperti blog&nbsp;[https://idan.my.id](https://idan.my.id/)

Silakan tonton video membuat blog hugo dalam lima menit dibawah ini, harus sabar wkwkwk try and error. <figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">

<div class="wp-block-embed__wrapper">
</div></figure>