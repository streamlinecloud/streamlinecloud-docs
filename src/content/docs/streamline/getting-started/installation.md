---
title: Installation
description: An easy setup guide.
---

### 1. Prerequisites:
- We recommend at least 4GB of ram and a modern CPU.
- A Linux based system (like Debian 12/13). At the moment Windows Systems are not supported due to the file system management.
### Preparation
First you need to install Java. We recommend SdkMan. Just go to https://sdkman.io/ and run the install script. After the installation, open a new terminal and install the java version for your StreamlineCloud version. The current java version for Streamline is 21. To install this version just type:
```bash
sdk install java 21.0.2-open
```

And you need to have a few programs installed. If you are on Debian just type:
```bash
apt install wget unzip
```

Open your home folder:
```bash
cd ~/
```
### 3. Download
StreamlineCloud:
Go to the releases section of this repository and copy the url of the latest release.
You can find the latest release [here](https://streamlinecloud.net/download).

![image](/copy-download.png)

Download the ZIP file:
```bash
wget <url>
```

Unzip it:
```bash
unzip streamlinecloud_image.zip
```

Delete the zip file:
```bash
rm streamlinecloud_image.zip
```

Open the directory:
```bash
cd streamlinecloud_image
```

Now, you can start StreamlineCloud:
```bash
java -jar streamlinecloud_<VERSION>.jar
```