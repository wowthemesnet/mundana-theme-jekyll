---
id: 8108
title: Menghapus Aplikasi Bloatware Android Di Linux
date: 2020-09-17T16:59:40+07:00
author: Linux Mania
layout: post
guid: https://wildanfauzy.com/?p=8108
permalink: /menghapus-aplikasi-bloatware-android-di-linux/
image: /wp-content/uploads/2020/09/cara-uninstall-aplikasi-bawaan-android.jpg
categories:
  - Linux
---
Banyak aplikasi bawaan yang sebenarnya tidak terpakai kadang membuat kesal ketika memori hp penuh dengan aplikasi yang tidak jelas darimana asalnya, bikin penuh memori dan menyedot kuota internet.

Apalagi kebanyakan hp jaman sekarang terlalu banyak aplikasi bawaan yang tidak bisa diinstal hanya bisa disable, tentu membuat jengkel.

Muncul pertanyaan bagaimana menghapus aplikasi bawaan atau bloatware di linux?

## Aktifkan Usb Debugging

Untuk mengapus aplikasi bawaan harus mengaktifkan usb debugging, buka Pengaturan pilih system terus ketuk lima kali tentang ponsel maka akan muncul opsi developer atau opsi pengembang.

Selanjutnya mendownload adb (Android debug bride), silakan download [disini](https://dl.google.com/android/repository/platform-tools-latest-linux.zip) untuk versi linux karena saya menggunakan linux ubuntu bukan windows wkwkwk.

## Extract File Adb<figure class="wp-block-image size-large">

![](https://wildanfauzy.com/wp-content/uploads/2020/09/unzip-adb.png.webp) </figure> 

Setelah mendownload file adb selanjutnya unzip di folder kesukaan kalian, sampai terdapat nama folder /platform-tools/ buka folder tersebut.

Sebelumnya colokan hp Android kalian ke laptop pastikan usb debug sudah aktif dengan kabel usb masa kabel sutet pln, jika sudah kembali ke folder platform-tools klik kanan pilih open in terminal.

## Menghapus aplikasi bawaan Android 

Atau bisa langsung buka di terminal dengan perintah sebagai berikut:

cd /nama folder kalian/platform-tools/

Selanjutnya jika sudah terhubung dengan hp android pilih transfer file pada layar pilihan android ketika usb berhasil tersambung dengan laptop dan usb debug berhasil.

Sudah masuk di terminal ketik perintah berikut.

<pre class="wp-block-code"><code>./adb devices</code></pre>

Setelah mengetik perintah diatas akan ada notifikasi di hp android kalian untuk konfirmasi terhubung dengan adb, klik oke agar authorized berhasil, jika sudah selanjutnya ketik perintah dibawah ini agar masuk ke shell. 

<pre class="wp-block-code"><code>./adb shell</code></pre>

Maka akan masuk ke shell tampilan di terminal akan berubah dengan kode ponsel kalian setelah itu lakukan perintah shell dibawah ini

<pre class="wp-block-code"><code>pm uninstall -k --user 0 &lt;nama paket android></code></pre>

Masukan nama paket android dengan aplikasi bawaan atau blootware yang hendak diinstal kurang lebih seperti ini.<figure class="wp-block-image size-large">

![](https://wildanfauzy.com/wp-content/uploads/2020/09/Screenshot-pada-2020-09-17-16-37-12.png.webp) </figure> 

Untuk mengathui kode paket aplikasi android bisa dengan aplikasi _app inspector_ bisa didownload di play store atau download secara langsung <a rel="noreferrer noopener" href="https://apkpure.com/id/app-inspector/bg.projectoria.appinspector/download?from=details" target="_blank">disini</a> melalui toko aplikasi apkpure.

Lakukan satu persatu sesuai nama paket aplikasi yang ingin kalian uninstall, ini sebagian paket aplikasi bloatware pada sony xperia versi au yang dihapus wkwkwk.

<pre class="wp-block-code"><code>pm uninstall -k --user 0 com.sony.tvsideview.videoph
pm uninstall -k --user 0 jp.co.fsi.fs1seg
pm uninstall -k --user 0 com.kddi.android.cmail
pm uninstall -k --user 0 com.kddi.selfcare.client
pm uninstall -k --user 0 com.felicanetworks.mfs
pm uninstall -k --user 0 com.android.chrome
pm uninstall -k --user 0 com.sonymobile.moviecreator.rmm
pm uninstall -k --user 0 com.uievolution.gguide.android
pm uninstall -k --user 0 com.google.android.apps.photos</code></pre>

Selamat mencoba jika ada hal yang perlu ditanyakan jangan sungkan, ada kolom komentar dibawah.