---

layout: post
title: "Dataset list"
date: 2019-01-15 13:21:40
description: 
tags: []

---

이에 대응하는 한국어 코퍼스 구축하면 NMT에 기여할 수 있겠다.

(6) wiki SQL
https://github.com/salesforce/WikiSQL


Dataset list

(5) Semantic Textual Similarity
- Semantic textual similarity deals with determining how similar two pieces of texts are. This can take the form of assigning a score from 1 to 5. Related tasks are paraphrase or duplicate identification.

https://github.com/facebookresearch/SentEval
https://github.com/sebastianruder/NLP-progress

datasets in Natural Language Processing/Understanding

Story Cloze Test and ROCStories Corpora

MRPC data - what is it?


(1) XNLI : The Cross-Lingual NLI Corpus
XNLI is an evaluation corpus for language transfer and cross-lingual sentence classification in 15 languages.
new : multilingual-bert가 이 데이터 셋을 사용함.(그렇다면 그 전에는 사용 안했던 모양)
MNLI의 확장형 코퍼스인듯.
- They only have English training data for this task.
- While industrial applications may not include NLI in their routine tasks, [google believe](https://github.com/facebookresearch/XNLI#introduction) that NLI is a good testbed for evaluating cross-lingual sentence representations, 

(2) COLA
The Corpus of Linguistic Acceptability (CoLA) in its full form consists of 10657 sentences from 23 linguistics publications, expertly annotated for acceptability (grammaticality) by their original authors.

(3) MRPC

(4) MNLI

  processors = {
      "cola": ColaProcessor,
      "mnli": MnliProcessor,
      "mrpc": MrpcProcessor,
      "xnli": XnliProcessor,
  }
  
  SNLI : Stanford Natural Language Inference
  MultiGenre NLI (MultiNLI)
  
  
  https://nyu-mll.github.io/CoLA/
  https://www.nyu.edu/projects/bowman/multinli/
  

