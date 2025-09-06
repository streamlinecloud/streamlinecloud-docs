---
title: Plugin development
---

## Implementation

Please make sure you have added our repo to your project!

### Gradle
Implementing StreamlineCloudMC
````kts 
dependencies {
    implementation "net.streamlinecloud:streamlinecloud-mc:BETA-0.5"
}
````

### Maven
Implementing StreamlineCloudMC
````xml
<dependencies>
  <dependency>
    <groupId>net.streamlinecloud</groupId>
    <artifactId>streamlinecloud-mc</artifactId>
    <version>BETA-0.5</version>
  </dependency>
</dependencies>
````

## The ServerManager
How to access the server manager:
````java
ServerManager serverManager = ServerManager.getInstance();
````

You can get a server by its name or uuid:
````java
StreamlineServer server;

server = serverManager.getServerByName("yourserver-1");
//or
server = serverManager.getServerByUuid("983e1d32");
````

If you want to have realtime updates for a server you can subscribe it:
````java
serverManager.subscribe(server);
````

Now you just have to create a new listener:
````java
public class ServerListener implements Listener {

    @EventHandler
    public void onServerDataUpdate(ServerDataUpdateEvent event) {
        System.out.println("Server updated: " + event.getServer().getName());
        
        //Your code here
    }

    @EventHandler
    public void onServerDeletedEvent(ServerDeletedEvent event) {
        System.out.println("Server deleted: " + event.getServer().getName());
        
        //Your code here
    }
}
````

At last, you have to register you listener in your plugin main class:
````java
getServer().getPluginManager().registerEvents(new ServerListener(), this);
````