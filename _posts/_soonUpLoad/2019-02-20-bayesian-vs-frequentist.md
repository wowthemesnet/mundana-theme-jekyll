---
layout: post
title: Bayesian vs Frequentist
modified: 2019-03-10
categories: [Bayesian]
tags: 

comments: true
---

Bayesian's inference

--------
Prior $$P(loaded)=.6$$

$$f(\theta | x) = \frac{f(x|\theta)f(\theta)}{\sum_{\theta}{f(x|\theta)f(\theta)} }$$

$$= {5 \choose x} []$$



Binomial theorem/Users/hapkim/Desktop/SpellOnYou.github.io/_posts/2018-11-05-title.md

----------------
$$ (x+y)^n = \sum_{k=0}^n {n \choose k} x^{n - k} y^k $$

Exponential function

--------------------
$$ e^x = \lim_{n \to \infty} \left( 1+ \frac{x}{n} \right)^n $$

Cauchy&ndash;Schwarz inequality

-------------------------------
$$
    \left( \sum_{k=1}^n a_k b_k \right)^2 \leq
    \left( \sum_{k=1}^n a_k^2 \right)
    \left( \sum_{k=1}^n b_k^2 \right)
$$

Bayes' theorem

--------------
$$ P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)} $$

Indicator Function of frequentist's inference

------------

The MLE is the $\theta$ (coin, either fair of loaded) for which observing two heads in five flips is most likely.

We compare the likelihood of observing X=2 under both scenarios, and find that the likelihood is highest for the fair coin.

