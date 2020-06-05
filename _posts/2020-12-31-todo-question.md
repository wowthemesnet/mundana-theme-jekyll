---
layout: post
title: "[Question] Tracking status of of learning"
author: dionne
categories: [ going further ]
image: assets/images/lifetimestudy.jpg
---

## Reading list / Questions

### Open Source

- The (written) unwritten guide to pull requests | July 25, 2019 - https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests (and this blog has lots of good articles)
- Fastai contribution guide
- [Fastai test guide]() [^2]

### High Performance Computing (Moore's Law / Dennard Scaling)

- What is CUDA? 9.0, 10.0, 10.1 what differs? why torch conflicts when using not corresponded version?

- How to evaluate TPU spec with GPU? what criterion?

- How colab is limiting the GPU for colab pro user - [here](https://colab.research.google.com/signup#advantage) / so suppose I’m implementing a model and should I wait until virtually use GPU? / How awful the resource is if I use GPU all the time? [^1]

### Container (a.k.a. kubernetes/docker .. )

- Julia Evan’s article of container - https://jvns.ca/blog/2016/09/15/whats-up-with-containers-docker-and-rkt/

### Github

- why clone using https (rather than ssh) is recommended?
- GIt Pro book
	- Why there is no changing remote from https to https / ssh <-> ssh?
reference git pro document

### Distributed / Parallel Computing

- CS224n Lecture2 prof. Christopher [mentioned]() if we have lots of data(millions of word vectors), it is important to not have to send gigantic updates around
	- Don't have any knowledge regarding this
	- (1) J. Han and B. Sharma, *[Learn CUDA Programming: A beginner's guide to GPU programming and parallel computing with CUDA 10.x and C/C++](https://www.amazon.com/CUDA-Cookbook-Effective-parallel-programming/dp/1788996240/)*, Packt, 2019.
	- (2) A. Sherif, and A. Ravindra, [Apache Spark Deep Learning Cookbook: Over 80 recipes that streamline deep learning in a distributed environment with Apache Spark](https://www.amazon.com/Apache-Spark-Deep-Learning-Cookbook-ebook/dp/B07B8S77FS/), Packt, 2018.
	- (3) B. Quinto, *[Next-Generation Machine Learning with Spark: Covers XGBoost, LightGBM, Spark NLP, Distributed Deep Learning with Keras, and More](https://www.amazon.com/Next-Generation-Machine-Learning-Spark-Distributed/dp/1484256689/)*, apress, 2020
	- (4) G. Lozzia, *[Hands-On Deep Learning with Apache Spark: Build and deploy distributed deep learning applications on Apache Spark](https://www.amazon.com/Hands-Deep-Learning-Apache-Spark-ebook/dp/B07BJL35ZV/)*, Packt, 2019. 

	
### As a Researcher

- [Normalized h5 index of CS conference](https://medium.com/@csindexbr/normalized-h5-index-of-computer-science-conferences-bde2385fcbce)


—-

[^1]: BTW, are GPUs at Casablanca? Why a timezone matches it?


[^2]: wanted to run test to see specific example, reading document but couldn't (crying)