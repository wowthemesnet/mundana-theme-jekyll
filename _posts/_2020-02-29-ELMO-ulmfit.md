---
layout: post
title: "ELMO, OpenAI GPT, BERT (How these models outperformed their counterparts)
author: dionne
categories: [ General ]
image: assets/images/language-models.png
---

### CONTENTS
{: .no_toc}

* [ELMo](elmo)
{:toc}

---


### when there are released?

*BERT : October 11th 2018. Published by Google. It changed leaderboard of The General Language Understanding Evaluation benchmark (GLUE)*

These models are all bi-directional, which means a model is trained to predict a next words, and also do it in opposite direction.

- 예컨대 한 문장에서 다음에 올 단어를 예측하는 과제가 있다고 하면, Input에 left-to-right과 right-to-left를 모두 넣어주는 것은 답을 제시한다는 것과 같다.

- 이러한 문제를 피하면서, bidirectionality를 구현한 것이 (모델 transformer를 제외한) 세 모델이다.

_bidirectionality가 왜 필요한가?_ 에 대해서는 추후 글을 작성할 예정이다. [이동하기]()


- Bidirectional Model ![BERT, OpenAi GPT, ELMo](https://cdn-images-1.medium.com/max/1440/1*ARMfhOTPxDWDiiAb-jFrvw.png)



### ELMo

Paper - [Deep contextualized word representations](https://arxiv.org/abs/1802.05365)<br />

Source code - Allen NLP [Github](https://github.com/allenai/allennlp)<br />

*ELMo : 15 Feb 2018, Allenlp published paper which explains pre-trained language model* <br />

ELMo, which was released by allenNLP, changed the rule of NLP, because they used pre-trained language model when they embeded words. This mechanism solved the problem of word embedding models, 
Why ‘pre-trained language model’?<br />
- Achieved great performance on a variety of language tasks.
- similar to how ImageNet classification pre-training helps many vision tasks (*)
- Even better than CV tasks, it does not require labeled data for pre-training.



### Transformer

Paper - [Attention is all you need]()
Code - Tensorflow: tensor2tensor, [Github](https://github.com/tensorflow/tensor2tensor/blob/master/tensor2tensor/models/transformer.py), [Pytorch:](https://github.com/jadore801120/attention-is-all-you-need-pytorch)

*Transformer : 2 Jun, 2017. Google released paper called **Attention is all you need***


Transformer, which becomes basis of BERT, is provided fundamental architecture of language model. To be sure, model BERT and Transformer is not that different except masking and datasets. Then, what is Transformer? First, you should understand **self-attention**, and for that, you can refer to [A Structured Self-attentive Sentence Embedding](https://arxiv.org/abs/1703.03130) paper.

- Transformer 모델을 이해하기 위해서는 Self-attention Mechanism 이해 또한 수반되어야 한다.이는  논문을 참고하면 좋다.
- 기타 소스코드 : , [Kyubyong](https://github.com/Kyubyong/transformer)


### OpenAI-GPT
논문 : [Improving Language Understanding with Unsupervised Learning](https://blog.openai.com/language-unsupervised/)
소스코드 : [Github](https://github.com/openai/finetune-transformer-lm)


- 앞서 소개한 Transformer를 
- 기타 소스코드 : [Pytorch](https://github.com/huggingface/pytorch-openai-transformer-lm)


### BERT
논문 : [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding
](https://arxiv.org/abs/1810.04805)

소스코드 : Google-research [Github](https://github.com/google-research/bert)


- 2019년 1월 26일 현재 (big-bird를 제외하고) State-of-the-art performance를 보여주고 있다.
- BERT란? [논문](https://arxiv.org/abs/1810.04805)과 [reddit 포스팅](https://www.reddit.com/r/MachineLearning/comments/9nfqxz/r_bert_pretraining_of_deep_bidirectional/)에서 볼 수 있겠지만, 
	- (1) 특정 Task에 국한되지 않는 광범위한 NLP solution을 제공합니다. (11개의 Task에 범용된다.)
	- (2) 많은 컴퓨팅 자원을 활용해 성능을 높인다.
	- (3) masking을 통해 bi-directionality를 가능하게한다.

로 요약할 수 있다.

##### -> 다음 글 : Dataset편 [이동하기]()


### 관련 링크들

- [Attention is all you need]()
- [BERT: Pre-training of Deep  Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805)
- [Medium-최첨단 인공지능 솔루션들](https://medium.com/ai-networkkr/%EC%B5%9C%EC%B2%A8%EB%8B%A8-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EC%86%94%EB%A3%A8%EC%85%98%EB%93%A4-1-%EA%B5%AC%EA%B8%80-bert-%EC%9D%B8%EA%B0%84%EB%B3%B4%EB%8B%A4-%EC%96%B8%EC%96%B4%EB%A5%BC-%EB%8D%94-%EC%9E%98-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-ai-%EB%AA%A8%EB%8D%B8-9704ebc016c4)



came off...


1. Elmo 2. bert 3. big bird


## Dataset
The Cross-lingual Natural Language Inference (XNLI) corpus is a crowd-sourced collection of 5,000 test and 2,500 dev pairs for the MultiNLI corpus.


---

## Google tensorflow bert code, [git hub 정리](https://github.com/google-research/bert)

(1) Data
- SQuAD()
- 
(2) context-free models *vs* **contextual** models
'contextual'이 뭔데? ex) 너 지금 장난쳐? (deixis) - 여기서 가리키는 '너'는 고정된 대상인가?

- "word embedding" Word2Vec(mikolov, 2013), Glove : context-free
- ELMO, ULMFit : contextual, *but unidirectional*

-> BERT: deeply bidirectional!

BERT는 두 과정을 통해 학습한다. (1) pre-training (2) fine-tuning
BERT는 두 과제를 수행한다. (1) masked word filling (2) next sentence prediction(boolean)

pre-training 을 통해 목표로 하는 언어에 대한 학습을 미리 하고, fine-tuning을 통해 세부 task를 진행하는 구조를 갖는다.
pre-training이 중요한 task. 매우 expensive하다. (이 글을 작성하는 현재 19년 1월 14일 구글에 의하면 four days on 4 to 16 Cloud TPUs)
이에 비해 fine-tuning은 pre-training이 완료되면 쉽게 끝난다. (SQuAD, for example, can be trained in around 30 minutes on a single Cloud TPU to achieve a Dev F1 score of 91.0%, which is the single system state-of-the-art.)


that's all

자 이제 한국어에 커스터마이징 해볼까요!!

---

## Pre-training with BERT

model이 원하는 포맷으로 데이터셋 맞추기.
BERT가 하는 과제는 두가지. (1) masked word filling (2) next sentence prediction(boolean)

Machine Translation 문제까지 확대할 것이니, 원어가 영어인 가벼운 텍스를 대상으로 했다.
*The input is a plain text file, with one sentence per line. (It is important that these be actual sentences for the "next sentence prediction" task).* 라고 구글이 명시했으므로 국립국어원에서 단편 소설을 번역한 파일을 하나 가져온다.

[Pretrainig tips](https://github.com/google-research/bert#pre-training-tips-and-caveats)
- pre-training은 outof memory 문제를 완화시켜주기도 합니다. 또 pre-trained contextual embeddings은 fixed contextual representations of each input token generated from the hidden layers of the pre-trained model에서 산출된 것입니다.

---
## Using BERT to extract fixed feature vectors (like ELMo)

---
## Tokenization
---

## What is Masking
- LM에서 pre-training or transfer-learning
- pre-train of what?
- (1) ELMO: recurrent module
- (2) OpenAI GPT self-attention
- attention module을 train해서 fine tuning해서 재사용한다.


- OpenAi GPT의 문제는 무엇이었나?
- 단 방향에 대한 self-attention만 사용했다.
- 한 쪽 방향의 context만 보기 때문에 bias가 생긴다.
- 왜 양방향 다 보지 못하는가?
- prediction을 token 단계에서 할 경우 t+1 or t-1에 대한 정보를 직/간접적으로 참고할 수 있다.

- BERT는 어떻게 해결하였는가?
- [MASK]를 통해 문장 전체를 온전히 인풋 값으로 넣지 않는다.
- 전체 단어의 15%가 마스킹된다.(Bag of words기준, 즉 uniqueness 기준)

- 

> Input: the man [MASK1] to [MASK2] store

> Label: [MASK1] = went; [MASK2] = a
