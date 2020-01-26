---
layout: post
title: "Lecture 16 - Code-First NLP Note"
author: dionne
categories: [ Fast.AI-v3 ]
image: assets/images/13.png
---


**Algorithms can encode & magnify human bias**

### Case Study 1: Facial Recognition & Predictive Policing

- [Joy Buolamwini & Timnit Gebru](http://proceedings.mlr.press/v81/buolamwini18a.html), gendershades.org
	- Microsoft, FACE+, IBM - All of these things are sell now.
	- Largest gap between $\therefore\  Lighter Male\ >\  Darker\ Female $
- [This US mayor joked cops should “mount .50-caliber” guns where AI predicts crime](https://qz.com/co/2405308/this-us-mayor-joked-cops-should-mount-50-caliber-guns-where-ai-predicts-crime/)


	> With machine learning, with automation, there's a 99% success, so that robot is ㅡwill beㅡ99% accurate in telling us what is going to happen next, which is really interesting. 
	
	\- city official in Lancater, CA, approving on using IBM for public security

## Bias

- Bias is type of error
- **Statistical Bias**: difference between a statistic's expected value and the true value
- **Unjust Bias**: disproportionate preference for or prejudice against a group
- **Unconscious bias**: bias that we don't realize we have


> But, term bias is too generic to be productive.


Different sources of bias have different causes

**Representation Bias**: Dataset was not representative of the algorithm that might be used on later.


Above : Data is okay, but algorithm has some problem.<br />

Below : Data has error. <br />

For example, object detection production that performs very well in common product of US.<br />
But in contrast, change of target product region, like Zimbabwe, Solomon Island, and so on, reduced the performence remarkably.<br />

It is not the algorithmic problem, so we should care about data volume of region.

**Evaluation Bias**: Benchmark datasets spur on research, 4.4% of IJB-A images are dark-skinned women. 2/3 of ImageNet images from the West (Sharkar et al, 2017) ![](https://spellonyou.github.io/images/shankar.png)

---

### Case Study 2: Recidivism Algorithm Used Prison Sentencing

---

### Case Study 3: Online Ad Delivery

---

### Bias in NLP

( Nothing to do with the course, but I'm researching this field these days.)

- But all about Englsih

- Impact
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
- Algorithms are accurate and objective
- No way to apeal if there if error
- processed large scale
- cheap<br /> ![](https://cphoto.asiae.co.kr/listimglink/1/2018121911092829374_1545185366.jpg)

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
