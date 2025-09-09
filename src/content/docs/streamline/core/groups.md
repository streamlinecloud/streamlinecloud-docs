---
title: Groups
---
Groups are allowing you to start as many servers as you want based on a predefined template.

## Example: configuring a lobby group
First you have to create a new group:
````bash
groups create lobby server <software>
````
Please take a look at the Software Management documentation or just use **default** as your software to apply the default software to your group.

Now you have to create a template for your lobby group. Open the templates folder and create a new folder named **lobby** inside it. This lobby folder will be your the template for your lobby servers. You can place your lobby world and plugins inside it.

To add your template to the group just type:
````bash
groups group lobby add template lobby
````
And now you can change the minOnlineCount for your group:
````bash
groups group lobby set minOnlineCount 1
````
Now, one lobby server will be permanently online.

pro tip: you can use our fallback control feature for your lobby group to start and stop you fallback server dynamically!