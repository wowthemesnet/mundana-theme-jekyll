---

layout: post
title: "텐서플로우, pytorch transformer.py 코드 구조보기"
date: 2019-01-06 13:21:40
description: 코드 구현하면서 모델 이해하기
tags: [python, attention, transformer, nlp]

---

 종강을 했으니 미뤄왔던 transformer 공부를 할 차례 ( ・∀・)=p
 
 - 논문 [Attention is All you need](https://arxiv.org/abs/1706.03762)

- 논문보다는 눈으로 보고 직접 구현하면서 이해하는게 체질에 맞으니, 기존에 구현된 코드를 모델을 이해할 것 [tensor2tensor](https://github.com/tensorflow/tensor2tensor/blob/master/tensor2tensor/models/transformer.py), [pytorch](https://github.com/jadore801120/attention-is-all-you-need-pytorch)
- 가능하다면 모듈을 불러오지 않고 직접 구현하는 것이 최종 이해 목표.

---

[Tensorflow](https://github.com/tensorflow/tensor2tensor/blob/master/tensor2tensor/models/transformer.py)

### Description
	class Transformer
		def encode
		def decode
		def body
			and private function(i don't know why this is private) : greedy_infer, beam_decode, fast_decode_tpu, fast_decode
	
	@registry.register_model
	class TransformerEncoder
		def body
	
	@registry.register_model
	class TransformerRegressor
		def top
		"""Computes single scalar value from body_output."""
	
	def fast_decode_tpu
	def features_to_nonpadding
	def transformer_prepare_decoder
	def transformer_decoder

^@registry.register_hparams\ndef - 가 무려 88다. 첫번째 등장하는 line이 1340

- Transformer class
	1. initialize
	- 인스턴스 정의할 때 tw2t_model.T2TModel(상속받음) 호출함.
	- attention_weights 초기화 함, dictionary
	2. encode
	3. decode
	4. body


line 54, 55를 보면 decorator 사용하고 inheritance 받음. 다른 파일도 살펴봐야 합니다.
	- 나중에 구현할 때, MRO(Method Resolution Class) 주의해야 할 듯

line 59 부모 호출할 때 본인 파라미터 넣어줌.

- pytorch로 우회하는게 나을지도..?

---	

### requirements

- tensorflow: An Open Source Machine Learning Framework for Everyone

- tensor2tensor: Library of deep learning models and datasets designed to make deep learning more accessible and accelerate ML research.

- local server는 믿을 수 없으니 colab을 이용
	- 이 경우 우측 상단 **호스팅된 런타임에 연결** 체크에 주의... 로컬 런타임에 연결하고 사용 X ㅋㅋㅋㅋㅋㅋ

---
