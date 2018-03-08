### The concept of map panes
> 地图图窗组使用z-index(CSS属性)允许浏览器以一种高效的方式展示一些图层在其他图层之上。

```text
默认顺序如下：
•切片图层和格网图层；
•路径，比如线、圈或Geojson图层；
•标记的阴影；
•标记的图标；
•弹出框。
```

### 自定义图窗
##### 示例代码如下：
```javascript
var map = L.map('map');
map.createPane('labels'); //建立图窗

map.getPane('labels').style.zIndex = 650; //设置图窗的z-index属性
```
> 由于各个图层可以响应一些事件，比如点击事件。所以需要选择性的屏蔽一些图层事件。
##### 示例代码如下：
```javascript
//关闭lablel图层的触控事件
map.getPane('labels').style.pointerEvents = 'none';
```