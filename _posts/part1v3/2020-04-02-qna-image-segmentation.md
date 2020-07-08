---
layout: post
title: "[Q&A] Image Segmentation, using Unet with Driving Video data"
author: dionne
categories: [fastai.v3]
image: assets/images/output_31_0.png
tags: [ featured ]
---

This post is about my questions while I was studying [USF Deep Learning course](https://www.usfca.edu/data-institute/certificates/deep-learning-part-one) about image segmentation task.<br/>
All the answers are from the course, source code, library document, or document. <br/>
I cared about being clear at reporting information including source of information, however if there are still anything unclear, please contact me.

And thank you Jeremy&Rachael for everything. Also Thank you Cambridge Computer Vision Lab to made us to study with your labor.

*The Cambridge-driving Labeled Video Database (CamVid) is the first collection of videos with object class semantic labels, complete with metadata. The database provides ground truth labels that associate each pixel with one of 32 semantic classes.*

If someone is interested in this project, please check [the site](http://mi.eng.cam.ac.uk/research/projects/VideoRec/CamVid/) and see the details.

Now, let's start first using jupyter's one of tricks which I love most. It enables cell to print the code without print function.

```python
from IPython.core.interactiveshell import InteractiveShell

# pretty print all cell's output and not just the last one
InteractiveShell.ast_node_interactivity = "all"
```

```python
from fastai.vision import *
from fastai.callbacks.hooks import *
from fastai.utils.mem import *
```


```python
path = untar_data(URLs.CAMVID) # The locations where the data and models are downloaded are set in config.yml
path.ls() 
```

I'm trying to accustomed to using `pathlib` module, not just it became built-in module in python, but I felt uncomfortable myself with os module. However, still unpredictable conflicts are remain, even in the quite standard library like Pytorch, tensorflow, onnx.(it require me string for path. not PosixPath. will send PR..)


    [PosixPath('/root/.fastai/data/camvid/valid.txt'),
     PosixPath('/root/.fastai/data/camvid/images'),
     PosixPath('/root/.fastai/data/camvid/labels'),
     PosixPath('/root/.fastai/data/camvid/codes.txt')]




```python
path_img = path/'images'
path_lbl = path/'labels'
fnames = get_image_files(path_img) #filename
lbl_names = get_image_files(path_lbl)
```



## 1.(Play with data) My Hypothesis
- File name has `A_B` format. and A / B would be at key-value position.
- Use `collections - defaultdict`
### Default Dict: [Link](https://docs.python.org/3.8/library/collections.html#defaultdict-objects)
- easy to group a sequence of key and value pairs into a dictionary of list?

```python
from collections import defaultdict
```


```python
fnames[0], lbl_names[0]
```




    (PosixPath('/root/.fastai/data/camvid/images/0001TP_009210.png'),
     PosixPath('/root/.fastai/data/camvid/labels/0016E5_01800_P.png'))




```python
files = [tuple(i.stem.split('_')) for i in fnames]
```


```python
labels = [tuple(i.stem.split('_')[:-1]) for i in lbl_names]
```


```python
d = defaultdict(list)
for k, v in files: d[k].append(v)
```


```python
d.keys()
len(d['0001TP'])
```




    124




```python
for k, v in d.items():
    print(k, v)
```

    0001TP ['009210', '008850', '007350', '008970', '009840', '010140', '008490', '008520', '009540', '008250', '008340', '006840', '007860', '007410', '007740', '009870', '010080', '007890', '008790', '010020', '008400', '007080', '008280', '010380', '009330', '009060', '007470', '006810', '009720', '008580', '007110', '008730', '009150', '007680', '009780', '007800', '007290', '008760', '009510', '008640', '008310', '007440', '006900', '007500', '008460', '009030', '008130', '009480', '009900', '010230', '009270', '008040', '007590', '007950', '009990', '008550', '007260', '008100', '007530', '006960', '008190', '009420', '009930', '009000', '007830', '008940', '006690', '009570', '008880', '010170', '007560', '009300', '006750', '009360', '010200', '007320', '008010', '009120', '007620', '007200', '007140', '010320', '006720', '008670', '007230', '008370', '010260', '009690', '006930', '009090', '007770', '010290', '010350', '008610', '008070', '009600', '008430', '009450', '007380', '009240', '007710', '007170', '008160', '008910', '007020', '006780', '007050', '009960', '009810', '008220', '009180', '009750', '010050', '009660', '010110', '007920', '009630', '007650', '006990', '008700', '009390', '007980', '008820', '006870']
    0016E5 ['01290', '08159', '05760', '08133', '08063', '06660', '00960', '05850', '00750', '06960', '08035', '08107', '07975', '08017', '05610', '07140', '08119', '08027', '07170', '08400', '08093', '02100', '06390', '04470', '08340', '06060', '00600', '07470', '08151', '07800', '01620', '05730', '01530', '00690', '08430', '05940', '01980', '07320', '08069', '07965', '04380', '05430', '01410', '06780', '08007', '08087', '08079', '06600', '08109', '05490', '00901', '04590', '04680', '08045', '01770', '06690', '08085', '06810', '00420', '08011', '07440', '02190', '06300', '04800', '01500', '00450', '08029', '01470', '06330', '07997', '08067', '05370', '08013', '08190', '00840', '02370', '08049', '08135', '01440', '06870', '05820', '05280', '08051', '04440', '08091', '01380', '00630', '07290', '05520', '04770', '00540', '07995', '07999', '05550', '07920', '08101', '08141', '08053', '04620', '08103', '05160', '07350', '08057', '06030', '06000', '08550', '07963', '08089', '05970', '08047', '05640', '06240', '05220', '04350', '01590', '07959', '01950', '08117', '06180', '01560', '05400', '08043', '07680', '00780', '08081', '07050', '01020', '01350', '04530', '06720', '07969', '08149', '08003', '08131', '08129', '08033', '05460', '01650', '07530', '08023', '05340', '08640', '05100', '08075', '01230', '04980', '02070', '01080', '06210', '05910', '08009', '01800', '05190', '02400', '08083', '08019', '07620', '07200', '07890', '08059', '06990', '04410', '08121', '08123', '06930', '08137', '08147', '08095', '06570', '06150', '08153', '06840', '05250', '00510', '08370', '08580', '08113', '07410', '08097', '01200', '04950', '07770', '07650', '04710', '06090', '08055', '07110', '07981', '00990', '08250', '08127', '01920', '07985', '08220', '08005', '08157', '05130', '08071', '01140', '04830', '07740', '08143', '06120', '02040', '08111', '08115', '00660', '08280', '06420', '07983', '02220', '05700', '01860', '01260', '04920', '06510', '07020', '08073', '08105', '08125', '06360', '07860', '07993', '00810', '06540', '08099', '08139', '02010', '07973', '08155', '07991', '06630', '00480', '06750', '04890', '08001', '08025', '00870', '08490', '01830', '07977', '05010', '01170', '07961', '01680', '01050', '07987', '07080', '04560', '00930', '05310', '02340', '05790', '08460', '00720', '08031', '02280', '08039', '08037', '08065', '06270', '08077', '06900', '04650', '06480', '07230', '08041', '06450', '00570', '07989', '04740', '07979', '02250', '07380', '00390', '01710', '07590', '08021', '08520', '07500', '01110', '04500', '02310', '07971', '02130', '05580', '05880', '08610', '08310', '08145', '05670', '04860', '07260', '08015', '07967', '01740', '01320', '07560', '07830', '01890', '08061', '02160', '07710', '05070', '05040']
    Seq05VD ['f00030', 'f02550', 'f03450', 'f01110', 'f00480', 'f00210', 'f04590', 'f04170', 'f01800', 'f03990', 'f03360', 'f03900', 'f02070', 'f00810', 'f03690', 'f01350', 'f01530', 'f04980', 'f05100', 'f03060', 'f00900', 'f03870', 'f02460', 'f01470', 'f02370', 'f02820', 'f04080', 'f02760', 'f04860', 'f02250', 'f04200', 'f00270', 'f03720', 'f02850', 'f04410', 'f01200', 'f03090', 'f02010', 'f03930', 'f00090', 'f01650', 'f01890', 'f03840', 'f03030', 'f02130', 'f01230', 'f04110', 'f02520', 'f04140', 'f04020', 'f00060', 'f03420', 'f01560', 'f00120', 'f04290', 'f02340', 'f00300', 'f01380', 'f00870', 'f01860', 'f02970', 'f04560', 'f02730', 'f00330', 'f04530', 'f03780', 'f01770', 'f03390', 'f05040', 'f02430', 'f03330', 'f00660', 'f01740', 'f02100', 'f04800', 'f04050', 'f00510', 'f02790', 'f04350', 'f00690', 'f00540', 'f02490', 'f00960', 'f00930', 'f04230', 'f02880', 'f03600', 'f01020', 'f01500', 'f02400', 'f04830', 'f04470', 'f03300', 'f02670', 'f00450', 'f01980', 'f01170', 'f01620', 'f04500', 'f01080', 'f03180', 'f05070', 'f03150', 'f04950', 'f01440', 'f03510', 'f01710', 'f00360', 'f04770', 'f02910', 'f01050', 'f00630', 'f04320', 'f00570', 'f03240', 'f02190', 'f01140', 'f03540', 'f02220', 'f02640', 'f03960', 'f00000', 'f04920', 'f01950', 'f00990', 'f03480', 'f03000', 'f00420', 'f04620', 'f03210', 'f00780', 'f03570', 'f01590', 'f00750', 'f01920', 'f04650', 'f03750', 'f03630', 'f02310', 'f02610', 'f02580', 'f04740', 'f02280', 'f04680', 'f00390', 'f00720', 'f03660', 'f02040', 'f03270', 'f00180', 'f03810', 'f01410', 'f01290', 'f03120', 'f00840', 'f04440', 'f00150', 'f01260', 'f02700', 'f02940', 'f00600', 'f01830', 'f04260', 'f05010', 'f04890', 'f02160', 'f00240', 'f04380', 'f01680', 'f04710', 'f01320']
    0006R0 ['f02820', 'f03690', 'f03180', 'f02550', 'f01020', 'f03660', 'f02340', 'f01170', 'f02610', 'f02940', 'f01290', 'f02100', 'f01350', 'f03270', 'f03870', 'f01380', 'f01980', 'f03810', 'f02430', 'f02310', 'f01830', 'f03480', 'f02970', 'f01890', 'f03210', 'f03930', 'f02040', 'f02070', 'f02400', 'f01560', 'f03030', 'f01770', 'f01590', 'f01950', 'f03420', 'f01650', 'f03450', 'f00990', 'f03630', 'f01500', 'f03570', 'f00930', 'f03090', 'f03360', 'f02880', 'f02460', 'f01440', 'f01920', 'f01230', 'f03840', 'f02730', 'f01620', 'f02220', 'f03750', 'f03330', 'f03540', 'f02520', 'f02790', 'f01050', 'f03120', 'f01800', 'f01140', 'f01860', 'f01530', 'f01470', 'f02670', 'f02490', 'f01260', 'f01110', 'f02760', 'f01680', 'f03150', 'f02580', 'f03300', 'f02280', 'f01200', 'f03390', 'f03510', 'f02640', 'f02190', 'f02370', 'f01320', 'f02130', 'f03600', 'f03240', 'f03780', 'f03720', 'f02700', 'f01410', 'f01080', 'f02850', 'f01710', 'f03900', 'f03060', 'f01740', 'f02010', 'f02250', 'f00960', 'f03000', 'f02160', 'f02910']



```python
for k, v in d.items():
    print(k, len(d[k]))
```

    0001TP 124
    0016E5 305
    Seq05VD 171
    0006R0 101



```python
for i in d2.keys():
    print(i,len(d2[i]))
```

    0016E5 305
    0001TP 124
    0006R0 101
    Seq05VD 171



```python
files[0], labels[0]
```




    (('0001TP', '009210'), ('0016E5', '01800'))



## 2.My question: [Link](https://docs.fast.ai/vision.image.html#ImageSegment)

* Why do we need masking? and does color from fastai library? (have to look into source code)
* What do the parameter alpha do?
* When people make masked img, would it be have ranged integer limit?
* Does image normalization related with this?


```python
lbl_sorted = sorted(lbl_names)
f_sorted = sorted(fnames)
```


```python
lbl_1 = lbl_sorted[33]
f_1 = f_sorted[33]
```


```python
img = open_image(lbl_1)
mask = open_mask(lbl_1)
_,axs = plt.subplots(1,2, figsize=(10,5))
# img.show(ax=axs[0], y=mask, title='masked')
img.show(ax=axs[0], title='1')
mask.show(ax=axs[1], title='2', alpha=1.)
```


![png](output_21_0.png)



```python
img_2 = open_image(f_1)
mask_2 = open_mask(f_1)
_,axs = plt.subplots(1,2, figsize=(10,5))
# img.show(ax=axs[0], y=mask, title='masked')
img_2.show(ax=axs[0], title='3',)
mask_2.show(ax=axs[1], title='4', alpha=1.)
```


![png](output_22_0.png)



```python
open_mask(lbl_1).data.shape
```




    torch.Size([1, 720, 960])




```python
open_mask(lbl_1).data.shape
```




    torch.Size([1, 720, 960])




```python
open_image(f_1).data.shape
```




    torch.Size([3, 720, 960])




```python
open_image(f_1).data.shape
```




    torch.Size([3, 720, 960])




```python
img.data #labeled data
```




    tensor([[[0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             [0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             [0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             ...,
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176],
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176],
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176]],
    
            [[0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             [0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             [0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             ...,
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176],
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176],
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176]],
    
            [[0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             [0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             [0.0157, 0.0157, 0.0157,  ..., 0.0824, 0.0824, 0.0824],
             ...,
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176],
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176],
             [0.0667, 0.0667, 0.0667,  ..., 0.1176, 0.1176, 0.1176]]])




```python
mask.data # after mask, labeled data
```




    tensor([[[ 4,  4,  4,  ..., 21, 21, 21],
             [ 4,  4,  4,  ..., 21, 21, 21],
             [ 4,  4,  4,  ..., 21, 21, 21],
             ...,
             [17, 17, 17,  ..., 30, 30, 30],
             [17, 17, 17,  ..., 30, 30, 30],
             [17, 17, 17,  ..., 30, 30, 30]]])




```python
img_2.data, mask_2.data
```




    (tensor([[[0.0706, 0.0667, 0.0706,  ..., 0.6431, 0.6549, 0.6627],
              [0.0745, 0.0706, 0.0706,  ..., 0.6431, 0.6510, 0.6549],
              [0.0784, 0.0706, 0.0745,  ..., 0.6392, 0.6588, 0.6588],
              ...,
              [0.0863, 0.0824, 0.0824,  ..., 0.1333, 0.1216, 0.1255],
              [0.0902, 0.0863, 0.0824,  ..., 0.1255, 0.1176, 0.1216],
              [0.0863, 0.0824, 0.0784,  ..., 0.1137, 0.1059, 0.1137]],
     
             [[0.0706, 0.0667, 0.0706,  ..., 0.7490, 0.7608, 0.7686],
              [0.0745, 0.0706, 0.0706,  ..., 0.7451, 0.7569, 0.7608],
              [0.0784, 0.0706, 0.0745,  ..., 0.7412, 0.7529, 0.7529],
              ...,
              [0.0980, 0.0941, 0.0941,  ..., 0.1804, 0.1686, 0.1725],
              [0.1059, 0.1020, 0.0980,  ..., 0.1725, 0.1647, 0.1686],
              [0.1020, 0.0980, 0.0941,  ..., 0.1608, 0.1529, 0.1608]],
     
             [[0.0784, 0.0745, 0.0784,  ..., 0.7569, 0.7686, 0.7765],
              [0.0824, 0.0784, 0.0784,  ..., 0.7647, 0.7647, 0.7686],
              [0.0784, 0.0706, 0.0745,  ..., 0.7608, 0.7647, 0.7647],
              ...,
              [0.1216, 0.1176, 0.1176,  ..., 0.2000, 0.1882, 0.1922],
              [0.1176, 0.1137, 0.1098,  ..., 0.1843, 0.1765, 0.1804],
              [0.1137, 0.1098, 0.1059,  ..., 0.1725, 0.1647, 0.1725]]]),
     tensor([[[ 18,  17,  18,  ..., 183, 186, 188],
              [ 19,  18,  18,  ..., 183, 185, 186],
              [ 20,  18,  19,  ..., 182, 185, 185],
              ...,
              [ 25,  24,  24,  ...,  43,  40,  41],
              [ 26,  25,  24,  ...,  41,  39,  40],
              [ 25,  24,  23,  ...,  38,  36,  38]]]))



## 3.What is a difference between image and imageSegment?

[imageSegment](https://docs.fast.ai/vision.image.html#ImageSegment)<br/>

- An ImageSegment object has the same properties as an Image. The only difference is that when applying the transformations to an ImageSegment, it will ignore the functions that deal with lighting and keep values of 0 and 1. 
- It's easy to show the segmentation mask over the associated Image by using the y argument of show_image.


```python
img = open_image(fnames[0])
mask = open_mask(lbl_names[0])
_,axs = plt.subplots(1,3, figsize=(8,4))
img.show(ax=axs[0], title='no mask')
img.show(ax=axs[1], y=mask, title='masked') #seg mask over the img using y arg
mask.show(ax=axs[2], title='mask only', alpha=1.)
```


![png](output_31_0.png)


[vision.image](https://docs.fast.ai/vision.image.html#ImageSegment)

##4.Why/How img div by 255 and how it results

[fast.ai : vision.image](https://docs.fast.ai/vision.image.html#open_image) - If div=True, pixel values are divided by 255. to become floats between 0. and 1.

- At times, you want to get rid of distortions caused by lights and shadows in an image. 
- Normalizing the RGB values of an image can at times be a simple and effective way of achieving this.

- So sum of the pixel's value over all channels(which is `S`) divides each intensified channel so that nomalized value will be `R/S`, `G/S` and `B/S` (where, S=R+G+B).

- [Detailed explain here](https://aishack.in/tutorials/normalized-rgb/)

## 4. Python [Evaluation Order](https://docs.python.org/3/reference/expressions.html#evaluation-order)


Python evaluates expressions from left to right. Notice that while evaluating an assignment, the right-hand side is evaluated before the left-hand side.


```python
mask_tmp, trg_tmp, void_tmp = 2, 1, 10
mask_tmp = trg_tmp != void_tmp
print(mask_tmp, trg_tmp, void_tmp) # (1) target is not same with void
```

    True 1 10



```python
# Example 1
x = 1
y = 2
x,y = y,x+y
x, y
```




    (2, 3)




```python
# Example 2

x = 1
y = 2
x = y
y = x+y
x, y
```




    (2, 4)



## 5. model learner parameter :: pct_start

A: Percentage of total number of epochs when learning rate rises during one cycle.
Q: Sorry, I still confused that one cycle in the new API only runs one epoch. How the percentage of total number of epochs works? Can you give a example? If learn.fit_one_cycle(10, slice(1e-4,1e-3,1e-2), pct_start=0.05)??
A: Ok, strictly correct answer would be percentage of iterations, so you can have lr both increase and decrease during same epoch. In your example, say, you have 100 iterations per epoch, then for half an epoch (0.05 * (10 * 100) = 50) lr will rise, then slowly decrease.

---

Q2: Thanks for this explanation … so essentially, it is the percentage of overall iterations where the LR is increasing, correct?

So, given the default of 0.3, it means that your LR is going up for 30% of your iterations and then decreasing over the last 70%.

Is that a correct summation of what is happening?

A2: Yes, I think that’s correct.

You can verify that by changing its value and check:
learn.recorder.plot_lr()

For example if pct_start = 0.2

![ScreenClip.png](attachment:ScreenClip.png)


source: [forums.fastai](https://forums.fast.ai/t/what-is-the-pct-start-mean/26168/10)
