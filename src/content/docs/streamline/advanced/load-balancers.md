---
title: Load Balancers
---

With load balancers you can spread your players across multiple proxy servers. The loadbalancers is the first instance the client communicates with.

To see a list of your running load balancers just type
````bash
loadbalancer list
````

## Creating a new load balancer
````bash
loadbalancer create <name> <port> <targetGroup>
````
The port is the port your players have to connect to. The default port for Minecraft Java Edition is **25565**.
