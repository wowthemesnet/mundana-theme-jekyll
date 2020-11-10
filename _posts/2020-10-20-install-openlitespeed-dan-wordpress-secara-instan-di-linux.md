---
id: 8437
title: Install OpenLiteSpeed dan WordPress Secara Instan Di Linux
date: 2020-10-20T15:03:19+07:00
author: Linux Mania
layout: post
guid: https://wildanfauzy.com/?p=8437
permalink: /install-openlitespeed-dan-wordpress-secara-instan-di-linux/
image: /wp-content/uploads/2020/10/wordpress-on-openlitespeed.jpg
categories:
  - Linux
tags:
  - ubuntu
  - vps
---
Setelah kemarin nyoba vps, masalah bermunculan pada awalnya memasang panel webuzo terus ganti cyberpanel, pada akhirnya pake polosan aja, enggak pasang panel, cukup web server dari openlitespeed sama pasang cms wordpress, pas ngubek website ols ada cara paling gampang dengan cara One Click Install OLS, PHP, MySQL, WP and LSCache.

Akhirnya pasang ulang os linux, terus nyoba cara paling gambag tadi, vps kembali seperti bayi semua data panel dan semuanya dihapus, fresh install selanjutnya tinggal masuk ke ssh vps terus masukin kode dibawah ini atau bisa download ols1clk langsung di <a href="https://raw.githubusercontent.com/litespeedtech/ols1clk/master/ols1clk.sh" target="_blank" rel="noreferrer noopener">github</a>

<pre class="wp-block-code"><code>wget --no-check-certificate https://raw.githubusercontent.com/litespeedtech/ols1clk/master/ols1clk.sh && bash ols1clk.sh -w</code></pre>

Menurut website openlitespeed bisa dipasang di operation system ubuntu, debian, centos, untuk os ubutu support versi 14, 16, 18 dan os debian versi 7, 8,9 sedangkan os centos veris 6 dan 7, semuanya dengan os 64bit.<figure class="wp-block-image size-large">

<img loading="lazy" width="768" height="432" src="https://wildanfauzy.com/wp-content/uploads/2020/10/ols.jpg" alt="" class="wp-image-8438" /> </figure> 

Setelah berhasil masuk kes ssh vps dan memasang ols1clk.sh, selanjutnya menginstall cms wordpress dengan perintah dibawah ini.

<pre class="wp-block-code"><code>bash ols1clk.sh --wordpressplus &lt;alamatdomainkamu.com></code></pre><figure class="wp-block-image size-large is-resized">

<img loading="lazy" src="https://wildanfauzy.com/wp-content/uploads/2020/10/Wordpressplus.png" alt="" class="wp-image-8439" width="768" height="376" /> <figcaption>images from openlitespeed</figcaption></figure> 

Tinggal klik Y udah deh tunggu prosesnya sampe selesai, sambil ngopi dulu dah wkwk, jika sudah beres masuk ke wp-admin dan webadmin ols, ingat password masih default dari ols1clk silakan ganti secepatnya, masih banyak perintah untuk mengganti username, password dan database, silakan kunjungi knowledgebase openlitespeed <a href="https://openlitespeed.org/kb/1-click-install/#Options" target="_blank" rel="noreferrer noopener">disini</a>.