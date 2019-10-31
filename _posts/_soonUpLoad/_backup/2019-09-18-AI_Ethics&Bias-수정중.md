---
layout: post
title: Babel Top - Algorithmic Bias and NLP
modified: 2019-09-18
tags: 
  - AIEthics
comments: true
---


#Algorithmic Bias and NLP

- 시작은 NLP에 국한된 사례가 아닌 것으로 하려고 합니다. 
- 이 발표에서는 자연어 처리를 포함한 알고리즘에 전반적인 Bias와 관련된 사례들을 나열합니다.
- 여러분들이 머신러닝을 분석 툴로 삼으신다면 접하게 될 문제일 겁니다.

### 사례 연구 1: Facial Recognition & Predictive Policing

---

1. [Joy Buolamwini & Timnit Gebru](http://proceedings.mlr.press/v81/buolamwini18a.html), gendershades.org

2. 조이 발로위니, 팀닛 가브루, 작년 수행된 연구입니다. 

3. Microsoft, FACE++, IBM을 이용해 자체적으로 안면 인식을 통해 accuracy를 낸 결과인데요,

4. 참고로 말씀드리자면 Face++는 중국의 메그비라는 플랫폼을 소유한 회사로, 2018년 세계 안면 인식 대회 8위를 차지한 회사입니다. 이 때 중국이 전체 상위 10개국 중 6개를 차지해 세계적으로 이슈가 되기도 했었죠.

5. 결과를 바탕으로 특정 집단을 살펴보면 인종별, 성별로 제품간에 일관된 경향성을 보인다는 것이 이 연구가 시사하는 핵심 결과입니다.
	- 첫번째로는 백인 그룹과 흑인 그룹들 사이에 Gap이 있다는 것을 알 수 있고,
	- 백인 남성과 흑인 여성사이에 더 큰 Accuracy 차이가 있다는 것을 알 수 있습니다.


6. 후속 연구에서는 아마존이 위의 세 제품보다 정확도가 더 떨어진다는 것을 밝혀내기도 했고, 2018년 ACLU의 한 연구에서는 아마존 범죄자 식별 프로그램이 28명의 국회의원을 범죄자로 분류했다는 연구 결과가 나오기도 했습니다.

---

### City Official in Lancater, CA

1. 하지만 다음과 같은 인터뷰에서 볼 수 있듯이 사람들의 인식에는 알고리즘은 정확하고 객관적이라는 인식이 퍼져있습니다.
2. 특히나 공무 집행을 담당하는 분들께 이런 의식이 퍼져있다는 건 국가 전반에 큰 영향을 줄 것입니다.
2. 뒤에서 다른 사례 및 연구를 통해 더 살펴보겠지만, 이는 잘못된 인식입니다.
3. 우리 나라에서도 AI 및 머신러닝에 대한 기대는 높아지고 있습니다.

---


## (1) What is Bias


- 컴퓨터는 바이어스를 만들 수 있다. / unjust bias는 mistake의 종류중 하나다. 
- 
- Bias는 에러의 한 종류
- **Statistical Bias**: 통계적 추정값과 모수 값의 차이를 말합니다.
- **Unjust Bias**: 어떤 집단에 대해 편파적인 판단이 있을 때를 말합니다.
- **Unconscious bias**: 우리가 알아차리지 못하는 바이어스를 말합니다.

---

여러분의 이해를 돕기위해 간단한 예시를 보이겠습니다.

statistical bias에는 간단한 예시로 sampling bias가 있습니다. unrepresentative sample로 인한 bias라고 수업시간에 배우셨을 텐데요, 이라고도 하는데요

---

여기서는 주로 unjust bias, Unconscious bias에 대해서 다루겠습니다만, 미리 여러분께 당부드릴 것이 있다면

bias는 그 자체로 아주 generic한 용어입니다.

그말은 bias가 나타나는 분야나 원인, 양상으로 한정적으로 정의되지 않고 있으며, 정의된다 하더라도 학계 혹은 산업 분야에서 생산적이지 않음을 의미합니다.

그러니 여러분에게 '그래서 bias가 한마디로 뭐지?'란 의문이 혹시나 드신다면, 여러분이 정의하시기 나름이라는 말씀을 드리고 싶습니다.

---

# 여기까지 자료를 확실히 만들었음!


### (2) Bias in NLP

- Bias in Word Embeddinngs
- NIPS 2016 Spotlight Paper
- <span style="color:red">word Embedding에 대해 간단히 설명드리자면, 일련의 단어들을 각각 dependent한 numerical value로 만드는 기법입니다.</span>
- uncle, aunt는 왜 문제가 안되는가? 그 자체로 성별적 특성을 갖고 있기 때문이다.
하지만 문제가 되는 지점은 남자 surgeon에 대응하는 여자 빈칸을 유추하면서부터입니다.
단어 자체에 여성적 요소를 갖고 있지 않은 단어를 내놓습니다. female 단어 그 자체로 을 통해 여성이 나오는 ...


---

- Bias in Google Translate
- <span style="color:red">Turkish에 관해 간단히 설명하기</span>

---

- Automatic Speech Recognition
	- Accent
	- Dialect
	- Children
	- Elderly

---

- Evaluation and Debiasing

시초가 됐던 연구는 유추를 통해 bias를 평가했습니다. 방금 보여드렸던 영상에서는 차원 축소를 통해 debiasing을 하죠.

---

하지만 Evaluation과 Debias는 현재 bias가 갖고 있는 몇가지 특성으로 인하여 제거에 어려움을 겪고 있다.

---

### Concept of "biased data" often too generic to be useful

- generic 하다는 것은 이전에 말씀드렸다시피, 다분히 생산적임을 의미합니다.

---

- Representation Bias

input Data가 under-represented, 모집단을 대표하지 않을때. 
예: ImageNet. ImageNet은 여러분도 한 번쯤 들어보셨을, 시각 처리 분야에서 널리 쓰이는 데이터셋입니다. 하지만 Shankar의 연구에 의하면 이 데이터 셋의 45%가 미국  영국, 이탈리아, 호주, <span style="color:red">ES-스페인, AR-아르헨티나, IE-아일랜드</span>다.

---


- Measurement Bias

건강 기록 데이터(HER)를 분석해 살펴본 뇌졸중의 원인

직접적으로 뇌졸중을 환자들을 측정할 수는 없어서, 스스로 증상을 느끼고 (have symtoms), 의사에게 가서 테스트를 받고, 뇌졸증 진단을 받은 데이터가 바로 건강기록 데이터 입니다.

논문에서는 이를 대상 집단, 즉 ideal 집단을 수집하는 과정에서 발생하는 바이어스라고 말합니다.


---

- Historical Bias



---

- Aggregation Bias

다른 그룹들에 하나의 표본이 다 퉁치려고 할 때 발생하는 바이어스.

예컨대 아이, 라고 하면 어떤 group을 형성하기 때문에 아이들간의 variation을 포용하지 못한다는 설명. 논문에서 범용적인 설명은 될 수 없으나, 집단을 나타내는 


---

--- 

### People also have their own biases

이쯤되면 이런 생각을 하시는 분이 계실지도 모릅니다.

편견은 인간도 갖고있다. 

흔히 AGI(Aritificial General Intelligence)의 목표는 사람과 구분할 수 없는 인공지능이라고 하지 않는가? 인간과 비슷한 특징을 갖는 것이 왜 문제가 되는가?

사실, 이와 비슷한 생각을 저도 합니다.

똑똑한 분들도 합니다.

---

#### Algorithms & humans are used differently (*humans are usually decision maker*)
- 사람들은 대개 알고리즘이 객관적이고 정확하다고 생각함.
	- 이전의 시 공무원 사례
- 알고리즘으로 이루어진 처리는 오류가 있어도 번명할 수가 없음.
	- ‘Creative ... motivating’ and fired 
- 사람보다 대규모로 일관적으로 처리되고,
	- [불편한IT] 무인포스 확산···햄버거 주문이 버거운 노인
	- What happens an algorithm cuts your health care
- 저렴함 <br></br>



Weapons of Math Destruction의 저자 Cathy O'neil은 알고리즘이 고용, 해고, 교육, 범죄 처방 등에 관해 어떻게 이용되는지 사례 연구를 한 뒤 이렇게 말했습니다.

특권 계층은 사람이 직접 작업하고, 소외 계층은 알고리즘이 작업한다.

#### Machine learning can amplify bias & create feedback loops

- Man also like shopping -> *multilabel object classification and visual semantic role labeling.*

> Language is increasingly being used to define rich visual recognition problems with supporting image collections sourced from the web. Structured prediction models are used in these tasks to take advantage of correlations between co-occurring labels and visual input but risk inadvertently encoding social biases found in web corpora. In this work, we study data and models associated with multilabel object classification and visual semantic role labeling. We find that (a) datasets for these tasks contain significant gender bias and (b) models trained on these datasets further amplify existing bias. For example, the activity cooking is over 33% more likely to involve females than males in a training set, and a trained model further amplifies the disparity to 68% at test time. We propose to inject corpus-level constraints for calibrating existing structured prediction models and design an algorithm based on Lagrangian relaxation for collective inference. Our method results in almost no performance loss for the underlying recognition task but decreases the magnitude of bias amplification by 47.5% and 40.5% for multilabel classification and visual semantic role labeling, respectively.

- Runaway Feedback Loops in Predictive Policing

> Predictive policing systems are increasingly used to determine how to allocate police across a city in order to best prevent crime. Discovered crime data (e.g., arrest counts) are used to help update the model, and the process is repeated. Such systems have been empirically shown to be susceptible to runaway feedback loops, where police are repeatedly sent back to the same neighborhoods regardless of the true crime rate.
In response, we develop a mathematical model of predictive policing that proves why this feedback loop occurs, show empirically that this model exhibits such problems, and demonstrate how to change the inputs to a predictive policing system (in a black-box manner) so the runaway feedback loop does not occur, allowing the true crime rate to be learned. Our results are quantitative: we can establish a link (in our model) between the degree to which runaway feedback causes problems and the disparity in crime rates between areas. Moreover, we can also demonstrate the way in which \emph{reported} incidents of crime (those reported by residents) and \emph{discovered} incidents of crime (i.e. those directly observed by police officers dispatched as a result of the predictive policing algorithm) interact: in brief, while reported incidents can attenuate the degree of runaway feedback, they cannot entirely remove it without the interventions we suggest.


--- 

#### Technology is power. And with that comes responsibility.

 세계 인구 중:
56% 인터넷 접근
7% 대학 졸업장이 있고
0.5% 코딩을 할 줄 안다

잘못된 사용을 해서는 안된다고 생각합니다.

잘못된 것이 있다면, 바로 잡을 수 있어야 한다고 생각합니다. 알고리즘이 영향을 끼치는 대상이 0.5%가 아니라면 더욱이요.

---

## (4) Solutions

1. Analyze a project at work/school:
	- Questions about AI
	- 5 types of bias [(Suresh & Guttag)](https://arxiv.org/abs/1901.10002)
	- Datasheets for datasets, Modelcards for model reporting
	- Accuracy rate on different sub-groups
2. Work with domain experts & those impacted
3. Increase diversity in our workspace
4. Advocate for good policy
5. Be on the ongoing lookout for bias

---



---

2001년에 IBM AND THE Holocaust라는 책이 발간됐습니다. IBM이 NAZI의 유대인 학살에 어떤 도움을 줬는지에 관한 내용을 담긴 책이었는데요, 이에 관해 IBM은 일관적으로 아무런 대응도 하지 않음으로써 동의함으로 간주한다고 여겨져 왔습니다. 이 책의 저자는 약 600페이지에 걸쳐 IBM과 NAZI당의 관계를 자세히 서술하는데, 그 중 핵심이 된다고 생각하는 부분을 PPT에 담아 왔습니다. 화면에 보시는 사진은 흔히 알려진 천공카드 혹은 펀치카드인데요, IBM에 의해 독일 전역에서 수행된 인구조사를 통해 수집된 민족 유형, 주거 지역 및 직업 정보가 해당 카드의 행과 열에 기록되어있다고 합니다.

---



#### Questions to ask about AI


---


### Datasheets for datasets

2018년 ACL 논문입니다.

fridman은 bias의 고전 논문을 쓰시기도 하셨죠. 제가 태어난해에 논문을 투고하셨던 것으로 기억하는데요, 마지막이라 빨리 끝내고 싶지만 이 논문은 제게 꽤 흥미로웠던터라 소개를 안 해드릴 수가 없습니다. 자연어 처리의 꽃 데이터 라벨링에 관한 이야기 입니다. 오늘 말씀을 못드렸는데요, 코퍼스 구축을 해보신 분들은 아시겠지만, 코퍼스를 구축할 때 바이어스가 발생하지 않게 하는 것은 거의 불가능 하다고 느끼실 겁니다. 어노테이터는 연구비가 지원하는 한으로 모집해야하며, 그렇게 되면 연령대는 제한되게 됩니다. 지인이 아니라면 학력이 정해지겠지만 물어물어 지인을 구한다면 대졸 혹은 대학 재학중인 분으로 구할 수 있겠죠. 국적은 차치하고 언어라도 (개인적인 경험입니다) 1인당 한 언어를 담당한다는 전제하에 3개를 넘어가면 좋겠다는 생각을 했습니다. 얼마전에 골드버그 논문을 보고도 쓴 웃음을 지었지만 제목만 보고 통감했던 논문이 있습니다. 간략하게 말하면 다음과 같습니다. "대체 우리가 Task를 모델링하는 거냐 Annotator를 모델링하는거냐? 데이터셋에 annotator의 바이어스가 얼마나 많은지 알아?"

해당 슬라이드에는 정의에 대한 용어 설명이 나와있는데요, 논문 뒷편에는 트위터 해이트 스피치 




> Data, models and systems are not unchanging numbers on a screen.
> They're the result of a complex process that starts with years of historical context and involves a series of choices and norms, from data measurement to model evaluation to human interpretation.

\- *Harini Suresh*, ["The problem with Biased Data"](https://medium.com/@harinisuresh/the-problem-with-biased-data-5700005e514c)

---

[Turkish](https://forum.duolingo.com/comment/28143583/Question-about-bir-in-Turkish)
[companies are on the hook if there hiring algorithms are biased](https://qz.com/1427621/companies-are-on-the-hook-if-their-hiring-algorithms-are-biased/)
[NLP datasheets](https://www.aclweb.org/anthology/Q18-1041)