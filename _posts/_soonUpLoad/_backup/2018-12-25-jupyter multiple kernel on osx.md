---

layout: post
title: "mac jupyter setting"
date: 2018-12-25 12:00:00
description: jupyter multiple kernel on osx
tags: [brew, mac terminal(iterm)]

---

* 개인적으로 jupyter가 날아가서 재설치 하는 과정을 기록한 글
* python version 3.7 to 3.6, brew로 재설치
mac jupyter restart

1. which -a python
	whereis python
2. install xcode or osx-gcc at terminal

3. i am new at using homebrew
[This contains my questions well](https://stackoverflow.com/questions/35337601/why-is-there-a-usr-local-opt-directory-created-by-homebrew-and-should-i-use-it?rq=1)
- /usr/local/Cellar
- /usr/local/include
- /usr/local/bin
- /usr/local/lib
- /usr/local/opt
- /usr/bin/

4. i have to unlink python3.7 installed by brew
	-> brew unlink python

5. save document which is related to your symlink
	- if you want to get back to python 3.7.0
	- brew switch python 3.7.0
	- brew switch python 3.6.5_1

6. if you want environment variable to your .bash
	- upgrade pip3
	- in my case, upgraded pip

7. pip install -U jupyter --user
	- --user means you gave permission

	- /Users/hapkim/Library/Python/3.6/lib/python/site-packages/jupyter-1.0.0.dist-info/*
    - /Users/hapkim/Library/Python/3.6/lib/python/site-packages/jupyter.py

---

8. failed to setting symlink, so just downloaded anaconda
and linked jupyter kernelspec to anaconda python

9. 기존에 내게 python 3.7이 있던 곳: /Users/hapkim/Library/Jupyter/kernels/python3/kernel.json
	다중 커널 위치 : /Users/hapkim/Library/Jupyter/kernels/