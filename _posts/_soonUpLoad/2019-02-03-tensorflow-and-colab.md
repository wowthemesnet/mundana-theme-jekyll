---
layout: post
title: What is tensorflow? (official document)
modified: 2019-02-10
categories: [NLP]
tags: 
  - tensorflow
  - tensor
  - NLP
comments: true
---


- Tensorflow official learning course has three sections
	1) TUTORIALS
	2) GUIDE
	3) DEPLOY

## What is Tensor?
- A tensor is a generalization of vectors and matrices to potentially higher dimensions. Internally, TensorFlow represents tensors as n-dimensional arrays of base datatypes.



[TensorFlow Guide]


### High Level APIs
- Keras, TensorFlow's high-level API for building and training deep learning models.
- Eager Execution, an API for writing TensorFlow code imperatively, like you would use Numpy.
- Importing Data, easy input pipelines to bring your data into your TensorFlow program.
- Estimators, a high-level API that provides fully-packaged models ready for large-scale training and production.

### Estimators
- Premade Estimators, the basics of premade Estimators.
- Checkpoints, save training progress and resume where you left off.
- Feature Columns, handle a variety of input data types without changes to the model.
- Datasets for Estimators, use tf.data to input data.
- Creating Custom Estimators, write your own Estimator.

### Accelerators
- Using GPUs explains how TensorFlow assigns operations to devices and how you can change the arrangement manually.
- Using TPUs explains how to modify Estimator programs to run on a TPU.

### Low Level APIs
- Introduction, which introduces the basics of how you can use TensorFlow outside of the high Level APIs.
- Tensors, which explains how to create, manipulate, and access Tensors--the fundamental object in TensorFlow.
- Variables, which details how to represent shared, persistent state in your program.
- Graphs and Sessions, which explains:
	- dataflow graphs, which are TensorFlow's representation of computations as dependencies between operations.
	- sessions, which are TensorFlow's mechanism for running dataflow graphs across one or more local or remote devices. If you are programming with the low-level TensorFlow API, this unit is essential. If you are programming with a high-level TensorFlow API such as Estimators or Keras, the high-level API creates and manages graphs and sessions for you, but understanding graphs and sessions can still be helpful.
- Save and Restore, which explains how to save and restore variables and models.
- Ragged Tensors, which explains how to use Ragged Tensors to encode nested variable-length lists.

### ML Concepts
- Embeddings, which introduces the concept of embeddings, provides a simple example of training an embedding in TensorFlow, and explains how to view embeddings with the TensorBoard Embedding Projector.

### Debugging
- TensorFlow Debugger, which explains how to use the TensorFlow debugger (tfdbg).

### TensorBoard
TensorBoard is a utility to visualize different aspects of machine learning. The following guides explain how to use TensorBoard:

	- TensorBoard: Visualizing Learning, which introduces TensorBoard.
	- TensorBoard Histogram Dashboard which demonstrates the how to use TensorBoard's histogram dashboard.

### Performance
Performance is an important consideration when training machine learning models. Performance speeds up and scales research while also providing end users with near instant predictions.

	- Performance overview contains a collection of best practices for optimizing your TensorFlow code.
	- Data input pipeline describes the tf.data API for building efficient data input pipelines for TensorFlow.
	- Benchmarks contain a collection of benchmark results for a variety of hardware configurations.

Additionally, TensorFlow Lite has optimization techniques for mobile and embedded devices.

### Extend
This section explains how developers can add functionality to TensorFlow's capabilities.

---


TensorFlow architecture presents an architectural overview.
Create an op, which explains how to create your own operations.
Custom filesystem plugin, which explains how to add support for your own shared or distributed filesystem.
Custom file and record formats, which details how to add support for your own file and record formats.
Language bindings, Python is currently the only language supported by TensorFlow's API stability promises. However, TensorFlow also provides functionality to create or develop features in other languages.
Model files, for creating tools compatible with TensorFlow's model format.
XLA (Accelerated Linear Algebra) is an experimental compiler for linear algebra that optimizes TensorFlow computations.