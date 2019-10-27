---
layout: post
title: "Lecture 08 - Deep Learning From Foundations"
categories: [fast.ai-v3]
image:
---

&nbsp;
*I don't know if you read this article, but I heartily appreciate Rachael Thomas and Jeremy Howard for providing these priceless lectures for free*
&nbsp;
**Contents**
&nbsp;
1) [What is going on in this course](#whats-going-on-in-this-course)
2) [Library development using jupyter notebook](#library-development-using-jupyter-notebook)
&nbsp;
**Resources**
- [notebooks](https://github.com/fastai/course-v3/blob/master/nbs/dl2/01_matmul.ipynb)
- [material](https://drive.google.com/file/d/18QwDI25Lf0ld0-cEugu7LxjwTc2NRkha/view)
- [video](https://course.fast.ai/videos/?lesson=8)
- [broadcasting excel](https://docs.google.com/spreadsheets/d/1bIPBcf-p9iqNG8BGmIVlJCFa4jEsbOZvcPXGTYe5pjI/edit#gid=0)
&nbsp;

## What is going on in this course?

&nbsp;
#### What is *'from foundations'*?

1) Recreate fast.ai and Pytorch

2) using pure python
&nbsp;
#### Evade Overfitting 

Overfit : validation error getting worse
~training loss < validation loss~
&nbsp;
#### Know the name of the symbol you use

find in this page if you don't know the symbol that you are using[](https://en.wikipedia.org/wiki/List_of_mathematical_symbols) or just draw it [here](http://detexify.kirelabs.org/classify.html) (run by ML!) 

#### Steps to a basic modern CNN model

> 1) Matrix multiplication -> 2) Relu/Initialization -> 3) Fully-connected Forward
-> 4) Fully-connected Backward -> 5) Train loop -> 6) Convolution-> 7) Optimization ->
8) Batchnormalization -> 9) Resnet

#### Today's implementation goal: 1) matmul -> 4) FC backward

&nbsp;

### 2) Library development using jupyter notebook

https://dbader.org/blog/python-assert-tutorial
&nbsp;
#### jupyter notebook certainly can make module

There will be *#export* tag that Howard want to extract&nbsp;
and special program *notebook2script.py* will put codes of following *#expert* into python module
&nbsp;
#### 2 Python scripts, which are *run\_notebook* and *notebook\_to\_script*

where should i stop? 

what is **run_notebook.py**? Dose it related to with order of

	test -> test01 
	test01 -> test

..?	 -> In any case, two of them are Assertion error, so replication of assersion error apears.
&nbsp;
#### [Python Fire](https://opensource.googleblog.com/2017/03/python-fire-command-line.html)
in *run_notebook.py*

read and run the code in a notebook, and in the process, Jeremy used library called !Fire!, which takes any kind of function and converts into CLI.

*fire library was released by Google open source, Thursday, March 2, 2017*

&nbsp;
### 3) Get data

- c explains how many pixels there are in in MNIST
- PyTorch's *view()* method: used in conjunction with other neural network components.
- In part 1, you can use view function several times.
&nbsp;

### 4) Linear Model, Xw+a = Y

- If you don't know hou [matmul visulization site](http://matrixmultiplication.xyz)

weights, bias
