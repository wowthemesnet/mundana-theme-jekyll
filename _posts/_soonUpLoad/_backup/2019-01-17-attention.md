---

## Attention

[Attention is all you need]()의 저자는 Attention을 정의한다.$ Attention(query, key \-value) = \sum weight\  values$

the output given by the mapping function is a weighted sum of the values. where weights for each value measures how much each input key interacts with (or answers) the query.

### Scaled Dot-Product Attention

- query : hidden state of encoder
- key : hidden state of decoder
	- query, key는 $d_k$ 차원을 갖는다.
- value : normalized weight (i.e, how much attention a key gets.)
	- value는 $d_v$ 차원을 갖는다.

- Those dimensions are imposed by the linear projection discussed


$$Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}}) V$$

- multi-head self-attention이 왜 *novel* 모델인가요?: 대부분의 연구자들에게 attention이 목표인데, the transformer는 이 attention이 multi다.

> #### Attention은 반드시 encoder와 decoder 사이에만 있어야 하나요?

---

## Multi-head Attention


> transformer 모델은 분명 distance를 줄여서 계산량을 낮췄다. 하지만 병렬 처리한 attention-weighted position을 평균처리해서 잃은 정보도 있다.

6~7 page pass pass~~~~

---

## position-wise Feed-Forward N

$$FFN(x) = max(0, xW_{1} + b_{1}) W_2 + b_2 $$

$d_{ff}$ = 2048일 때, input and output dimension은 $d_{model}$ = 512이다.

- sublayer is p

