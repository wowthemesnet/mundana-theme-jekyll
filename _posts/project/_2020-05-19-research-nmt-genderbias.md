---
layout: post
title: "Training  Neural Machine Translation with PyTorch"
author: dionne
categories: [ research ]
image: assets/images/att_00069.png
tags: [bias, NMT]
---

● This document is on editting

---

### Issue 1. understanding GPU memory usage

I'm stuck with this error while `finding learning rate`

~~~
RuntimeError: CUDA out of memory. Tried to allocate 10.33 GiB (GPU 0; 15.90 GiB total capacity; 1.56 GiB already allocated; 3.72 GiB free; 11.48 GiB reserved in total by PyTorch)
~~~

What I'm reading recently to get a solution

- Fastai Forums - NVIDIA context, pytorch memory allocator and caching, memory leaks, memory re-use and reclaim.
- Pytorch Forums - [Understanding GPU memory allocation according to training process](https://discuss.pytorch.org/t/high-gpu-memory-usage-problem/34694)

### Issue 2. Understanding `Dataloader`, `Data loader's'`, `Databunch`, `Dataset`