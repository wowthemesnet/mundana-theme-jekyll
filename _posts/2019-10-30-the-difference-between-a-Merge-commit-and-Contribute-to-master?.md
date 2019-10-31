---
layout: post
title: "Why am I not listed as a contributor to a project that merged my PR?"
author: dionne
categories: [git]
image: assets/images/1.png
tags: [featured]
---

### How did I come to that repository?

When I'm stuck, I would prefer to code, than to go deep in theory. (It must be so.. too much to understand 🤒)&nbsp;
It was [BERT released by Google AI](https://arxiv.org/pdf/1810.04805.pdf) I felt keenly the necessity of implementing, because not only couldn't understand the way they figured out positional encoding formula, but how it actually works.&nbsp;What does it mean to "scale" dot product in Attention? (Now I know it's far from my section 😂)&nbsp;
![]("https://www.tensorflow.org/images/tutorials/transformer/scaled_attention")
<p style="text-align: center;">Figure 1. Scaled Dot Product. *Adopted from* [*tensorflow blog*](www.tensorflow.org)</p>&nbsp;

### What was the code error?

For implement code in paper, I read the papers [Transformer](https://arxiv.org/pdf/1706.03762.pdf) and [BERT](https://arxiv.org/pdf/1810.04805.pdf), structured the model, and refered the others' code.&nbsp;&nbsp;

Meanwhile, I found out a small error in tokenization process, which was changing a token into [MASK], enabled bidirectional representation.

### I've made PR, and got merged. But I was not in contributors. Why?

Actually I happened to know I was exception, after that I became curious.&nbsp;
So... Doesn't it means we can cover up someone's traces?&nbsp;
Did I something wrong?&nbsp;

![](/assets/images/2.png)

<p style="text-align: center;">Figure 2. Merged Pull request *Adopted from* [*graykode project*](https://github.com/graykode/nlp-tutorial/pull/9)</p>&nbsp;

According to [About pull request merges](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges) and [git](https://git-scm.com/docs/git-merge#_fast_forward_merge), it's because a person who has a write permission had selected squash (fast-forward) merge option on a pull request.&nbsp;
Since it dose fetch from the remote first and immediately execute <code>git merge</code> to create a merge commit, this option append a commit to master without creating a commit.


#### Reference

- [Michał Chromiak's blog](https://mchromiak.github.io/articles/2017/Sep/12/Transformer-Attention-is-all-you-need/)
- [Shing Lyu blog](https://shinglyu.com/web/2016/11/08/servo-rebase-and-squash-guide.html)
- [Git-docs](https://git-scm.com/docs/git-merge#_fast_forward_merge)
- [Github: why are my contributions are not showing on my profile](https://help.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile)
- [atlassian-gitfetch](https://www.atlassian.com/git/tutorials/syncing/git-fetch)


