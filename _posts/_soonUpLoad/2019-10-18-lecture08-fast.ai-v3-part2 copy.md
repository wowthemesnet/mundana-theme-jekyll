---

layout: post
title: Lecture 08 - Deep Learning From Foundations
modified: 2019-10-17
categories: [fast.ai]
tags: 
  - v3-part1
comments: true

---

*I don't know if you read this article, but I heartily appreciate Rachael Thomas and Jeremy Howard for providing these priceless lectures for free*

**Contents**

1) [What is going on in this course](#whats-going-on-in-this-course)

2) [Library development using jupyter notebook](#library-development-using-jupyter-notebook)


**Resources**

1) [notebooks](https://github.com/fastai/course-v3/blob/master/nbs/dl2/01_matmul.ipynb)


2) [material](https://drive.google.com/file/d/18QwDI25Lf0ld0-cEugu7LxjwTc2NRkha/view)


3) [video](https://course.fast.ai/videos/?lesson=8)


4) [broadcasting excel](https://docs.google.com/spreadsheets/d/1bIPBcf-p9iqNG8BGmIVlJCFa4jEsbOZvcPXGTYe5pjI/edit#gid=0)


---

### 1) What is going on in this course?



#### What is from foundations?

1) Recreate fast.ai and Pytorch

2) using pure python

#### Evade Overfitting 

Overfit : validation error getting worse
~training loss < validation loss~

#### Know the name of the symbol you use

find in this page if you don't know the symbol that you are using[](https://en.wikipedia.org/wiki/List_of_mathematical_symbols) or just draw it [here](http://detexify.kirelabs.org/classify.html) (run by ML!) 

#### Steps to a basic modern CNN model

1) Matrix multiplication


2) Relu / Initialization


3) Fully-connected Forward


4) Fully-connected Backward


5) Train loop


6) Convolution


7) Optimization


8) Batchnormalization


9) Resnet

#### Today's implementation goal: 4) FC backward

so we have to do Matmul > Relu/init > FC Forward > FC Backward

---

### 2) Library development using jupyter notebook

https://dbader.org/blog/python-assert-tutorial


#### jupyter notebook certainly can make module

There will be #export tag that Howard want to extract
and *special program* notebook2script.py will put codes of following #expert into python module



#### 2 Python scripts, which are *run\_notebook* and *notebook\_to\_script*

where should i stop? 

what is **run_notebook.py**? Dose it related to with order of

	test -> test01 
	test01 -> test

..?	 -> In any case, two of them are Assertion error, so replication of assersion error apears.

#### [Python Fire](https://opensource.googleblog.com/2017/03/python-fire-command-line.html)
in *run_notebook.py*

read and run the code in a notebook, and in the process, Jeremy used library called !Fire!, which takes any kind of function and converts into CLI.

*fire library was released by Google open source, Thursday, March 2, 2017*

---

### 2) Library development using jupyter notebook  

### 3) Get data

- c explains how many pixels there are in in MNIST
- PyTorch's *view()* method: used in conjunction with other neural network components.

### 4) Linear Model, Xw+a = Y

[matmul visulization site](http://matrixmultiplication.xyz)

weights, bias
