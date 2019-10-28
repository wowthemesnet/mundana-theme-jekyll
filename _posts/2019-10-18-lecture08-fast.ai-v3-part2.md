---
layout: post
title: "Lecture 08 - Deep Learning From Foundations"
author: Dionne
categories: [fast.ai-v3]
image: assets/images/cnn.png
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
### Library development using jupyter notebook
https://dbader.org/blog/python-assert-tutorial
&nbsp;
#### jupyter notebook certainly can make module

- There will be *#export* tag that Howard (and we) want to extract
- special *notebook2script.py* will detect sign of *#expert* and convert following into python module
&nbsp;
- and test it


<code>	test\_eq(TEST,'test')&nbsp;test\_eq(TEST,'test1')</code>
	
- what is **run_notebook.py**?
	- when you want to test your module in command line interface

<code>		!python run\_notebook.py 01_matmul.ipynb</code>

- Is there any difference between 1) and 2)?

1) test -> test01 
2) test01 -> test

\#TODO I don't know yet

- look into *run_notebook.py*, package **fire** Jeremy used. What is that?


 
read and run the code in a notebook, and in the process, Jeremy made [Python Fire](https://opensource.googleblog.com/2017/03/python-fire-command-line.html) library called!shockingly, fire takes any kind of function and converts into CLI command.

*fire library was released by Google open source, Thursday, March 2, 2017*

&nbsp;

---
- notebook part2

### Get data

- tensor will almost function similar with numpy array
- c explains how many pixels there are in in MNIST, 28 pixels
- PyTorch's *view()* method: torch function that manipulating tensor, and squeeze() in torch & mathmatical operation similar function 
- [Rao & McMahan](https://www.oreilly.com/library/view/natural-language-processing/9781491978221/) said usually this functions result in feature vector.
- In part 1, you can use view function several times.
&nbsp;

### Initial python model 

- Which is Linear, like $Xw$(weight)$+a$(bias) $= Y$

- If you don't know hou to multiple matrix, refer this site [matmul visulization site](http://matrixmultiplication.xyz)

#### How many time spends if we we use pure python
- function <span style="color:blue">matmul</span>, typical matrix multiplication function, takes about 1 second for calculating 1 single train data! (maybe assumed stochastic, 5 data points in validation)



- it takes about 11.36 hours to update parameters even single layer and 1 iteration! (if that was my computer, it would be 14 hours..)🤪

- THIS is why we need to consider 'time'&'space'

> This is kinda slow - what if we could speed it up by 50,000 times? Let's try!

### Elementwise ops 

#### How can we make python faster?

- If we want to calculate faster, then do remove pythonic calcuation, by passing its computation down to something that is written something other than python, like pytorch. 
- According to PyTorch [doc](https://pytorch.org/cppdocs/#aten) it  uses C++ (via ATen), so we are going to implement that function with python.

#### What is element wise operation?
- items makes a pair, operate corresponding component

#### Frobenius norm

$ \| A \|_F = \left( \sum_{i,j=1}^n | a_{ij} |^2 \right)^{1/2} $

- above converted into 

<code>			(m*m).sum().sqrt()</code>

- Plus, don't suffer from mathmatical symbols. He also copy and paste that equations from wikipedia.
- and if you need latex form, download it from archive.
	
