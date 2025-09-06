---
title: Introduction
description: An introduction into StreamlineCloud development.
---

First you should add the StreamlineCloud repo to your project.

### Gradle
Add the following code to your build.gradle / build.gradle.kts file.
````kts
repositories {
    maven {
        url "https://streamlinecloud.github.io/repo/"
    }
}
````

### Maven

Add the following code to your pom.xml file.
````xml
<repositories>
    <repository>
        <id>streamlinecloud</id>
        <url>https://streamlinecloud.github.io/repo/</url>
    </repository>
</repositories>
````
# The Basics
To create your own content for StreamlineCloud, you just need basic knowledge of Java and Minecraft development.

### The Difference Between Extensions and Plugins
Plugins are Minecraft plugins with StreamlineCloud features built in. You are working with a normal Minecraft plugin, but with the StreamlineCloudMC API implemented. Extensions, on the other hand, are installed directly into StreamlineCloud and can integrate more deeply with the system. Therefore, you need to create your project as a StreamlineCloud extension.

### Code Documentation
For most of our API code, we provide documentation. If you don't understand a function, you can take a look at our Javadoc. If you are using IntelliJ IDEA, simply select the function with your mouse cursor and press 'CTRL + Q' to show the documentation for this function. Or you can also visit https:\/\/javadoc.streamlinecloud.net\/ for the full documentation.

We are excited to see your content!