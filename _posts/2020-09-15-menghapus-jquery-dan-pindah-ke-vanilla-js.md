---
id: 8079
title: Menghapus Jquery Dan Pindah Ke Vanilla JS
date: 2020-09-15T20:56:11+07:00
author: pemuda malkis
layout: post
guid: https://wildanfauzy.com/?p=8079
permalink: /menghapus-jquery-dan-pindah-ke-vanilla-js/
image: /wp-content/uploads/2020/09/cara-menghapus-jquey-di-wordpress.jpg
categories:
  - Internet
tags:
  - jquery
  - wordpress
---
Setelah mengganti tema dari gretathemes yang tidak membutuhkan jquery, selepas dari template yang sebelumnya membuat kapasitas hosting menjadi terkikis.

Masalah di WordPress adalah menggunakan jquery secara default, sejak dahulu masih menggunakan versi jquery yang bermasalah dengan keamanan yaitu versi 1.12.4 lalu bagaimana menghapus jquery sepenuhnya dari WordPress.

## Cara Menghapus Jquery 

Pertama-tama harus dicek apakah website sangat membutuhkan library jquery? jika tidak seperti tama dari generatepress dan gretathemes maka bisa dilakukan agar tidak menemui masalah.

Menambahkan baris kode di functions.php untuk menghapus jquery secara keseluruhan dengan perintah add_action.

<pre class="wp-block-code"><code>/** * Completely Remove jQuery From WordPress Admin Dashboard */
add_action('wp_enqueue_scripts', 'no_more_jquery');
function no_more_jquery(){
    wp_deregister_script('jquery');
}</code></pre>

Tambahkan kode baris diatas pada functions.php bagian paling bawah, jika masih menggunakan fungsi dari library jquery pada tema dan plugins, memperbarui versi jquery sangat bermanfaat agar tidak bermasalah dengan keamanan.

## Cara Update Jquery 

Tambahkan kode dibawah ini untuk memperbarui versi ke paling baru dari versi default 1.12.4 ke versi 3.5.1.

<pre class="wp-block-code"><code>/** * Install latest jQuery version 3.5.1. */
if (!is_admin()) {
	wp_deregister_script('jquery');
	wp_register_script('jquery', ("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"), false);
	wp_enqueue_script('jquery');
}</code></pre>

Setelah menghapus jquery akhirnya menggunakan Vanilla JS, jika kalian mengunduh library vanilla js sama dengan bercanda wkwkwk<figure class="wp-block-image size-large">

<img loading="lazy" src="https://wildanfauzy.com/wp-content/uploads/2020/09/20200915_204752.jpg" alt="vanilla js" width="NaN" height="NaN" /> </figure> 

Maka ketika kalian menceklis semua dan mengunduh ketika membuka files yang kalian dapatkan adalah baris kode yang kosong wkwkwk.

Pada dasarnya vanilla js adalah pure javascript, sebenarnya tanpa bergantung dengan framework dan library javascript semuanya bisa diselesaikan tanpa hal tersebut.

Apalagi sampai menggunakan external cdn untung menghost javascript tersebut, selain membuat kode website lebih simple dan rapih.

Menghapus Jquery bisa mempercepat loading times, serta menghemat bandwidth, sama saja dengan menghemat pemakaian kuota internet hiya2 😀