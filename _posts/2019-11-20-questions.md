---
layout: post
title: "Review Lesson 08"
author: dionne
categories: [Question]
image: 
tags: [ Fast.AI-v3 ]
---

#### fast.ai v3 course

[Normalization related to train and valid](https://spellonyou.github.io/2019/11/note08-fastai-3/#211-simplified-karming-init)

#### math

- [The Matrix Calculus You Need For Deep Learning](https://explained.ai/matrix-calculus/index.html)

#### data privacy

- SHA 256

6. [metaclass](https://jfine-python-classes.readthedocs.io/en/latest/metaclass.html)
7. Can I segment document without punctuation?

#### python

- Broadcasting Review (especially *[Rule](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html#general-broadcasting-rules)*), (I totally confused with extension of arrays)[^1]

- method, attribute, thing,... for example pytorch tensor dir(var)
	- callable(getattr(loss, dir(loss))) -> some gets false and other gets true

- SyntaxError: positional argument follows keyword argument

- I remember that

~~~python
import string
alphabet = string.ascii_lowercase[:26]
alphabet.split()
~~~

outputs splited by each character,,, but it doesn't... why?

#### machine resource, things

- Why RAM is expensive?


---

[^1]: Refer [colab!](https://render.githubusercontent.com/view/ipynb?commit=2bfe4a95aac864b23bd0c0729d2720c92e169f8c&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f5370656c6c4f6e596f752f646c66662d6e6f74652f326266653461393561616338363462323362643063303732396432373230633932653136396638632f6e62732f646c322f30315f6d61746d756c5f70726163746963652e6970796e62&nwo=SpellOnYou%2Fdlff-note&path=nbs%2Fdl2%2F01_matmul_practice.ipynb&repository_id=221963162&repository_type=Repository#Broadcasting) 