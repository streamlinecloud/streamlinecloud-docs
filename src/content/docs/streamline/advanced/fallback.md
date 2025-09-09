---
title: Fallback control
---
Fallback control is an optional feature that automatically stops and starts fallback servers based on the network online count. Fallback servers are your "lobby" servers. You can change your fallback group in the config.

## Configuring fallback control
Just open data/config.json and take a look at the fallback section. You will find the following options:
````json
...
"dynamicFallbackControl": false,
"dynamicFallbackPuffer": 20,
...
````
If you want to enable fallback control just set **dynamicFallbackControl** to **true**. You might also want to change the **dynamicFallbackPuffer** variable. If you have a large player base you should increase this integer.

Just restart StreamlineCloud to apply your changes.