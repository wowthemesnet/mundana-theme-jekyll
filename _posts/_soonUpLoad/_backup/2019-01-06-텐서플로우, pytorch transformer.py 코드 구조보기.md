---

layout: post
title: "텐서플로우, pytorch transformer.py 코드 구조보기"
date: 2019-01-06 13:21:40
description: 코드 구현하면서 모델 이해하기
tags: [python, attention, transformer, nlp]

---

- greedy search

- beam search
	- (0, 1) 곱하므로 자연로그 취할것.

- accent, case

Could not find trained model in model_dir: /tmp/tmpuB5g5c, running initialization to predict.

The RNN and CNN handle sentences word by word.
This sequentiality is an obstacle toward parallelization of the process.
- *병렬화*인 이유: 한 문장을 해석하기 위해서 관련 단어를 모두 동시에 고려한다. 그러기 위해선 병렬 처리가 되어야 한다. 문서에 있어서도 문장, 단어등이 병렬 처리가 되어야 함.
- The Transformer architecture is aimed at the problem of sequence transduction [by Alex Graves](https://arxiv.org/abs/1211.3711) meaning any task where input sequences are transformed into output sequences.
- However, in those CNN-based approaches, the number of calculations in parallel computation of the hidden representation, for input→output position in sequence, grows with the distance between those positions. The complexity of O(n) for ConvS2S and (nlogn) for ByteNet makes it harder to learn dependencies on distant positions.
- Up till now, most of the research including attention is used along with RNNs. The novel approach of Transformer is however, to eliminate recurrence completely and replace it with attention to handle the dependencies between input and output.
- CNN, RNN을 완전히 제거함. 대신 self-attention으로 채움.
- Transformer is based on sequence-to-sequence model for Statistical Machine Translation (SMT) as introduced in Cho et al., 2014 . It includes two RNNs, one for encoder to process the input and the other as a decoder, for generating the output.



- stack of identical layers
- Each of those stacked layers is composed out of two general types of sub-layers
	- multi-head self-attention mechanism, and
	- position-wise fully connected FFN.




	In contrast to ConvS2S however, where input representation considered each input element combined with its absolute position number in sequence (providing sense of ordering; ByteNet have dilated convolutions and no position-wise FNN), transformer introduces two different NN for these two types of information.

(지원) Multi-head self-attentionrhk 
- 사인 곡선버전은 sentence의 absolute position을 제공하는 것과 비슷한 성능을 제공하면서 상당히 복잡합니다. 그러나 테스트에서 문장 길이가 길어질수록 제시된 모델 번역이 더 낫다. (길어진 문장은, 적어도 훈련 데이터의 문장보다는 길다).
- 이는 사인 곡선 (sinusoidal)이 더 긴 문장을 추론할 수 있게 함을 뜻한다.

즉, This encoding gives the model a sense of which portion of the sequence of the input (or output) it is currently dealing with.

모델에게 지금 처리중인 입력 혹은 출력이 어디쯤인지 인지 시켜줄 수 있다. input으로 먹이니까.

The positional encoding can be learned, or fixed. Authors made tests (PPL, BLEU) showing that both: learned and fixed positional encodings perform similarly.

In paper authors have decided on fixed variant using sin and cos functions to enable the network to learn information about tokens relative positions to the sequence.

그래서 fix

Of course authors motivate the use of sinusoidal functions due to enabling model to generalize to sequences longer than ones encountered during training.

## Encoder

- Stage 1 – Encoder Input Information on sequence ordering is very important. As there is no recurrence, nor convolution, this information on absolute (or relative) position of each token in a sequence is represented with use of "positional encodings" (Read more). The input for the encoder is therefore, represented as:

	- positional encodings added ⊕ to
	- embedded inputs

- N=6 layers. In practice the N=6 means more than 6 layers. Each of those “layers” are actually composed of two layers: position-wise FNN and one (encoder), or two (decoder), attention-based sublayers. Each of those additionally contains 4 linear projections and the attention logic. Thus, providing effectively deeper than 6 layer architecture.

	- Stage 2 – Multi-head attention
	- Stage 3 – position-wise FFN

Stages 2 and 3 use the residual connection (thus, all employ dmodel=512) followed by normalization layer at its output.



### Encoder works like this

	Stage1_out = Embedding512 + TokenPositionEncoding512
	Stage2_out = layer_normalization(multihead_attention(Stage1_out) + Stage1_out)
	Stage3_out = layer_normalization(FFN(Stage2_out) + Stage2_out)
	
	out_enc = Stage3_out


## Decoder

Decoder’s architecture is similar however, it *employs additional layer* in Stage 3 with *mask multi-head attention* over encoder output.

Stage 1 – Decoder input The input is the output embedding, *offset by one position to ensure that the prediction for position i is only dependent on positions previous to/less than i.*

- ??? 

Stage 2 Masked Multi-head attention Modified to prevent positions to attend to subsequent positions.

Stages 2, 3 and 4 also use the residual connection followed by normalization layer at its output.

The details of each mechanism applied in the mentioned layers is more elaborated in following section.

Put together decoder works as follows:
normalize 이전 단계 output도 넣어서 하는건지 배제하는지 잘 볼 것.

	Stage1_out = OutputEmbedding512 + TokenPositionEncoding512
	
	Stage2_Mask = masked_multihead_attention(Stage1_out)
	Stage2_Norm1 = layer_normalization(Stage2_Mask) + Stage1_out
	Stage2_Multi = multihead_attention(Stage2_Norm1 + out_enc) +  Stage2_Norm1
	Stage2_Norm2 = layer_normalization(Stage2_Multi) + Stage2_Multi
	
	Stage3_FNN = FNN(Stage2_Norm2)
	Stage3_Norm = layer_normalization(Stage3_FNN) + Stage2_Norm2
	
	out_dec = Stage3_Norm


### 시간을 sine 함수로 넣는다.

- How the scaling factor (Equation 3) makes an impact?
- How actually the positional encoding work? Why they have chosen the sin/cos functions and why the position and dimension are in this relation? Finally how sinusoidal helps translate long sentences?
Does having separate position-wise FFNs help? (comparing to ConvS2S).
- The “cost of reduced effective resolution due to averaging attention-weighted position” is claimed to be a motivation for multi-head attention. How to understand better what is the issue and how multi-head attention helps?

주의 가중치의 평균 위치로 인한 유효 해상도 감소 비용, 때문에 multi-head attention을 쓴다고 함.
 문제가 무엇인지, 그리고 멀티 헤드주의가 어떻게 도움이되는지 더 잘 이해하는 방법?

- The Transformer brings a significantly improvement over ConvS2S, but where does the improvement come from? It is not clear from the work. ConvS2S lacks the self-attention, is it what brings the advantage?
- Masked Attention. The problem of using same parts of input on different decoding step is claimed to be solved by penalizing (mask-out to −∞) input tokens that have obtained high attention scores in the past decoding steps – a bit vague. How does it work? Maybe explicitly having a position-wise FFN automatically fixes that problem?
- Applying multi-head attention might improve performance due to better parallelization. However, Table 3 also show increasing h=1to8 improves accuracy. Why? Moving h to 16 or 32 is not that beneficial. How to interpret this correctly?
- How important the autoregression is in context of this architecture?

이 인코딩은 모델이 현재 처리중인 입력 (또는 출력)의 시퀀스 부분을 인식합니다.

스케일링 요소 (수식 3)가 어떻게 영향을 미칩니 까?
위치 인코딩은 실제로 어떻게 작동합니까? 왜 그들은 sin / cos 함수를 선택했으며 왜 위치와 차원이이 관계에있는 것입니까? 마침내 사인파가 긴 문장을 번역하는 데 어떻게 도움이됩니까?
별도의 위치 기반 FFN이 도움이됩니까? (ConvS2S와 비교).

Transformer는 ConvS2S보다 현저하게 향상된 성능을 제공하지만 개선점은 어디서 발생합니까? 작품에서 분명하지 않습니다. ConvS2S는 자기주의가 부족합니다. 장점이 무엇입니까?
가면주의. 서로 다른 디코딩 단계에서 동일한 입력 부분을 사용하는 문제는 과거의 디코딩 단계에서 높은주의 점수를 얻은 입력 토큰을 페널티 (마스크 아웃 -∞)하는 것에 의해 해결 될 수 있다고 주장됩니다. 어떻게 작동합니까? 명시 적으로 FFN을 사용하면 문제가 자동으로 해결됩니다.
멀티 헤드주의를 적용하면 병렬화가 향상되어 성능이 향상 될 수 있습니다. 그러나 표 3은 또한 h = 1to8의 증가가 정확도를 향상시키는 것을 보여줍니다. 왜? 16 또는 32로 이동하는 것은 그다지 도움이되지 않습니다. 올바르게 해석하는 방법?
자기 회귀가이 아키텍처의 맥락에서 얼마나 중요합니까?


## Multi-head attention
Transformer reduces the number of operations required to relate (especially distant) positions in input and output sequence to a O(1). However, this comes at cost of reduced effective resolution because of averaging attention-weighted positions.




