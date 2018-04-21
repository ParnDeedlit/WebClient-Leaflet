#### 创建一个图标的方法：

> 通过`L.icon`对象定义一个图标，在对象options中设置即可。

##### 代码如下：
```javascript
var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // 图标的大小
    shadowSize:   [50, 64], // 图标影子的大小
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]});
```
