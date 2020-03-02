---
layout: post
title: "Fine Grained Classification"
author: dionne
categories: [Fast.AI-v3]
image: assets/images/1-visual-cnn.png
tags: []
---

Finally you can solve the mystery behind this weird drawing.. through this course.<br />

#### juptyer notebook magic

~~~python
%reload_ext autoreload
%autoreload 2
%matplotlib inline
~~~

this is special directives to jupyter notebook, not python code.
And it is called ‘magics’ (but i think jeremy is magicion)

* If somebody changes underlying library code while I'm running this, please reload it automatically
* If somebody asks to plot something, then please plot it here in this Jupyter Notebook

**Don't hesitate to import start~**

#### Digging into `untar_data`, `path.ls`

Union[pathlib.Path, str]: typed programming language? -> maybe i think disclaim the type beforehand for sure.

> Q. like assert?

~~~python
path.ls()
~~~
this is some module that fast.ai made because os.listdir('path') is unconvinient.

#### Python3 pathlib library!

[pathlib](https://docs.python.org/3/library/pathlib.html)
