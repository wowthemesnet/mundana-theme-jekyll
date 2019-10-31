---

layout: post
title: "Sequence Model, first week"
date: 2018-08-29 12:00:00
description: 안녕
tags: [SequenceModel, models]

---

- layer - l && time - t
- ( ) parentheses, brackets (UK, Canada, New Zealand, South Africa and Australia), parens, round brackets, first brackets, or circle brackets
- { } – braces are "two connecting marks used in printing"; and in music "to connect staves to be performed at the same time"[3] (UK and US), French brackets, curly brackets, definite brackets, swirly brackets, curly braces, birdie brackets, Scottish brackets, squirrelly brackets, gullwings, seagulls, squiggly brackets, twirly brackets, Tuborg brackets (DK), accolades (NL), pointy brackets, second brackets, fancy brackets, M Brace, moustache brackets.
- [ ] – square brackets, closed brackets, hard brackets, third brackets, crotchets,[4] or brackets (US)
- ⟨ ⟩ – pointy brackets, angle brackets, triangular brackets, diamond brackets, tuples, or chevrons

---

뭐 할라고 marp 열었더라?

아 맞다
RNN Model
- training
	- input : activation function's weight a and x vector would be zero vector
	- since then, y_1 hat would be selected (calculated by the softmax)
	- and y_1 hat feed on x_2 i.e y_1 hat = x_2
	- ans so on this way
	- formula of t time looks like conditional probability
	- **loss funtion : cross-entropy**

*aren't all of the y_1 hat same because the x and a are zero vector*


**weight of the activation function and y hat would be change.**

---

- Intuitively strange problem
- Generation
You have finished training a language model RNN and are using it to sample random sentences, as follows
(1) Use the probabilities output by the RNN to (randomly sample a chosen word/**pick the highest probability**) for that time-step as y_hat
(2)Then pass (**this selected word**/the ground-truth word from the training set) to the next time-step.
