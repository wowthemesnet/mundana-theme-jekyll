---
layout: post
title: "fast.ai lesson03"
author: dionne
categories: [Fast.AI-v3]
image: assets/images/lesson03-1.png
tags: [  ]
---

### CONTENTS
{: .no_toc}

- [Unet](unet)
{:toc}


### Unet

[Unet model](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)
- similar with convolutional auto-encoder
- but Unet has connection between symmetry element when max-pooling.

Q. what kind of connection does it have? weight sharing?

### freeze/unfreeze, what should I choose as learning rate?

[youtube](https://youtu.be/PW2HKkzdkKY?t=2964)

### What is fit_one_cycle

~~~python
recorder.plot_losses() #show you loss depends on time
recorder.plot_lr() #show you lr chnange depends on time (on epoch)
~~~

When you visualize these it seems like this. (errors go up and down)

![](/assets/images/one_cycle_structure.jpeg)

Then why error does not go down at the first time?

- Why fit_one_cycle is good for learning?

![](/assets/images/one_cycle_fit_process.jpeg)

⭐️ When you increase the learning rate, it's easy to explore whole area and find the place which is not bumpy, so it train faster and can generalize well

* refer [this site](https://nbviewer.jupyter.org/gist/joshfp/85d96f07aaa5f4d2c9eb47956ccdcc88/lesson2-sgd-in-action.ipynb#)

### what should we do when `underfitting`

1) train longer
2) train last bit at a lower learning rate
3) decrease learning rate
    - weight decay
    - drop out
    - data-augmentation

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