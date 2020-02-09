---
layout: post
title: "fast.ai lesson03"
author: dionne
categories: [Fast.AI-v3]
image: assets/images/lesson03-1.png
tags: [ featured ]
---

### CONTENTS
{: .no_toc}

- [Unet](unet)
- [What is fit_one_cycle](what-is-fit_one_cyle)
{:toc}

### Unet

[Unet model](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)

### What is fit_one_cycle

First increase the lr, then decrease it

- Why fit_one_cycle is good for learning?

⭐️ When you increase the learning rate, it's easy to explore whole area and find the place which is not bumpy, so it train faster and can generalize well

###  `Min numerical gradient` vs `Min loss divided by 10`

- which learning rate is better?

### what should I do if run out of memory?

- Restart the kernel
- If you want to be able to do more without needing to restart your notebook
    * [Learner.destroy](https://docs.fast.ai/basic_train.html#Learner.destroy)
        > Free the Learner internals, leaving just an empty shell that consumes no memory
        > If you need to free the memory consumed by the Learner object, call this method.
        > It can also be automatically invoked through Learner.export via its destroy=True argument.
- Mixed precision training