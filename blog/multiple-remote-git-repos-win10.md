---
path: /blog/multiple-remote-git-repos-win10
date: '2019-05-25'
title: Multiple Remote Git Repos Win10
---
In this blog post we will learn how to have two or more remote Git repositories on a Windows 10 operating system (though the process is similar for other operating systems). This tutorial is aimed at Github and Bitbucket but theoretically should work for other solutions. This tutorial assume basic Git knowledge and makes use of the command line. 

A remote Git repository is simply a place for code to live externally, that is, outside the owner’s infrastructure - in the cloud, thanks to solutions such as Github. I like to have the working version of my project on a private Git repository stored via BitBucket, and a public (hopefully more polished) version available on Github. 

Assuming you have ran “git init”, and committed your changes as well as the appropriate steps via the Github/BitBucket website, you will need to ensure your computer has access to Github or BitBucket before you can push (send) code to their servers, [on Windows] to do this, open the control panel > user accounts > credential manager > Windows credentials. When you are prompted for your account details as you push code via your Github/BitBucket account, Windows will store these details, you can either double check and edit them, or delete them and start fresh - is what I like to do for convenience. This will ensure that the Github repository and the BitBucket repository do not interfere with each other (yes this is security related). 

To add a remote we run “git remote add origin https://github.com/user/repo.git”, where “origin” is the name of the remote repository. 

We can view our remotes by running “git remote -v”. 

Now to add another remote we simply run the previous command with a  different name, “git remote add bitbucket https://user@bitbucket.org/username/reponame.git” 

To push code to the second remote, we can do “git push bitbucket branchname”. Soon your code will be accessible on Github or BitBucket, and you can keep the code organized better. 

Now let's say we wish to remove a remote (a risky task), “git remote rm remotename”; “git remote rm bitbucket” will remove our BitBucket remote but not the Github remote, I strongly suggest that you check the documentation via https://help.github.com to determine what this actually does, and to “git help” with other stuff. Thanks for reading. 


