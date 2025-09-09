---
title: Software Management
---
The StreamlineCloud software management feature allows you to update your servers easily and it caches server files for a fast startup.

Just type the command
````bash
software list
````
to see your installed software.

## Installing a new software
We recommend you using the software catalog. Just type
````bash
software catalog list
````
to see the list of available software. To install software from the catalog just type
````bash
software catalog install <software> <version>
````
and Streamline will download and install your software automatically. If want to install a software that is not available in the software catalog, you can add your software manually. 
````bash
software add <name> <proxy/server> <url>
````
The url has to be a direct download link to your software file.

## Using an installed software
You can change the software for a specific group:
````bash
g group <groupName> set software <softwareName>
````
Or you can change your default software. To do that just shutdown StreamlineCloud and open data/config.json and you will find a variable named defaultSoftwareName:
````json
"defaultSoftwareName": "paper-1.21.8",
````
You can just change this value and start StreamlineCloud again. Just make sure that your software is installed and appears in the **software list** command!

## Clearing the cache for an installed software
````bash
software clearCache <softwareName>
````