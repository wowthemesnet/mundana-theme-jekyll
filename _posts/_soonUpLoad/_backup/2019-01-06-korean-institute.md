---

layout: post
title: "국립 국어원 말뭉치파일 xml 다루기"
date: 2019-01-06 20:21:40
description: 
tags: [python]

---

- HMM model에 어울리는 한국어 corpus 찾기
- 국립 국어원 말뭉치 파일 자료 이용
- Topic 별로 잘 나뉘어져 있음

### Data Structure
1. 국립 국어원에서 제공하는 데이터 형태는 [DTD](http://qssdev.tistory.com/44), 어절 단위와 형태소 분석 두 자료를 txt 파일 형식으로 제공
2. xml은 python으로 처리하기 난해하나 Document information의 경우 scalar이므로 pandas로 변환하기에는 다소 비효율적임
3. 하지만 xml to convert를 database와 함께 고려해보는건 필요한 듯 [code blog](http://www.austintaylor.io/lxml/python/pandas/xml/dataframe/2016/07/08/convert-xml-to-pandas-dataframe/)
4. 일단 conversation에 해당하는 부분만 따로 table 생성. 나머지는 추후 join 하기로 함. (데이터가 그다지 많이 보이지는 않으므로)

### Data-python
1. xml parsing에 쓸 수 있는 python library는 
(1) bs4 - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

	from bs4 import BeautifulSoup
	with open(file_path, 'rb') as myfile:
		soup = BeautifulSoup(myfile.read(), 'lxml')
		
(2) xml

	import xml.etree.ElementTree as ET
	tree = ET.parse(file_path)
	
(3) lxml

2. conversation 부분 추출

		convs = [tags.text for tags in soup.select('s')]
		df=pd.DataFrame({'convs':conversation}); df
		
or 합치기

	import glob
	def open_soup(file_path):
	    with open(file_path, 'rb') as myfile:
	        soup = BeautifulSoup(myfile.read(), 'xml')
	    return soup
	[open_soup(one_path) for one_path in glob.glob(os.path.join(path, '*.txt'))]    		

to be continued...



