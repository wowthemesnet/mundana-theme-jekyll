---
layout: post
title: "Making a classifier with gooogle img (Cebu / Munich / Seoul)"
author: dionne
categories: [Fast.AI-v3]
image: assets/images/munich2.jpg
tags: [ featured ]
---

This toy project code can be found [here](https://github.com/SpellOnYou/dlff-note/blob/master/nbs/dl1/lesson2_download_practice.ipynb)

Making a classifier which can distinguish <span style="color: red">Seoul</span> from <span style="color: red">Munich</span> and <span style="color: red">Cebu</span>!
(hoping my well in Munich!🤟, and I love Cebu)


### CONTENTS
{: .no_toc}

- Creating dataset from google images(#creating-dataset-from-google-images)
{:toc}

### 1. Creating dataset from google images

You can use either URLs or `google_images_download` package. Since [Jeremy explained specifically](), I will try the other.

#### 1.1 Using `google_images_download`

note: *This is not google official package* <br />

Refer to [Official Doncument](https://google-images-download.readthedocs.io/en/latest/index.html), put the required args.

~~~python
from google_images_download import google_images_download

response = google_images_download.googleimagesdownload()   #class instantiation
out_dir = os.path.abspath('../../materials/dataset/pkg/')
os.mkdir(out_dir)
arguments = {"keywords":"Cebu,Munich,Seoul",
             "print_urls":True,
             "suffix_keywords":"city",
             "output_directory":out_dir,
             "type":"photo",
            }
paths = response.download(arguments)   #passing the arguments to the function
print(paths)
~~~

<!-- made and compared classifier,
to qualify data from `google_images_download`(using pkg, just used selenium....main code [here](https://github.com/hardikvasa/google-images-download/blob/master/google_images_download/google_images_download.py)) and google image download (using Google Image search) -->

#### 1.3 Create ImageDataBunch

We need to separate validation set because we just *grabbed* these imagese from Google.<br /> Most of the dataset we use (kaggle/research) splited into validation / test / train.<br /> Jeremy recommended assign 20% to validation.<br />
Before we split the data, we can remove downloaded image which can't be opened. and that uses fast.ai function.<br />

~~~python
Help on function verify_images in module fastai.vision.data:

verify_images(path: Union[pathlib.Path, str], delete: bool = True, max_workers: int = 4, max_size: int = None, recurse: bool = False, dest: Union[pathlib.Path, str] = '.', n_channels: int = 3, interp=2, ext: str = None, img_format: str = None, resume: bool = None, **kwargs)
    Check if the images in `path` aren't broken, maybe resize them and copy it in `dest`.
~~~


Data from **google image url**

![](/assets/images/02-url.png)

Data from **package**

![](/assets/images/02-pkg.png)

### 2. Train model

|---+---+---+---|
| | len(class)|len(train)|len(valid)|
|:----:|:----:|:----:|:----:|
|Data_url |   3 | 432 | 108 |
|Data_pkg |   3 | 216 | 53 |

<br />
Uisng model: **restnet34** [^2] , Measurement: **accuracy** [^3]

#### 2.3 fit_one_cycle()

~~~python
Help on method fit_one_cycle in module fastai.train:

fit_one_cycle(cyc_len: int, max_lr: Union[float, Collection[float], slice] = slice(None, 0.003, None), moms: Tuple[float, float] = (0.95, 0.85), div_factor: float = 25.0, pct_start: float = 0.3, final_div: float = None, wd: float = None, callbacks: Union[Collection[fastai.callback.Callback], NoneType] = None, tot_epochs: int = None, start_epoch: int = None) -> None method of fastai.basic_train.Learner instance
    Fit a model following the 1cycle policy.
~~~

|---+---+---+---+---|
|   epoch  |  train_loss  |  valid_loss  | error_rate | time |
|:----|:----:|:----:|:----:|:----:|
|0 |  1.964414 | 1.207057 | 0.583333 | 00:04|
|1 |  1.722742 | 1.476875 | 0.481481 | 00:02|
|2 |  1.541905 | 1.656574 | 0.537037 | 00:02|
|3 |  1.442706 | 1.680708 | 0.546296 | 00:02|

<br />

|---+---+---+---+---|
|   epoch  |  train_loss  |  valid_loss  | error_rate | time |
|:----|:----:|:----:|:----:|:----:|
|0  | 2.334755 |   1.945266 |   0.566038 |   00:02|
|1  | 1.751931 |   1.366638 |   0.415094 |   00:01|
|2  | 1.527215 |   1.165065 |   0.396226 |   00:01|
|3  | 1.317051 |   1.108083 |   0.339623 |   00:01|

#### 2.4 find_rl()

This section you should find the strongest downward slope that kind of sticking around for quite a while.

(to be continued to the other lectures)


### 3. Interpretation
### 4. Cleaning Up
### 5. Putting your model in production

---

### Reference
{: .no_toc}
    

[How to create a deep learning dataset using Google Images](https://www.pyimagesearch.com/2017/12/04/how-to-create-a-deep-learning-dataset-using-google-images/)

[^2]: [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385)

[^3]: [Accuracy_and_precision](https://en.wikipedia.org/wiki/Accuracy_and_precision)