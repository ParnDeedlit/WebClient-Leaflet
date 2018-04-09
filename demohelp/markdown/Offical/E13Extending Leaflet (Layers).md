#### Extending Leaflet:Layers
> 在Leaflet中，图层是地图的一切，下面将简单介绍使用`特定的`入口点来拓展图层或创建新图层(Extension methods)。

#### Extension methods
##### `L.TileLayer.getTileUrl()`
> 一些Leaflet父类有所谓的“extension methods”:编写子类代码的入口点。其中一个就是`L.TileLayer.getTileUrl()`,这个方法只能被`L.TileLayer`内部调用，返回给定其坐标瓦片的URL。通过创建`L.TileLayer`子类和重写`getTileUrl()`函数，我们可以自定义行为。

代码如下:
```javascript
L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords) {
        var i = Math.ceil( Math.random() * 4 );
        return "http://placekitten.com/256/256?image=" + i;
    },
    getAttribution: function() {
        return "<a href='http://placekitten.com/attribution.html'>PlaceKitten</a>"
    }
});
```

##### Methods
L.TileLayer自身拥有的方法如下:

|   Method   |   返回值   |   描述   |
|:----------|:---------:|:--------|
|setUrl(`<String>` url, `<Boolean>` noRedraw?)|this|更新图层的URL模板并重绘它（除非noRedraw设置为true）|
|createTile(`<Object>` coords, `<Function>` done?)|HTMLElement|仅在内部调用，覆盖GridLayer的createTile()以返回给定坐标的适当图像URL的<img> HTML元素。在瓦片加载完成后回调done函数。|

##### `L.GridLayer.createTile()`
> L.GridLayer允许创建<img>s的网格，但也可以创建<div>s，<canvas>es或<picture>s(或其他）的网格。`createTile()`只需要返回给定瓦片坐标的HTMLElement实例。

代码如下:
```javascript
L.GridLayer.DebugCoords = L.GridLayer.extend({
    createTile: function (coords) {
        var tile = document.createElement('div');
        tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');
        tile.style.outline = '1px solid red';
        return tile;
    }
});
```

##### Methods
L.GridLayer自身拥有的方法如下:

|   Method   |   返回值   |   描述   |
|:----------|:---------:|:--------|
|bringToFront()|this|将某一瓦片图层置于所有瓦片图层顶部|
|bringToBack()|this|将某一瓦片图层置于所有瓦片图层底部|
|getContainer()|HTMLElement|返回包含此图层瓦片的HTML元素|
|setOpacity(`<Number>` opacity)|this|更改网格图层的透明度|
|setZIndex(`<Number>` zIndex)	|this|更改网格图层的zIndex|
|isLoading()|Boolean|如果网格图层中的任一图块未完成加载，则返回true|
|redraw()|this|使图层清除所有瓦片数据并再次请求它们|
|getTileSize()|Point|将`tileSize`选项标准化为一个点。由`createTile（）`方法使用|
