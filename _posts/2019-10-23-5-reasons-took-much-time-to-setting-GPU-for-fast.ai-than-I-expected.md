---
layout: post
title: "5 reasons took much time to setting GPU for fast.ai than I expected"
author: dionne
categories: [ Resource ]
image: /assets/images/asia-east1.png
tags: [sticky]
---

## Motivation

Before now, me as a undergraduate student, I was parsimony who usually depend on colab, kaggle, friend's server(occasional) whenever i need GPU..&nbsp;
&nbsp;
And this time it's been for a while to install GPU than I expected and I share the several component that stood in my way.&nbsp;
&nbsp;
**<span style="color:red">Written at Oct 24 2019, if you think this is deprecated, please do not have a leap of faith.</span>**
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### 1. Did not know there is *JupyterLab* in **Google Cloud Platform**.



At the first time when GCP came out, there was no **AI  Platform** service. So from starting vm instance to launching jupyter and installing packages, I did all of the things myself. (but I learned 🤗)


![installing-conda-cli](/assets/images/installing-conda-cli.png)


	$	curl -O https://repo.continuum.io/archive/Anaconda3-5.0.1-Linux-x86_64.sh

<p align="center">[Downloading conda in ssh]</p>

&nbsp;
I created VM instance,selected zone, machine type and disk type. Then, define firewall rules and in ssh terminal, install jupyter and other packages.




But you can do all of these things AI Platform.


![installing-conda-cli](assets/images/AI.png)
<p align="center">[AI Platform]</p>



I think if you are at Asia-Pacific, it can save your time.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
### 2. Consider if the platform has limited resources in a region you live in.
&nbsp;
I live in *South Korea, East Asia*, and it seems like this region has lots of limitation in GPU (except quite expensive AWS).

&nbsp;
And the Taiwan which was the only one region where I can launch my own VM with GPU (I tried all the other regions in the list) sometimes do normaly, but not always. 😥

&nbsp;
After launching, I did several works and next day I could not start VM. (I didn't count it, but tried it a few hours because I didn't want cost any more time...)

&nbsp;
Endlessly failed to start instance, then I choose to move AWS as an alternative way.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
### 3. <span style="color:blue">Fast.ai gives deliberate [guide](https://course.fast.ai/start_gcp.html) and I didn't know it.</span>
&nbsp;
Fast.ai offer the guide for all available platform. (Colab, salamander, Gradient, Kaggle, Colab, and so on) 

&nbsp;
It is so important, and really needs, because cloud computing options are vary as occasion and purpose arise.

&nbsp;
I didn't know fast.ai has manual to running GCP, and I think it's as good a reason as any for me to be have taken time.

&nbsp;
It helped me so much when I had aws and shortened time.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
### 4. You should wait to add more volume just after add volume, by building AWS EC2.
&nbsp;
Since Elastic Block Store(EBS) storage supports optimized storage, users can't extend storage volume two times in a row. 

&nbsp;
Unfortunately, at the first time, I didn't know it (again 👻) and when VM lacked volume, I doubled dist capacity (76*2) at a rough but It needs more.


&nbsp;

<!--# TODO

그냥 더 추가하면 되겠지라고생각했으나 optimizing 중입니다.. 안됩니다 라고 했따 ㅠ
맨 위에 내가 뭘 뭘 해봤던 사람인지  적기. 저기 적힌 것중엔 Kaggle, Golab, google colud, Azure, amazon ec2가 있군.-->

<!--

this time I installed GPU in two years, and it became little complicated compared to 2 years ago.
And this time for the first time(maybe not the first time.. but i handled it in my class or with my friend. but it's my first time on my own.) I 
very I'm started to using used google colab, kaggle
and, GCP-JupyterLab, ec2 - friend made, 
aws vm machine but I had a environment variable but i did not know of it.
On these days, I could not get a resources from taiwan... 

3. I couldn't notice a deliberate 

4. Anyway, as a result I tried myself gcp myself and aws ec2 with fast.ai But I think doing on my self surely takes much time (in this point I wonder why I'm doing this, and should remind me, especially I was studying disk volume optimization)

4. disk volume exceed - https://askubuntu.com/questions/919748/no-space-left-on-device-even-though-there-is
-->