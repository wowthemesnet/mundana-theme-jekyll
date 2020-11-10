---
id: 4756
title: Apa Yang Harus Dilakukan Setelah Menginstall Ubuntu Mate 20.04?
date: 2020-07-02T18:30:37+07:00
author: Linux Mania
layout: post
guid: https://wildanfauzy.com/?p=4756
permalink: /apa-yang-harus-dilakukan-setelah-menginstall-ubuntu-mate-20-04/
nb_of_words:
  - "509"
saswp_custom_schema_field:
  - ""
saswp_modify_this_schema_4340:
  - "0"
itemlist_item_4340:
  - 'a:0:{}'
music_composer_4340:
  - 'a:0:{}'
movie_actor_4340:
  - 'a:0:{}'
article_items_4340:
  - 'a:0:{}'
image_object_exif_data_4340:
  - 'a:0:{}'
blogposting_items_4340:
  - 'a:0:{}'
newsarticle_items_4340:
  - 'a:0:{}'
tech_article_items_4340:
  - 'a:0:{}'
product_reviews_4340:
  - 'a:0:{}'
feed_element_4340:
  - 'a:0:{}'
faq_question_4340:
  - 'a:0:{}'
performer_4340:
  - 'a:0:{}'
organizer_4340:
  - 'a:0:{}'
accepted_answer_4340:
  - 'a:0:{}'
suggested_answer_4340:
  - 'a:0:{}'
howto_supply_4340:
  - 'a:0:{}'
howto_tool_4340:
  - 'a:0:{}'
howto_step_4340:
  - 'a:0:{}'
announcement_location_4340:
  - 'a:0:{}'
music_playlist_track_4340:
  - 'a:0:{}'
music_album_track_4340:
  - 'a:0:{}'
apartment_amenities_4340:
  - 'a:0:{}'
additional_property_4340:
  - 'a:0:{}'
mc_cause_4340:
  - 'a:0:{}'
mc_symptom_4340:
  - 'a:0:{}'
mc_risk_factor_4340:
  - 'a:0:{}'
tvseries_actor_4340:
  - 'a:0:{}'
tvseries_season_4340:
  - 'a:0:{}'
trip_itinerary_4340:
  - 'a:0:{}'
saswp_newsarticle_speakable_4340:
  - "0"
neve_meta_enable_content_width:
  - 'off'
gnpub_modified_count:
  - "2"
mashsb_timestamp:
  - "1596535742"
mashsb_shares:
  - "0"
mashsb_jsonshares:
  - '{"total":0}'
image: /wp-content/uploads/2020/07/ubuntu-mate.png
categories:
  - Linux
tags:
  - chrome
  - mate
  - microsoft fonts
  - ubuntu
  - vlc
---
Ubuntu MATE adalah distro ubuntu yang memggunakan desktop environment mate, jika bosan dengan desktop environment bawaan ubuntu yaitu gnome, ubuntu mate bisa jadi alternatif selain dari xubuntu yang tentunya masih dibilang cukup ringan diinstall di laptop.

Menginstall ubuntu mate sebenarnya sudah terpasang aplikasi yang cukup untuk menunjang kebutuhan dasar menggunakan sebuah laptop sudah terpasang libreoffice, pemutar musik dan video, tetapi lebih lengkap rasanya jika menginstall beberapa aplikasi berikut.

## Menginstall Google Chrome

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" width="642" height="345" src="https://wildanfauzy.com/wp-content/uploads/2020/07/google-chrome.jpg" alt="" class="wp-image-4759" /></figure>
</div>

Browser bawaan dari ubuntu mate adalah firefox, sebenarnya tidak ada masalah dengan firefox, jika kalian sudah terlanjur nyaman dengan sinkronisasi halaman web favorit atau bookmark pada browser chrome mobile di android kalian, menggunakan google chrome sangat berguna dan memudahkan sinkronisasi data di chrome mobie dan chrome yang terpasang di laptop.

cara memasang google chrome, kalian bisa mengunjungi halaman google chrome download <https://www.google.com/chrome/> perlu diingat bahwa google chrome hanya mendukung arsitektur 64-bit hehehe, setelah mendownload chrome lalu install dengan gdebi atau perintah berikut di terminal.

<pre class="wp-block-code"><code>sudo apt install ./google-chrome-stable_current_amd64.deb</code></pre>

Pastikan sebelum menginstall posisikan terminal di folder yang terdapat file google chrome, seperti _cd Downloads_ tergantung dimana kalian menyimpan file chrome, atau alternatif lain menginstall chromium kalian bisa memasangnya lewat toko aplikasi di ubuntu mate.

## Menginstall VLC Player

Pemutar video dan musik yang handal, sebenarnya sudah ada pemutar video bawaan dari ubuntu mate ini, cuma rasanya kaya kurang gitu, apa karena sudah terbiasa menggunakan vlc untuk maraton nonton drakor dari subuh ke subuh hehehe, memang andalan vlc sudah support banyak file video jadi asiklah, kalian bisa menginstall vlc player di toko aplikasi tulis aja &#8220;vlc&#8221; entar nongol, atau perintah snap di terminal.

<pre class="wp-block-code"><code>sudo snap install vlc</code></pre>

## Menginstall Microsoft Fonts

Jika kalian membututhkan font seperti time new roman untuk mengerjakaan tugas deadline dari bapak/ibu dosen yang terhormat, biasanya menggunakan microsoft office, secara default libreoffice tidak menyediakan fonts tersebut kaian bisa menginstallnya kok tenang aja, perintah di terminal.

<pre class="wp-block-code"><code>sudo apt install ttf-mscorefonts-installer</code></pre>

Sebelum microsoft font terpasang kalian harus menyetujui perpanjian Eula gitu lah pokoknya kli oke aja, tapi kalian mau baca juga engga apa-apa.<figure class="wp-block-image size-large">

<img loading="lazy" width="1366" height="768" src="https://wildanfauzy.com/wp-content/uploads/2020/07/font-microft.png" alt="" class="wp-image-4765" /> </figure> 

Klik Ok terus muncul licence terms, the &#8220;Truetype core fonts for the web EULA&#8221; klik yes untuk meanjutkan instalasi, terus tunggu sampe selesai, udah deh, akhirnya bisa mengunakan font time new roman dan kawan-kawan di libreoffice.

Masih banyak aplikasi yang berguna untuk menunjang produktifitas seperti gimp dan inkscape, dan masih banyak lainnya, tinggal kunjungi toko aplikasi _**software boutique**_ di ubuntu mate, selamat mencoba.