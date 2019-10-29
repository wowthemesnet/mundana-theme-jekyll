---
layout: post
title: Code-First NLP Course Note 16
modified: 2019-09-03
categories: [fast.ai]
tags: 
  - Code-first-NLP
  - AI&ethics
 
comments: true

---

**This is the presentation material when I was i
nvited as a speaker at Babel Top NLP Colloquium**

*Lots of this posts from fast.ai's course [Code-First Intro to NLP](https://youtu.be/pThqge9QDn8?list=PLtmWHNX-gukKocXQOkQjuVxglSDYWsSh9)* 


**Algorithms can encode & magnify human bias**

### Case Study 1: Facial Recognition & Predictive Policing

- [Joy Buolamwini & Timnit Gebru](http://proceedings.mlr.press/v81/buolamwini18a.html), gendershades.org
	- Microsoft, FACE+, IBM와 같이 시판되는 상품을 대상으로 연구
	- Largest gap between $\therefore\  Lighter Male\ >\  Darker\ Female $
- [This US mayor joked cops should “mount .50-caliber” guns where AI predicts crime](https://qz.com/co/2405308/this-us-mayor-joked-cops-should-mount-50-caliber-guns-where-ai-predicts-crime/)


	> With machine learning, with automation, there's a 99% success, so that robot is ㅡwill beㅡ99% accurate in telling us what is going to happen next, which is really interesting. 
	
	\- city official in Lancater, CA, IBM이 치안 유지를 위해 사용되는 것에 대한 생각

## Bias

- Bias is type of error
- **Statistical Bias**: difference between a statistic's expected value and the true value
- **Unjust Bias**: disproportionate preference for or prejudice against a group
- **Unconscious bias**: bias that we don't realize we have

```
But, term bias is too generic to be productive.(정확하게 어떤 term을 쓸것인가에 대해서는 학자마다 이견이 있지만 ㅡ특히 분야가 달라질수록ㅡ 저렇게 세가지로 나누는 것은 합의가 마무리 된 상태)

```

Different sources of bias have different causes

**Representation Bias**: Dataset was not representative of the algorithm that might be used on later.

```
위 : 데이터는 괜찮은데 알고리즘이 문제인 것이고

아래 : 데이터가 문제인 것. 미국의 일반 가정에서는 음성 인식률 및 object detection 정확도가 95는 넘는 것들이 한국에 오면 폭락하는 현상을 보임. 알고리즘을 뜯어고친다기보다, 데이터 공급이 기존에 안된것.(짐바브웨, 이집트 등 데이터 공급이 안된 나라에 갈수록 더 정확도가 떨어짐.)
```

**Evaluation Bias**: Benchmark datasets spur on research, 4.4% of IJB-A images are dark-skinned women. 2/3 of ImageNet images from the West (Sharkar et al, 2017) ![](https://spellonyou.github.io/images/shankar.png)

---

### Case Study 2: Recidivism Algorithm Used Prison Sentencing

---

### Case Study 3: Online Ad Delivery

---

### Bias in NLP

```
최근 연구하고 있는 분야
```

- 관련 연구
But all about Englsih

- 영향Impact
The person is doctor. The person is nurse -> 그는 의사다. 그녀는 간호사다.


--- 

### Concept of "biased data" often too generic to be useful

- Different sources of bias have different sources

> Data, models and systems are not unchanging numbers on a screen.
> They're the result of a complex process that starts with years of historical context and involves a series of choices and norms, from data measurement to model evaluation to human interpretation.

\- *Harini Suresh*, ["The problem with Biased Data"](https://medium.com/@harinisuresh/the-problem-with-biased-data-5700005e514c)

## Five Sources of Bias in ML

- Representation Bias
- Evaluation Bias
- Measurement Bias
- Aggregation Bias(46:02)
- Historical Bias(46:26)
	- A few studies(47:13)
	- Racial Bias, Even when we have good intentions(new york times)(47:10)
	- gender(48:59)

---

### Humans are biased, so why does algorithmic bias matter?

#### Algorithms & humans are used differently (*humans are usually decision maker*)
- 사람들은 대개 알고리즘이 객관적이고 정확하다고 생각함.
- 알고리즘으로 이루어진 처리는 오류가 있어도 번명할 수가 없음.(예) 롯데리아 키오스크
- 사람보다 대규모로 일관적으로 처리되고,
- 저렴함 ![](https://cphoto.asiae.co.kr/listimglink/1/2018121911092829374_1545185366.jpg)

#### Machine learning can amplify bias

#### Machine learning can create feedback loops.

#### Technology is power. And with that comes responsibility.

---

## Solutions

1. Analyze a project at work/school:
	- Questions about AI
	- 5 types of bias [(Suresh & Guttag)](https://arxiv.org/abs/1901.10002)
	- Datasheets for datasets, Modelcards for model reporting
	- Accuracy rate on different sub-groups
2. Work with domain experts & those impacted
3. Increase diversity in our workspace
4. Advocate for good policy
5. Be on the ongoing lookout for bias
