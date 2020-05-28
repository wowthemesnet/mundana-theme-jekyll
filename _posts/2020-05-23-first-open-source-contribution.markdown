---
layout: post
title:  "How I started working on the Firefox iOS app and my intro to contributing to open source code"
categories: [ Open Source, Code, iOS ]
image: assets/images/PostsImages/firstOpenSourceContribution/firefox.jpg
author : Noor
---

# How did it start? 

After working for a while on my own iOS projects, I wanted to try working on bigger ones. I have always had "contributing to open source big codebases" on my list but there was always a reason for me to push it for later, thinking it will need a lot of time or I'm not good enough for it or not ready yet. In college, I wanted to apply to GSoC but eventually ended up not doing it (which I regret now), after following alot of code bases and people who are contribuiting to open source code and gaining some confidence to go for it I came across a program for open source contribtuion online while browsing my twitter feeds and this is where it all started.

The program is called Outreachy and the whole purpose of it is to encourage more people to kick off their open source journies and pick a project that they contribute to full-time for 3 months and get paid. The great thing about Outreachy , is that they are really inclusive and they stress in every occassion on the importance of building a supportive community that's open for all and that encourages underepresented individuals in tech to participate, the community organisers are responsive and so is the maintainers/mentors responsible for each project depending on which one you pick.

<a href="https://www.outreachy.org/"><img src="/assets/images/PostsImages/firstOpenSourceContribution/outreachy.png" alt="first issue" height="170"></a>

The projects that took part in the program were very interesting and they were sophisticated enough for you to enhance your skills and learn while building them but at the same time there were enough projects for different levels of expertise for everyone to pick. The companies and institutions who took part were big to mention some : Apache, Mozilla, CC, Wikimedia, Fedora and Tor and various other recognizable entites in the open source community.

Since I've recently been coding in Swift and Python, I searched for the related projects written in both and decided to pick Mozilla's Firefox iOS app as my first open source project to contribute to. 
First, because it was a big project, so I would learn alot while working on it and getting used to working with alot of files and code components. Second, because it's an app that's different than the apps I worked on, it's a browser app with alot of functionality to build in different components.

 <img src="/assets/images/PostsImages/firstOpenSourceContribution/firefox.jpg" alt="firefox logo" height="200">

my first encounter with the code was a bit overwhelming, I picked one of the simple issues first to work on untill I get more familiar with the code, but even this simple issue was hard to work on at first, not because technical complexity but because the code was too big, I couldn't find the designated part where I should edit :D

after navigating through the code and reading different classes and their purpose, I got a grip around it and could fix my first issue which was a UI issue. but I gained alot regarding the code base as I got used to it and knew which parts were related to which components of the app. skimming through the code more than once can have benefits :D 

My friends where 
1. xcode's code search and file search
    <img src="/assets/images/PostsImages/firstOpenSourceContribution/search.png" alt="search xcode" height="100">
2. and documentation browsing (option button + choose the keyword) to jump to definitions and different classes.
    <img src="/assets/images/PostsImages/firstOpenSourceContribution/optionFinder.png" alt="option button + keyword = documentation" height="150">

One trick while working with firefox project though, and specially if it's a UI fix or a functionality that has related UI, is that you can search for the relevant code component by the UI element related to it. 

my first issue was this 

<a href="https://github.com/mozilla-mobile/firefox-ios/pull/6324"><img src="/assets/images/PostsImages/firstOpenSourceContribution/firstIssue.png" alt="first issue github" height="120"></a>

so it had to do with UI and adjusting the length of the account email being shown in the menu. I had to find the relevant component to edit the label. as this component was in a menu, I thought maybe it would be good to search for "menu" and find all the componnets that handled menus, but turns out that the associated class was named as "PhotonActionSheet", so it wasn't helpful and also I was presented with ALOT of components that handled a menu and had the keyword, so it wasn't that specific. 
I decided then to search for the UI element in the assets of the app, There was a placeholder icon for the user and a sync circle. I used the xcode file finder and typed ".xcasset" to have all the asset folders available and navigated through them. and once I found the related UI elements, I copied their name and started searching for the related piece of code where such ui element is being defined so from there I managed to trace back to the class that handles the tableview cell I was supposed to work with and that it's called a PhotonActionSheetItem and I should be looking in the PhotonActionSheet class.

<img src="/assets/images/PostsImages/firstOpenSourceContribution/placeholder.png" alt="placeholder icons" height="150" width="500">

<img src="/assets/images/PostsImages/firstOpenSourceContribution/uielements.png" alt="ui elements menu" height="100" width="500">



after finding the proper class, it was just editing two lines of code that solved the issue :D

### The usual workflow to contribute code to an open source repository is : 

1. Fork the repo
2. clone your forked repo to your local device
3. create your own branch and name it after the issue number or ID
4. make your code edits
5. commit and push changes to the remote repository on your branch
6. go to Github and open a pull request on your branch, make it clear and mention the name of the issue or id and in the body of the PR say the changes you made and if you have any questions to make the code better.

usually afterwards any maintainer for the repo withh comment with code edits after reviewing your code or tell you that it's fine but it shall be passed to tests and QA then get merged afterwards.

After this issue got fixed and merged, and me getting used to the code structure, I went to fix more than one issue and even added 2 features and got accepted to the Outreachy intern.

<a href="https://github.com/mozilla-mobile/firefox-ios/pull/6324"><img src="/assets/images/PostsImages/firstOpenSourceContribution/PR2.png" alt="PR 2" height="120"></a>
<a href="https://github.com/mozilla-mobile/firefox-ios/pull/6324"><img src="/assets/images/PostsImages/firstOpenSourceContribution/PR3.png" alt="PR 3" height="120"></a>
<a href="https://github.com/mozilla-mobile/firefox-ios/pull/6324"><img src="/assets/images/PostsImages/firstOpenSourceContribution/PR4.png" alt="PR 4" height="120"></a>

at the time I'm writing this, I'm working with the mozilla team on upgrading the Today Widget of Firefox for iOS.


# What I learned in the process
Contributing to open source code is easier than it seemed to me and was really impactful to my coding experience and confidence. 

1. you get the chance to see well-maintained code on a larger scale and learn coding conventions.

2. it broke the barrier of working with big projects if you're still a junior, because you realize that any code base no matter how big, at the end it can be dissected to smaller components that you can handle, and even if you can't yet, you learn.

3. the process of contributing to open source is pretty straightfoward and easy, of course having responsive repo maintainers and in my case mentors was helpful to get reviews on my code. but in general it's open and not something to worry about at all.

4. procrastinating stuff thinking that you're never ready enough for it is a myth. you'll never be ready for anything and the only thing to do is to go for it and learn through it.

5. You'll get some sleepless nights trying to figure out something, it can get a bit frustrating but it's completely rewarding once you're done with it so don't give up on it no matter how intimidating or out of your scope it might seem, anything is solved by googling and reaching out to the community or the maintainers of the code themselves.

for anyone interested in contributing to open source, just pick a language or a project you're passionate about and go find its repo online and read through it and check the issue and just try, you won't lost anything trying, but you;ll definetly learn.

also these are resources that might help kickstarting the journey : 

1. **Outreachy Internship**

    [Outreachy](https://www.outreachy.org/)

2. **Google Summer of Code**

    [Google Summer of Code](https://summerofcode.withgoogle.com/)


3. **Guide to Open Source contribution by Github**

    [Guide Here](https://opensource.guide/how-to-contribute/)
    
    it also has some pretty good resources at the end for places to find open issues and projects to contribute to.

4. **Browsing Github**     
    contributing to open source code doesn't have to be for big code bases, you can pick any tool you enjoy or any repository that interets you and try to solve issues or suggest enhancements to it. I'm sure the maintainers will appreciate it.


Thank you for reading through. Tell me about your first open source contribution encounters or if you willing to go for it after reading this. it would defintely make my day.

This is part of a series about open source contribution I'm willing to make to document my journey. Stay tuned.





