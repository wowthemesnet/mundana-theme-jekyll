

the plot top losses from last time where we saw the images which it was either the *most wrong* about or *the least confident* about.

> Q. how can i metric this?

## Note 02

### model training

    np.randon.seed(0)


Randomness part is so important, cz you have to always have same validation set.<br />
Otherwise, when you somewhat way improved your model and test it through validation, if not the same validation, you don't know performance improvement was just coincidence. <br />

[How and why to create a good validation set](https://www.fast.ai/2017/11/13/validation-sets/)

- Training a Model

After making some progress with my model and things are looking good, you'd better save model, and just go back to do that again.<br />

~~~python
learn.save('model-name')
learn.unfreeze()
learn.lr_find()
~~~

This learning rate finder, what you are looking for is **the strongest downward slope** that kind of **sticking around for quite a while**

|   epoch  |  train_loss  |  valid_loss  | error_rate | time |

|0  | 2.334755 |   1.945266 |   0.566038 |   00:02|
|1  | 1.751931 |   1.366638 |   0.415094 |   00:01|
|2  | 1.527215 |   1.165065 |   0.396226 |   00:01|
|3  | 1.317051 |   1.108083 |   0.339623 |   00:01|

1) Learning rate too high 
+ validation loss is too high

|---+---+---+---+---|
|epoch  | train_loss | valid_loss | error_rate | time
|:----|:----:|:----:|:----:|:----:|
|0 | 24.904537 | 1184996224.000000 | 0.638889 |  00:02|


2) Learning rate too low
+ going sooo slowly
+ training loss is bigger than valid loss.. 


Total time: 00:57

|---+---+---+---+---|
|epoch | train_loss |  valid_loss | error_rate | time |
|:----|:----:|:----:|:----:|:----:|
|0 | 2.066052 |  1.419399 |  0.657407 |  00:02|
|1 | 2.000881 |  1.309587 |  0.583333 |  00:02|
|2 | 1.975891 |  1.307033 |  0.611111 |  00:02|
|3 | 1.971937 |  1.321390 |  0.620370 |  00:02|
|4 | 1.989848 |  1.324367 |  0.648148 |  00:02|



3) Too few epochs
+ It looks very similar with too low learning rate. cz train_loss > valid_loss


|---+---+---+---+---|
|epoch | train_loss |  valid_loss | error_rate | time |
|:----|:----:|:----:|:----:|:----:|
|0 | 1.971861 |  2.014095 |  0.666667 |  00:02|


4) Too many epochs(Overfitting)
+ Error starts to getting worse (~~train_loss is below valid_loss!~~)

|---+---+---+---+---|
|epoch | train_loss |  valid_loss | error_rate | time |
|:----|:----:|:----:|:----:|:----:|
|0 | 1.210596 | 1.382731 |  0.662551 |  00:03|
|1 | 1.249473 |  1.378071 |  0.664609 |  00:01|
|2 | 1.353912 |  1.379399 |  0.681070 |  00:01|
|3 | 1.380415 |  1.374326 |  0.664609 |  00:01|
|4 | 1.434192 |  1.364526 |  0.668724 |  00:01|
|5 | 1.373436 |  1.344376 |  0.652263 |  00:01|
|6 | 1.361475 |  1.332394 |  0.658436 |  00:01|
|7 | 1.320753 |  1.319983 |  0.658436 |  00:01|
|8 | 1.251119 |  1.319813 |  0.644033 |  00:01|
|9 | 1.168801 |  1.317544 |  0.639918 |  00:01|
|10 | 1.093846 |  1.320713 |  0.631687 |  00:01|
|11 | 1.022894 |  1.326572 |  0.621399 |  00:01|
|12 | 0.965844 |  1.331126 |  0.613169 |  00:01|
|13 | 0.912769 |  1.343037 |  0.596708 |  00:01|
|14 | 0.861060 |  1.345426 |  0.590535 |  00:01|
|15 | 0.813022 |  1.361557 |  0.588477 |  00:01|
|16 | 0.767651 |  1.383104 |  0.586420 |  00:01|
|17 | 0.724640 |  1.393675 |  0.580247 |  00:01|
|18 | 0.690126 |  1.409444 |  0.572016 |  00:01|
|19 | 0.653082 |  1.435116 |  0.567901 |  00:01|
|20 | 0.621761 |  1.462591 |  0.567901 |  00:01|
|21 | 0.592183 |  1.482403 |  0.561728 |  00:01|
|22 | 0.565874 |  1.513805 |  0.561728 |  00:01|
|23 | 0.543868 |  1.524467 |  0.561728 |  00:01|
|24 | 0.517352 |  1.531876 |  0.551440 |  00:01|
|25 | 0.494798 |  1.557277 |  0.551440 |  00:01|
|26 | 0.474295 |  1.572760 |  0.549383 |  00:01|
|27 | 0.455998 |  1.580956 |  0.553498 |  00:01|
|28 | 0.436313 |  1.592865 |  0.553498 |  00:01|
|29 | 0.419034 |  1.604895 |  0.549383 |  00:01|
|30 | 0.402253 |  1.612062 |  0.553498 |  00:01|
|31 | 0.389492 |  1.626179 |  0.553498 |  00:01|
|32 | 0.374585 |  1.629149 |  0.553498 |  00:01|
|33 | 0.361202 |  1.643487 |  0.557613 |  00:01|
|34 | 0.348479 |  1.648011 |  0.553498 |  00:01|
|35 | 0.338784 |  1.657931 |  0.551440 |  00:01|
|36 | 0.328609 |  1.667504 |  0.551440 |  00:01|
|37 | 0.317876 |  1.679011 |  0.553498 |  00:01|
|38 | 0.307848 |  1.681451 |  0.553498 |  00:01|
|39 | 0.297073 |  1.676460 |  0.549383 |  00:01|



### Digging into the math

![](https://miro.medium.com/max/1162/1*zY1qFB9aFfZz66YxxoI2aw.gif) [^Adam-Geitgey]

- Predictors are functions of pixel values
- To feed an image into our neural network, we simply treat the 18x18 pixel image as an array of 324 numbers



$$y = ax + b \\y = a_1x + a_2*1 \\ y = a_1x_1 + a_2*x_2,\ x_2=1$$

This is one equation, but in ML, we have lots of equations. For example, if we want to represent the correlation of *the temperature*{: style="color: red"} versus *the number of ice creams sold*{: style="color: red"}, we have lots of dots.

![](/assets/images/1-part-dots.png){:height="60%" width="60%" style="vertical-align:middle"}

Each one of dots, hypothesis can be based on this formula : <script type="math/tex">y_i = a_1x_{i,1} + a_2x_{i,2}.</script>

![](/assets/images/1-part-lines.png){:height="60%" width="60%" style="vertical-align:middle"}

Let's view in matrix. <br />
If this is multi-classification problem(ex: MNIST), a matrix **(2, 28)**{: style="color: blue"}

![](/assets/images/1-part-matrix.png){:height="60%" width="60%" style="vertical-align:middle"}

But why we represent <script type="math/tex">y = ax + b</script> to <script type="math/tex">y_i = a_1x_{i,1} + a_2x_{i,2}</script>??<br />
dot product{: style="color blue"} : But what you might remember from school is that when you've got two things being multiplied together, two things being multiplied together, then they get added up. [^today-word]

 If you do that for lots and lots of different numbers i, then that's called a matrix product. So in fact, this whole thing can be written like this:

$$\vec y = X \vec a$$

![](/assets/images/1-part-vector.png){:height="80%" width="80%" style="vertical-align:middle"}

※ We can easily understand through this why people tarnspose coefficient.

![](/assets/images/1-part-i_k.png){:height="80%" width="80%" style="vertical-align:middle"}


**Question01**: Can we have a definition of the error rate being discussed and how it is calculated? I assume it's cross validation error <br />
~~~python
error_rate??
~~~
and look at the source code, and it's 1 - accuracy.

    accuracy??

It is argmax.<br /> So we now know that means find out which particular thing it is,<br />and then look at how often that equals the target (i.e. the actual value) and take the mean.<br /> 

- what does that being applied to and always in fastai, metrics (i.e. the things that we pass in)?
    + validation set.
    + Any time you put a metric here, it'll be applied to the validation set because that's your best practice:
    + make sure that you're checking your performance on data that your model hasn't see

viewing source code in Ipynotebook source code(in github)

    doc(accuracy)

**Question02**: Why were you using 3e for your learning rates earlier? With 3e-5 and 3e-4 [59:11]?<br />
(1) We found that 3e-3 is just a really *good default learning rate*. It works most of the time for *your initial fine-tuning* before you **unfreeze**. <br /> (And then, I tend to kind of just multiply from there.) <br /> (2) So then the next stage, I will pick 10 times lower than that for the *second part* of the slice, and *whatever the LR finder found* for the first part of the slice. (The second part of the slice doesn't come from the LR finder. It's just a rule of thumb which is 10 times less than your first part which defaults to 3e-3, and then the first part of the slice is what comes out of the LR finder.)<br />

We'll be learning a lot more about these learning rate details both today and in the coming lessons.<br /> ★ But for now, all you need to remember is that your basic approach looks like this:

- learn.fit_one_cycle
    - Some number of epochs, I often pick 4
    - Some learning rate which defaults to 3e-3.( )I'll just type it up fully so you can see.)
- Then we unfreeze it.
- Then we learn some more.
- And so this is a bit where I just take whatever I did last time and divide it by 10.[stop_rl]
- Then I also write `slice` then I have to put one more number in here and that's the number I get from the learning rate finder a bit where it's got the strongest slope.[start_rl]

~~~python
    learn.fit_one_cycle(4, 3e-4) 
    learn.unfreeze()
~~~

    learn.fit_one_cycle(4, slice(xxx, 3e-3))

slice(xxx[start_rl]:from find_rl , 3e-4  [stop_rl]: 0.003 % 10)

**Question03**: When generating new image dataset, how do you know how many images are enough? What are ways to measure "enough"?<br />

Great question. Another possible problem you have is you don't have enough data. How do you know if you don't have enough data? Because you found a good learning rate (i.e. if you make it higher than it goes off into massive losses; if you make it lower, it goes really slowly) and then you train for such a long time that your error starts getting worse. So you know that you trained for long enough. And you're still not happy with the accuracy it's not good enough for the teddy bear cuddling level of safety you want. So if that happens, there's a number of things you can do and we'll learn pretty much all of them during this course but one of the easiest one is get more data. If you get more data, then you can train for longer, get a higher accuracy, lower error rate, without overfitting.
Unfortunately there is no shortcut. I wish there was. I wish there's some way to know ahead of time how much data you need. But I will say this most of the time, you need less data than you think. So organizations very commonly spend too much time gathering data, getting more data than it turned out they actually needed. So get a small amount first and see how you go.


#### Questions
- what is unfreeze?
- 


[^import-star]: [why-import-star-in-python-is-a-bad-idea](https://www.geeksforgeeks.org/why-import-star-in-python-is-a-bad-idea)

[^Adam-Geitgey]: [Deep learning and CNN](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721)

[^today-word]: But more to the point right now, it's going to make life much easier. Because I hate writing loops, I hate writing code, I just want the computer to do everything for me. And anytime you see this little i subscripts, that sounds like you're going to have to do loops and all kind of stuff.