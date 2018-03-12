## Handlers与Controls
**二者区别：**

①Handlers是改变地图行为的一段“不可见”代码；

②Controls则是一个相对地图容器静态的HTML元素。

### Handlers用法示例
> 将水平角度和垂直角度转换成水平和垂直位移的代码如下：
```javascript
L.TiltHandler = L.Handler.extend({
    addHooks: function() {
        L.DomEvent.on(window, 'deviceorientation', this._tilt, this);
    },
    removeHooks: function() {
        L.DomEvent.off(window, 'deviceorientation', this._tilt, this);
    },
    _tilt: function(ev) {
        // Treat Gamma angle as horizontal pan (1 degree = 1 pixel) and Beta angle as vertical pan
        this._map.panBy( L.point( ev.gamma, ev.beta ) );
    }
});
```

### Controls用法示例
> `onAdd`和`onRemove`是L.control拓展的两个方法，在使用L.control拓展的时候必须使用，即使函数方法内部不执行任何操作。
```javascript
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = '../../docs/images/logo.png';
        img.style.width = '200px';
        return img;
    },
    onRemove: function(map) {
        // Nothing to do here
    }
});
```
