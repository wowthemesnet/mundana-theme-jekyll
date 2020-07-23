---
layout: post
title: "Sylvain Gugger at a joint NYC AI & ML x NYC PyTorch on 03/20/2019"
author: dionne
categories: [ fastai.v3]
image: assets/images/fastai/gate.png
tags: [ feature ]
---

Note from Sylvain Gugger's talk at a joint NYC AI & ML x NYC PyTorch on 03/20/2019. [Video](https://www.youtube.com/watch?v=roc-dOSeehM) / [Slide](https://drive.google.com/file/d/1eWWpyHeENyNNCVTtblX2Jm02WZWw-Kes/view)</br>

(*Sylvain's talk starts around 7m 30s)

* [What is callback?](#what-is-callback?)
{:toc}


## Why do we need to use callback?

Problem: There are *lots* of tweaks we can add to models. And that makes your code messy.

So, not editting the training code directly, we add `callback`s between every step. 

As a result, each callback could feed new strategy to training step, knowing what's happening all the other callbacks and training steps. That's what `CallbackHandler` does.

Then, you don't have to re-write every training loop whenever something new tweaks came out.

Things callback can do: updates new value, flags and stop training.

![](/assets/images/fastai/sylvain-pytorch.png)

## How to build a flexible callback?

Each new tweaks can be written as one individual callback.

### Case Study 1. Mixed Precision 

If you can represent process as diagram, callbacks became easier.

### Case Study 2. GAN