# Overview
This Document is to describe basic version managment principles and branching strategies that are recommended to use for the duration of "BoidDance" project. This is to clear any ambiguaous version management in later complex stages of the project and also to ease up the modularity of the contributors' development process.

# Proposed Branching Convention
## Strategy:
We are mainly going to use a basic implementation of [gitFlow branching startegy](https://nvie.com/posts/a-successful-git-branching-model/). we have the following main classifications of branches:
- Main branch (mostly untouched except for golden releases)
- Develop Branch (the reference branch with periodic updates from feature branch)
    1. May be branching from main or release
    2. After definitive versions will be merged to release for release versions
    3. Should not be deleted
- Release Branch ( definitive versions of the project denoting completion of each phase's completion)
    1. Always branches to develop and sometimes main for golden release versions
    2. Always branches from develop branch
    3. Can have sub branch for bugfixes
- Feature Branch 
    1. May branch off Develop branch and must merge back to Develop and be deleted after successful mearge
    2. There can be sub branches for a single feature branch that should be merged back to the main feature branch after successful completion
- Fixes Branch (bugfixes)
    1. Always branch from release branch and merge back to release branch
    2. Branch need to be deleted after successful bug fix

## Branch Naming conventions:

This section is only applicable for Feature branches and Fixes branches the naming convention that is recommended:
- Feature branches name in the format: Feature_[FeatureName]
- Subfeature in the name: Subfeature_[SubfeatureName]
- Fixes branches name in the format: [Release_Version]_Fix[Number]
## Version naming conventions:
This section is only applicable to develop, main and release branch. Version numbers follow this convention 1.0 where 1 is the main version of the project and the decimal point is the bug fix itertion of the said version.
Recommended naming conventions are:
- develop branch: 
    1. Note that all commits nee not follow this naming convention only certain definitve versions that have completed a phase of the development process would be named as : [VersioNumber]_Develop
- Release branch:
    1. All commits in this branch must follow: [VersionNumber]_Release
    2. Decimal section of the version should be incremented after a merge from bug fix branch (e.g. 1.0 -> 1.1) 
    3. Consecutive merges from develop branch will increment the Version number (e.g. 1.0 -> 2.0)
- Main branch:
    1. Not all release branch should be merged to main branch only definitive, stable and robhust golden versions should be merged.
    2. Naming convention: [VersionNumber]_GoldenRelease
## Conflict Management Practice:
When conflict arrises during merging of the branches, we will resolve according to whose is main author of piece of code or module. Steps:
1. Create ticket about the conflict, name convention: Branch-Conflict-[FileName]. Summary and screenshot. (Jira status: To Do)
2. Assign to the other contributor 
3. The Other Contributor if  
    1. Author: 
        1. checks the conflict, comments on the changes made for resolution and changes status of task to **in progress** and assigns it back to the reporter
        2. The reporter validates the change in comment, change jira status to **QA_CHECK** and assigns it back to the Author or suggest a new resolution in comments and assign it back to the author
        3. Author finally accepts or rejects the comment, updates the final resolution and change the status to **Done** thereby resolving that particular conflict.
    2. Non Author:
        1. Check the conflict, comment on the suggested resolution for the author.
        2. Assign to the Author.
        3. Follow steps as in case of Author being the Other Contributor.

