---

layout: post
title: [Undergraduate Paper] all data with label 1
date: 2018-10-09 21:33:59
description: Finally I got 1864 data that label 1, and 11 hash tags 
img: nonsolus.png
fig-caption: # Add figcaption (optional)
tags: [Sarcasm, Irony, Linguistics, Pragmatics]

---

my jupyter working file at ---


absolute path name

'/Users/hapkim/Desktop/IronyDetection/res/json'


---

header, url, country name package 제공한 사람이 짠 코드의 허브가 있는 곳
[실질적으로 내가 커스터마이징 할 수 있는 코드가 있는 곳](https://github.com/taspinar/twitterscraper/blob/master/twitterscraper/query.py)
국가 정보는 url parameter로 들어가는데 이건 아마 twitter에서 java gps 정보 받는 것으로 앎


---

헤더 좀 더 추가해서 random 추출 해봤으나, 결과는 차이 없음 (그 이상은 능력 부족~)

#sarcasm
>>> with open('test1.json') as f:
...     len(json.load(f))
...
253
>>> with open('test2.json') as f:
...     len(json.load(f))
...
253
>>> with open('test3.json') as f:
...     len(json.load(f))
...
253


---

cynical , 90
irony_figurative , 46
peryear_nodatelimit , 132
bitter , 113
mocking , 266
irony_figurative2 , 46
irony , 618
yesandno , 132
sarcasm , 253
sarcastic , 17
irony , 151

> total 1864



