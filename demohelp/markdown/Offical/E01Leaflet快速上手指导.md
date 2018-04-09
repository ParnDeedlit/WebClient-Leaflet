### Leaflet Quick Start Guide
> 本教程将快速介绍有关于Leaflet的基础知识，包括设置Leaflet地图、创建(线、标记、提示框)以及处理一些事件，让你对‘叶子’有个基本的了解。

#### 准备

1. 引入leaflet.js、leaflet.css文件。
2. 创建一个拥有具体id的div容器。
        <div id="map"></div>
3. 明确容器的高度。
        #map { height: 180px; }
        
#### 设置地图
>- 初始化地图，通过选定的地理坐标设置地图视角以及缩放级别。

```javascript
var map = L.map('map').setView([30.518762, 114.398902], 13);
```



#### 地址引用方法：
##### 代码如下：

```javascript
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
```
mapbox底图Token获取网址：
> [mapbox密钥获取](https://www.mapbox.com/account/access-tokens)

##### leaflet官方提供的密钥：
``` bash
pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw
```

#### [密钥收费标准说明](https://www.mapbox.com/pricing/)




