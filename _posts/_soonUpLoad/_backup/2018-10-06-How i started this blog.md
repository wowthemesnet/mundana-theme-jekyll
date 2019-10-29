---

layout: post
title: How I started this blog
date: 2018-10-06 13:32:20 +0300
description: Finally I got my third theme kkkkk
img: pika.png
fig-caption: # Add figcaption (optional)
tags: [workflow]

---

I changed something important (to me ã…Žã…Ž)

1. The github often changes their often. Conventions are a bit fixed.

---

The page build completed successfully, but returned the following warning for the `master` branch:

You are currently using the 'redcarpet' Markdown engine, which is no longer supported by GitHub Pages and may cease working at any time. To ensure your site continues to build, remove the 'markdown' setting in your site's '_config.yml' file and confirm your site renders as expected. For more information, see https://help.github.com/articles/updating-your-markdown-processor-to-kramdown/.

For information on troubleshooting Jekyll see:

 https://help.github.com/articles/troubleshooting-jekyll-builds

If you have any questions you can contact us by replying to this email.

---

    The page build completed successfully, but returned the following warning for the `master` branch:

    You are currently using the 'redcarpet' Markdown engine, which is no longer supported by GitHub Pages and may cease working at any time. To ensure your site continues to build, remove the 'markdown' setting in your site's '_config.yml' file and confirm your site renders as expected. For more information, see https://help.github.com/articles/updating-your-markdown-processor-to-kramdown/.

    For information on troubleshooting Jekyll see:

     https://help.github.com/articles/troubleshooting-jekyll-builds

    If you have any questions you can contact us by replying to this email.


2. changed default browser used by jupyter notebook. i had to walk up and down from safari to chrome. ineffective.

[Actually jupyter uses the webbrowser modules to run this](https://stackoverflow.com/questions/35229604/how-to-change-the-default-browser-used-by-the-ipython-jupyter-notebook-in-linux) (I totally didn't know about this!)

3. It was my first time that I use 'fork'

4. When i open terminal, i got a message. ['You have mail.'](https://stackoverflow.com/questions/22163102/you-have-mail-message-in-terminal-os-x) It was a trace of a crontab that i used to tutor

		MacBook-Pro:mail hapkim$ mail
		Mail version 8.1 6/6/93.  Type ? for help.
		"/var/mail/hapkim": 466 messages 466 unread
		>U  1 hapkim@MacBook-Pro.l  Mon Sep 17 13:07  20/799   "Cron <hapkim@MacBook-"
		 U  2 hapkim@MacBook-Pro.l  Mon Sep 17 13:07  20/799   "Cron <hapkim@MacBook-"
		 U  3 hapkim@MacBook-Pro.l  Mon Sep 17 13:08  20/799   "Cron <hapkim@MacBook-"
		 U  4 hapkim@MacBook-Pro.l  Mon Sep 17 13:09  20/799   "Cron <hapkim@MacBook-"
		 U  5 hapkim@MacBook-Pro.l  Mon Sep 17 13:09  20/799   "Cron <hapkim@MacBook-"
		 U  6 hapkim@MacBook-Pro.l  Mon Sep 17 13:10  20/799   "Cron <hapkim@MacBook-"
		 U  7 hapkim@MacBook-Pro.l  Mon Sep 17 13:11  20/799   "Cron <hapkim@MacBook-"
		 U  8 hapkim@MacBook-Pro.l  Mon Sep 17 13:12  20/799   "Cron <hapkim@MacBook-"
		 U  9 hapkim@MacBook-Pro.l  Mon Sep 17 13:13  20/799   "Cron <hapkim@MacBook-"
		 U 10 hapkim@MacBook-Pro.l  Mon Sep 17 13:14  20/799   "Cron <hapkim@MacBook-"
		 U 11 hapkim@MacBook-Pro.l  Mon Sep 17 13:14  20/799   "Cron <hapkim@MacBook-"
		 U 12 hapkim@MacBook-Pro.l  Mon Sep 17 13:15  20/799   "Cron <hapkim@MacBook-"
		 U 13 hapkim@MacBook-Pro.l  Mon Sep 17 13:16  20/799   "Cron <hapkim@MacBook-"
		 U 14 hapkim@MacBook-Pro.l  Mon Sep 17 13:17  20/799   "Cron <hapkim@MacBook-"
		 U 15 hapkim@MacBook-Pro.l  Mon Sep 17 13:18  20/799   "Cron <hapkim@MacBook-"
		 U 16 hapkim@MacBook-Pro.l  Mon Sep 17 13:20  20/799   "Cron <hapkim@MacBook-"
		 U 17 hapkim@MacBook-Pro.l  Mon Sep 17 13:22  20/799   "Cron <hapkim@MacBook-"
		 U 18 hapkim@MacBook-Pro.l  Mon Sep 17 13:23  20/799   "Cron <hapkim@MacBook-"
		 U 19 hapkim@MacBook-Pro.l  Mon Sep 17 13:24  20/799   "Cron <hapkim@MacBook-"
		 U 20 hapkim@MacBook-Pro.l  Mon Sep 17 13:24  20/799   "Cron <hapkim@MacBook-"
		 U 21 hapkim@MacBook-Pro.l  Mon Sep 17 13:26  20/799   "Cron <hapkim@MacBook-"
		? d 1-466
		? q
		MacBook-Pro:mail hapkim$ mail
		No mail for hapkim

5. 아직 블로그는 많은 개선이 필요합니다.
	- favicon 규격 맞춰서(pillow사용) 설정하기
	- tag set 설정하기(아직 logic 못 봄 ㅠ_ㅠ)
