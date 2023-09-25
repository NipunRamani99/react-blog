---
title:  Setting Up A Dev Environment with Vagrant 
author: Nipun 
date: 2023-09-24
---
# Vagrant
If you are like me, using Windows machine for web development, you will quickly realize the deployment is most likely going to happen in a Linux environment. This is obviously not going to be sustainable in the long term, so I recently started exploring Vagrant for setting up a local development environment. Luckily, one of my favorite C++ tutorial channel, ChiliTomatoNoodle, made a [tutorial series](https://www.youtube.com/watch?v=8MiuwS2wrhg&list=PLqCJpWy5Fohf2luGHKRqQA0Lb0YtrmAZl) on PHP/Laravel development(which I highly recommend) which made use of Vagrant and Ansible. The scripts are a bit old so I have modified them in some parts. You can find my version on [github](https://github.com/NipunRamani99/pantrio-vagrant.git). Here I will explain how to setup a Vagrant Box and then provision it for PHP Laravel development. 
# Getting Started
To get started first install the latest version of [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and then install [Vagrant](https://developer.hashicorp.com/vagrant/downloads). For Vagrant, I had downloaded and installed the AMD64 version. After installing vagrant, it should be accessible from PowerShell and running ```vagrant --version``` should display the version installed. The next step would be to install a vagrant plugin which will automatically install the host's VirtualBox Guest Additions to the development environemnt. To install the plugin run ```vagrant plugin install vagrant-vbguest```.
