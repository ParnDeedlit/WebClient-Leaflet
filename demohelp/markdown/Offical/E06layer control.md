#### 将一堆图层合并到一个组中，需要在代码中做如下处理：

```javascript
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
```
#### 图层控制
> &emsp;Leaflet有一个很好的小控件，可以让用户控制他们在地图上看到的图层。除了向您展示如何使用它之外，我们还将向您展示另一个适用于图层组的方便用途。

##### 创建这些基础图层并将默认图层添加到地图中
##### &emsp;代码如下：
```javascript
var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
    streets   = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution});

var map = L.map('map', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [grayscale, cities]
});
```