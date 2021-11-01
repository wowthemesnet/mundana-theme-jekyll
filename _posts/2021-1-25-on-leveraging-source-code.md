---
layout: post
title:  "Stealing Code—What All Software Engineering Students Should Know"
author: brooke
categories: [ software engineering, introductory, source code, java ]
courses: [SWE-262P, SWE-265P]
image: assets/images/software-developer.jpg

---
One of the most important principles you'll in Software Engineering, is to *leverage existing source code*. As a rule of thumb, if you're writing something completely from scratch, *you're probably doing it wrong*!

It can feel like a strange transition to *deliberately* copy another's code as an end to your own means, a vast departure from the world of academia and introductory Computer Science courses, where you are mandated to write low-level code and prohibited from copying others' solutions.  

However for most programming you'll be doing in the Software industry as a whole, you will *not* be re-inventing the wheel, and its oftentimes *better* to use these pre-written libraries.

Why is this?  Its not necessarily that Software shuns original, independent thinking.

Take the [JSON-Java project](https://github.com/stleary/JSON-java), for instance.  Looking at their GitHub project page, this is a library that is used by *at least* **137,000** projects--and has a team of **41 developers** working on maintaining the code.  

![JSON Java project](/assets/images/JSONJava.png)

Software is constantly evolving, new bugs appear as quickly as their predecessors squashed, dependencies are continuously updated—a project as large as this one is verified not only by the team of developers that maintain it, but by the hundreds of thousands of other open-source projects currently leveraging it successfully.  There's always a risk of bugs—but such a project will likely have infrastructure in place such as [Issue Tracking](https://github.com/stleary/JSON-java/issues) to capture and assess defects.  If there's a common operation to be performed in the scope of JSON parsing and processing, its likely been implemented, through several rounds of releases and testing, and is still being actively watched and maintained by this large development group.  Generally, this example demonstrates why we prefer to leverage existing libraries to writing our own completely from scratch.

### Nuances

There are always exceptions to the rule, as Joshua Bloch's famously puts it in *Effective Java*:  "Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them."

Generally, we want to keep dependencies on outside libraries to a minimum—particularly when considering a large project like the JSON project. Really what we're trying to do is mitigate the risk that introducing new, minimally tested, potentially bug-prone code can do to the project.

So while we don't want to "reinvent the wheel", we *do* want to ensure that we're looking for that wheel with progressive effort—first check the garage for spares, then in the auto shop down the street, then if we have to, shipping it in from out of state.  Taking the Java-JSON project, here is a general heuristic I would follow:

1. First, check to see if what you're looking to do exists already inside of the JSON project.  This is the most preferred as it will minimize the amount of new code introduced to the project.

2. For *source code* (i.e. code in the "src/main" directory):

   1. Java built-in libraries, which are included java.util, java.lang, java.io, and the likes.
   2. Utilize code from libraries that the project already depends on.  You can see these in the pom.xml file under the <dependencies> tag, or in the build.gradle file under dependencies{...}. 
   3. Well-established third-party java libraries that are not already included as a project dependency, such as Google Guava.  Code such as this is tested almost as much as the java libraries themselves, and hardly introduces a risk to the project. 

3. For *test code* ("src/test" directory):

   1. Look at existing tests and utility methods in those test classes.
   2. For asserts() or things like that, look in the JUnit library or Mockito library, which is already included in the project as a dependency.

4. If you cannot find the operation you're looking for after searching through these sources, then look for a reputable third-party library.*

   *In the real world, you'd probably have to evaluate this as a tradeoff with your team.  Depending on the company and size of the project you're working on, sometimes it might be less risky to just build something from scratch.

5. Build from scratch. 



## Additional Resources

I had *Effective Java, Third Edition* by Joshua Bloch reccommended to me early in my career, and I still reference it regularly.  The Third Edition was updated for the Java 8 release, and its still relevant for the newer Java versions.  It does an excellent job of delineating those principles of good design and effective programming that can appear amongst more experienced programmers to be a-priori. 