---
layout: post
title: "[Answer] Tracking status of of learning"
author: dionne
categories: [ QnA ]
image: assets/images/answer.png
---

Most contents of this [QnA series](https://spellonyou.github.io/categories.html#qna) are based on my own trouble, curiosity and sometimes for reminding.</br>
But, if you discovered this article through organic search and If you got an adequate answer, I'd be very grad to help you.</br>
And also if someone knows the answer of [my questions](https://spellonyou.github.io/2020/12/answer-of-questions/), feel free to suggests me shortcuts.


Linguistics
---

### Q. Types of antonym 

studying augmentation like `rotate, flip, lighten`, why there is no option like darkening? -> type of antonym

related keywords: Semantics, Sematic fields(= meaning relations), Componential analysis [^1]

### A. 

(1) Gradable antonym: ***more or less*** relation

- ex) beautiful/ugly, expensive/cheap, hot/cold
- comparable

(2) contradictory / complementary antonym: ***either or not*** relation

- ex) awake/asleep, dead/alive, on/off, true/false
- The assertion of one implies the denial of the other member of the pair 

(3) converse: one expresses the converse meaning of the other

- ex) above/below, before/after, buy/sell, give/receive, woman/man
- reverse of an individual feature of a word give us the other member of the pair


### Q. What is the meaning of `a saturated neural network`

### A.

When the nonlinearity function gets the value near its boundary.<br/>
In this case, gradients are small so that we change little of the input.<br/>
-> This would not be a big deal if neurons are correct<br/>
-> but in other cases, this gives us a big problem.[^2]

Modern[^3] electronic circuit
---

### Q. OSX comsumes much cpu on `WindowServer`, `kerner_task`, `hidd`, `airportd` what's wrong with them?

1. **WindowServer** - Core part of MacOS, as for displaying application on my screen. -> so close the app/windows..(and find alternative if specific app is horrible)[^4]
2. **airportd** - related with network, ofcourse, there's no certain answer related to this. so I just removed lists of saved wifi. and unchecked *remember networks this computer has joined* 
3. **hidd** related to keyboard&mouse, you can kill using Activity Monitor. But if that persists, maybe it related with your third party input device(it was my case..), or softwares which enables you to customize keybindings.
4. **kernel_task** well, this was the most tricky thing. Because kernel is essential to any kind of os. Apple says it's okay (if it occupies much cpu even rather doing the job you ran...?) Because it's for managing your mac, and mainly to preventing from overheating... so... don't worry (or restart)

---

[^1]: H. Jackson and E. Amvela, *Words, Meaning and Vocabulary: An Introduction to Modern English Lexicology*, Bloomsbury Publishing, 2007.
[^2]: [Why would a saturated neurone be a problem?](https://www.quora.com/Why-would-a-saturated-neuron-be-a-problem)
[^3]: sorry if you felt uncomfortable as I'm using vague & subjective term
[^4]: More delicate explanation on [Apple Developer Documentation](https://developer.apple.com/library/archive/technotes/tn2083/_index.html#//apple_ref/doc/uid/DTS10003794-CH1-SUBSECTION14)