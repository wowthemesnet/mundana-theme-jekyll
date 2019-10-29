---
layout: post
title: python으로 hwp 처리하기 (editing)
modified: 2019-01-26
categories: [NLP]
tags: 
  - corpus
  - issue
comments: true
---

한글 파일을 사용하기 위해 python library를 사용하고 싶다면,

(1) [pyhwp](https://pythonhosted.org/pyhwp/ko/index.html) (영문 Document는 없는 듯하다.)
(2) [olefile](https://olefile.readthedocs.io/en/latest/index.html)

두 가지 대안이 있다.

- 단, 두 라이브러리 모두 한글과 컴퓨터 버전이 5.0.0.0 이상이어야 사용 가능하다.
- pyhwp를 쓰기 위해선 python2.x 버전이어야 한다.


### 참고 링크

- [hwp 파일의 구조](https://github.com/hallazzang/hwp5-table-extractor/wiki/Hwp-%ED%8C%8C%EC%9D%BC%EC%9D%98-%EA%B5%AC%EC%A1%B0)