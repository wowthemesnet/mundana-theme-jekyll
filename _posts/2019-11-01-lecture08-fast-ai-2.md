---
layout: post
title: "Lecture 08 - Deep Learning From Foundations-part2"
author: dionne
categories: [fast.ai-v3]
image: assets/images/cnn.png
---

#### Frobenius norm

$ \| A \|_F = \left( \sum_{i,j=1}^n | a_{ij} |^2 \right)^{1/2} $ &nbsp;

- above converted into &nbsp; 

<code>(m\*m).sum().sqrt()</code>&nbsp;
- Plus, don't suffer from mathmatical symbols. He also copy and paste that equations from wikipedia.
- and if you need latex form, download it from archive.

###### What is the meaning of elementwise?
- We do not calculate each component. But all of the component at once. Because, length of column of A and row of B are fixed.

#### How much time we saved?

So now that takes 1.45ms. We have removed one line of code and it is a 178 times faster...

<code>%timeit -n 10 _=matmul(m1,m2)</code>
 1.45 ms ± 353 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)

<code>890.1/5</code>
 > 178.02

\#TODO
I don't know where the `5` from. but keep it.
Maybe this is related with frobenius norm...?
&nbsp;&nbsp;
as a result, **the code before**&nbsp;
&nbsp;
`for k in range(ac):
    c[i,j] += a[i,k] + b[k,j]`

the code after&nbsp;
&nbsp;&nbsp;

`c[i,j] = (a[i,:] * b[:,j]).sum()`
&nbsp;&nbsp;&nbsp;

so we multiplied row of A and column of b, and that gives us back a rank one tensor, which we add up.

To test it we will write another function to compare matrices. The reason for this is that due to rounding errors from math operations, matrices may not be exactly the same. As a result, we want a function that will "is a equal to b within **some tolerance**”




`\#export
def near(a,b): 
    return torch.allclose(a, b, rtol=1e-3, atol=1e-5)

def test_near(a,b): 
    test(a,b,near)`

    

### Reference

- [TensorRank](http://mathworld.wolfram.com/TensorRank.html)
- [ti note](https://forums.fast.ai/t/forum-markdown-notes-lesson-8/41896)