---
layout: post
title: "fast.ai lesson08"
author: dionne
categories: [Fast.AI-v3]
image: assets/images/cnn-jiwon.png
tags: [ feature ]
---

This is the part of Journey which Jeremy recommended us to do.
One of the concepts I have to know.

1) Kaiming Initializtion in Pytorch was in trouble.[^1]
2) Jeremy started to dig in, in lesson09, but I didn't know why the size of tensor is [^5x5x5] and even understand this spreadsheet data.[^conv]

---

#### Homework
{: .no_toc}

Read [Visualizing and Understanding Convolutional Networks
](https://arxiv.org/pdf/1311.2901.pdf) paper

---

- [What is a convolution?](#what-is-a-convolution?)
{:toc}

### What is a convolution?

A convolutional neural network is that your red, green, and blue pixels go into the simple computation, and something comes out of that, and then the result of that goes into a second layer, and the result of that goes into the third layer and so forth. 

#### Visualization

##### one kernel 

- Refer this [site](http://setosa.io/ev/image-kernels/) for visualizing CNN filtering


##### Matthew D Zeiler & Rob Fergus Paper

[Lecture01](https://youtu.be/BWWm4AzsdLk?t=4588)

![](/assets/images/cnn-nine.png){align-items: center;}

- nine examples of the actual coefficients from the **first layer**.

#### Convolution can be represented as matmul

[CNNs from different viewpoints](https://medium.com/impactai/cnns-from-different-viewpoints-fab7f52d159c)

![](/assets/images/cnn-result.png){align-items: center;}

![](/assets/images/cnn-result2.jpg){:height="50%" width="50%"}

- [A B C D E F G H I J] is 3 by 3 image data flatten to vector.

- As a result, convolution is a just matrix just two things happens
    + Some of entries are set to zeros at all the times
    + same color always have the same weight. That called **weight time / wegith sharing**

- So, we can implement a convolution with matrix multiplication. But, we don't do that because it's slow!

#### Padding

- What most of libraries do is just put zeros asdie of matrix 

![](/assets/images/padding2.png){:height="50%" width="50%"}

![](/assets/images/padding.png){:height="60%" width="60%"}

- fast.ai uses reflection paddings (what is this? Jeremy said he uttered it)

#### Kernel has rank 3

- As standard picture input would be [^RGB] [^2], it would be actually 3d, not 2d.
- If we make kernel as a 3x3 size, we pass over same kernel all the different Red, Green, Blue Pixels.
    + This could make problem, because, if we want to detect frog, which is green, we would want more activations on the green(I made a test cell in my colab [^3])

#### How can we find a side-edge, a gradient and area of constant weight?

Not top-edge!

- One kernel can find only the top-edge, so we should stack the kernels [^5]
- So, we pass it through bunch of kernels to the input images, and that process gives us height x width x corresponding number of kernels.

![](/aassets/images/tensors.png)

- Usually that number of chanel is 16
- And if we want to get the more channels and features, we should repeat that process
    + This process gives rise to memory out of control, we do the **stride**


####

[conv-example.xlsx](https://www.youtube.com/watch?v=V2h3IOBDvrA)

- 2 convolutional filters
- At a second layer, filter is 3x3x2 tensor, because to add up together the first layer's channel.

<!-- Actually, what I wanted to know part :  -->

----

### Reference
{: .no_toc}

[^1]: Problem was *math.sqrt(5)* was not kaiming initialization formula, [Implementation in Pytorch](https://github.com/pytorch/pytorch/blob/3df79f403e8b9621d5adb0447266becd10d633b0/torch/nn/modules/linear.py#L58-L63)

[^5x5x5]: [size of tensor, lecture09](https://youtu.be/AcA8HAYh7IE?list=PLBRuZVGXwM3l2HesxBCrvwYacG1AWrVmM&t=251)

[^conv]: [conv-example.xlsx](https://github.com/fastai/course-v3/blob/bc034b471d839bdf5bc72bd7fec1061fac648ccd/files/xl/conv-example.xlsx)


[^RGB]: [Why do computer use red, green and blue instead of primary colors](https://www.quora.com/Why-do-computers-use-red-green-and-blue-instead-of-the-primary-colors)

[^2]: Grayscale is a group of shades without any visible color. ... Each of these dots has its own brightness level as well and, therefore, can be converted to grayscale. A grayscale image is one with all color information removed.

[^3]: [Testing RGB and grayscale](https://brohrer.github.io/convert_rgb_to_grayscale.html)

[^5]: [stack kernel and make new rank of tensor at output, Lesson06-2019](https://youtu.be/hkBa9pU-H48?t=4937)