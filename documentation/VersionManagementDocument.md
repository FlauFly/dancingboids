# Overview
This Document is to describe basic version managment principles and branching strategies that are recommended to use for the duration of "BoidDance" project. This is to clear any ambiguaous version management in later complex stages of the project and also to ease up the modularity of the contributors' development process.

# Proposed Branching Convention
## Strategy:
We are mainly going to use a basic implementation of [gitFlow branching startegy](https://nvie.com/posts/a-successful-git-branching-model/). we have the following main classifications of branches:
- Main branch (mostly untouched except for golden releases)
- Develop Branch (the reference branch with periodic updates from feature branch)
- Release Branch ( definitive versions of the project denoting completion of each phase's completion)
- Feature Branch ( may branch off Develop branch and merge back to Develop and be deleted afterwards) 