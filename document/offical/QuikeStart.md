# Leaflet详细说明文档（alpha）
> an open-source JavaScript library for mobile-friendly interactive maps
##### 英文标题：Detailed description of the Leaflet
##### 作者：[潘卓然](https://user.qzone.qq.com/398809724/infocenter?_t_=0.019924784677374463)、[程昌红]()
##### 授权方式：本教程仅供内部开发者使用。

```text
重要说明：本文档正在持续修改之中，大部分章节都没有写完，正式发布还需要一段时间。所有内容随时可能发生变动!
```
## <span id="Map">地图(Map)<span>
## 地图方法(Map Methods)
## 地图杂项(Map Misc)
## UI图层(UI Layers)
### <span id="Marker">Marker<span>







## 栅格图层(Raster Layers)
### TileLayer
在地图上用于加载和显示瓦片图层。继承于[GridLayer](#GridLayer)
#### 示例
```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
```
##### URL模板
```javascript
'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
```
- {s}:表示一个有效的子域名(用于帮助浏览器并行请求每个域限制；在选项中指定子域值；默认情况下可以省略a、b或c)。
- {z}:缩放级别。
- {x}、{y}:瓦片坐标。
- {r}:可以用来添加“@2x”到URL来加载视网膜瓦片。你可以在模板中使用自定义键，它将从TileLayer选项中取值，如下所示：
```javascript
L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
```
#### Creation
##### Extension methods

|     构造函数     |     描述     |
|:----------------|:------------|
|L.tilelayer(`<String>` urlTemplate, <[TileLayer options](#TileLayeroptions)> options?)|通过给定一个URL模板和一个options对象来实例化一个切片图层。|

#### <span id="TileLayeroptions">Options<span>

|   Option   |   类型   |   默认值   |    描述    |
|:----------:|:-------:|:---------:|:-----------|
|minZoom|Number|0|图层显示能够缩放到的最小级别。(包含)|
|maxZoom|Number|18|图层显示能够放大到的最大级别。(包含)|
|subdomains|String\String[]|'abc'|瓦片服务的子域名。可以传递一个字符串（其中每一个字母都是一个子域名称）或是一个字符串数组。|
|errorTileUrl|String|' '|显示瓦片图片的URL以代替未能加载的瓦片。|
|zoomOffset|Number|0|The zoom number used in tile URLs will be offset with this value.|
|tms|Number|false|If true, inverses Y axis numbering for tiles (turn this on for TMS services).|
|zoomReverse|Boolean|false|If set to true, the zoom number used in tile URLs will be reversed (maxZoom - zoom instead of zoom)|
|detectRetina|Boolean|false|If true and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.|
|crossOrigin|Boolean|false|If true, all tiles will have their crossOrigin attribute set to ''. This is needed if you want to access tile pixel data.|

> **Options inherited from [GridLayer](#GridLayer)**

> **Options inherited from [Layer](#Layer)**

#### Event

> **Events inherited from [GridLayer](#GridLayer)**

> **Events inherited from [Layer](#Layer)**

> **Popup events inherited from [Layer](#Layer)**

> **Tooltip events inherited from [Layer](#Layer)**

#### Methods

|   Method   |   返回值   |   描述   |
|:----------|:---------:|:--------|
|setUrl(`<String>` url, `<Boolean>` noRedraw?)|this|更新图层的URL模板并重绘它（除非noRedraw设置为true）|
|createTile(`<Object>` coords, `<Function>` done?)|HTMLElement|仅在内部调用，覆盖GridLayer的createTile()以返回给定坐标的适当图像URL的<img> HTML元素。在瓦片加载完成后回调done函数。|

##### Extension methods
扩展[TileLayer]()的图层可以重新实现下面方法。

|   Method   |   返回值   |   描述   |
|:----------|:---------:|:--------|
|getTileUrl(`<Object>` coords)|String|仅在内部调用，返回一个给定坐标的瓦片URL，扩展[TileLayer]()的类可以重写此函数以提供自定义瓦片URL命名方案。|

###### 小例子

```javascript
L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords) {
        var i = Math.ceil( Math.random() * 4 );
        return "http://placekitten.com/256/256?image=" + i;
    }
});
```

> **Methods inherited from [GridLayer](#GridLayer)**

> **Methods inherited from [Layer](#Layer)**

> **Popup methods inherited from [Layer](#Layer)**

> **Tooltip methods inherited from [Layer](#Layer)**

> **Methods inherited from EventedMethods inherited from [Evented](#Evented)**

### TileLayer.WMS
### ImageOverlay
### VideoOverlay









## 矢量图层(Vector Layers)
### Path
#### <span id="Pathoptions">Path options<span>











## 其他图层(Other Layers)
### <span id="LayerGroup">LayerGroup<span>
### <span id="FeatureGroup">FeatureGroup<span>
### GeoJSON
表示单个GeoJSON对象或一组GeoJSON对象数组，可以将GeoJSON数据显示在地图上。继承于[FeatureGroup](#FeatureGroup)
#### 示例
```javascript
L.geoJSON(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.description;
}).addTo(map);
```

#### Creation

|     构造函数     |     描述     |
|:----------------|:------------|
|L.geoJSON((`<object>` geojson?),<[GeoJSON options](#GeoJSONoptions)>options?)|创建一个GeoJSON图层，接收一个用[GeoJSON](http://geojson.org/geojson-spec.html)格式表示的对象并将其添加进地图(可选，也可以之后通过`addData`方法添加)和一个`options`对象。|

#### <span id="GeoJSONoptions">Options<span>

|   Option   |   类型   |   默认   |   描述   |
|:----------:|:--------:|:-------:|:--------|
|pointToLayer|Function|  *  |A Function defining how GeoJSON points spawn Leaflet layers. It is internally called when data is added, passing the GeoJSON point feature and its [LatLng](#LatLng). The default is to spawn a default [Marker](#Marker): ```function(geoJsonPoint, latlng) {return L.marker(latlng);}```|
|style|Function|  *  |A Function defining the [Path options](#Pathoptions) for styling GeoJSON lines and polygons, called internally when data is added. The default value is to not override any defaults: ```function (geoJsonFeature) {return {}}```|
|onEachFeature|Function|  *  |A Function that will be called once for each created Feature, after it has been created and styled. Useful for attaching events and popups to features. The default is to do nothing with the newly created layers: ```function (feature, layer) {}```|
|filter|Function|  *  |A Function that will be used to decide whether to include a feature or not. The default is to include all features: ```function (geoJsonFeature) {return true;}```Note: dynamically changing the filter option will have effect only on newly added data. It will not re-evaluate already included features.|
|coordsToLatLng|Function|  *  |A Function that will be used for converting GeoJSON coordinates to [LatLng](#LatLng)s. The default is the coordsToLatLng static method.|

> **Options inherited from [Layer](#Layer)**

#### Events

> **Events inherited from [FeatureGroup](#FeatureGroup)**

> **Events inherited from [Layer](#Layer)**

> **Popup events inherited from [Layer](#Layer)**

> **Tooltip events inherited from [Layer](#Layer)**

#### Methods
|   Method   |   返回值   |   描述   |
|:----------|:---------:|:--------|
|addData(`data`)|this|Adds a GeoJSON object to the layer.|
|resetStyle(`layer`)|this|Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.|
|setStyle(`style`)|this|Changes styles of GeoJSON vector layers with the given style function.|

> **Methods inherited from [FeatureGroup](#FeatureGroup)**

> **Methods inherited from [LayerGroup](#LayerGroup)**

> **Methods inherited from [Layer](#Layer)**

> **Popup methods inherited from [Layer](#Layer)**

> **Tooltip methods inherited from [Layer](#Layer)**

> **Methods inherited from [Evented](#Evented)**

#### Functions
There are several static functions which can be called without instantiating L.GeoJSON:

|   Function    |   返回值   |   描述   |
|:----------|:-------:|:--------|
|geometryToLayer(`<Object>` featureData, <[GeoJSON options](#GeoJSONoptions)> options?)|[Layer](#Layer)|Creates a [Layer](#Layer) from a given GeoJSON feature. Can use a custom `pointToLayer` and/or `coordsToLatLng` functions if provided as options.|
|coordsToLatLng(`<Array>` coords)|[LatLng](#LatLng)|Creates a [LatLng](#LatLng) object from an array of 2 numbers (longitude, latitude) or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.|
|coordsToLatLngs(`<Array>` coords,`<Number>` levelsDeep?, `<Function>` coordsToLatLng?)|Array|Creates a multidimensional array of [LatLng](#LatLng)s from a GeoJSON coordinates array. levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default). Can use a custom `coordsToLatLng` function.|
|latLngToCoords(<[LatLng](#LatLng)> latlng, `<Number>` precision?)|Array|Reverse of `coordsToLatLng`|
|latLngsToCoords(`<Array>` latlngs, `<Number>` levelsDeep?, `<Boolean>` closed?)|Array|Reverse of `coordsToLatLngs` closed determines whether the first point should be appended to the end of the array to close the feature, only used when levelsDeep is 0. False by default.|
|asFeature(`<Object>` geojson)|Object|Normalize GeoJSON geometries/features into GeoJSON features.|

### <span id="GridLayer">GridLayer<span>










## 基本类型(Basic Types)
### <span id="LatLng">LatLng<span>









## 控件(Controls)






## Utility






## DOM Utility








## 基础类(Base Classes)
### <span id="Class">Class<span>
L.Class powers the OOP facilities of Leaflet and is used to create almost all of the Leaflet classes documented here. In addition to implementing a simple classical inheritance model, it introduces several special properties for convenient code organization — options, includes and statics.
#### 示例

```javascript
var MyClass = L.Class.extend({
initialize: function (greeter) {
    this.greeter = greeter;
    // class constructor
},
greet: function (name) {
    alert(this.greeter + ', ' + name)
    }
});
// create instance of MyClass, passing "Hello" to the constructor
var a = new MyClass("Hello");
// call greet method, alerting "Hello, World"
a.greet("World");
```
##### 类构造器
你可能已经注意到，Leaflet对象是在不使用新关键字的情况下创建的。通过用小写构造函数方法补充每个类来实现的：
```javascript
new L.Map('map'); // becomes:
L.map('map');
```
这些构造函数实现很简单, 你可以这样做:
```javascript
L.map = function (id, options) {
    return new L.Map(id, options);
};
```
##### Inheritance
你可以使用`L.Class.extend`来定义一个新的类, 但是你也可以在继承于它的任何类上使用相同的方法。
```javascript
var MyChildClass = MyClass.extend({
    // ... new properties and methods
});
```
这将创建一个继承父类所有方法和属性的类（通过适当的原型链），添加或覆盖你扩展的类。它也会对`instanceof`做出适当的反应:
```javascript
var a = new MyChildClass();
a instanceof MyChildClass; // true
a instanceof MyClass; // true
```
你可以通过访问父类原型并使用JavaScript的调用或应用来调用相应子对象的父方法（包括构造函数）（就像你使用其他语言的调用一样）。
```javascript
var MyChildClass = MyClass.extend({
    initialize: function () {
        MyClass.prototype.initialize.call(this, "Yo");
    },
    greet: function (name) {
        MyClass.prototype.greet.call(this, 'bro ' + name + '!');
    }
});
var a = new MyChildClass();
a.greet('Jason'); // alerts "Yo, bro Jason!"
```
##### Options
选项是一个特殊属性，与传递给其他对象的不同之处在于，它将与父对象合并，而不是完全覆盖它，这使得管理对象的配置和默认值变得很方便：
```javascript
var MyClass = L.Class.extend({
    options: {
        myOption1: 'foo',
        myOption2: 'bar'
    }
});
var MyChildClass = MyClass.extend({
    options: {
        myOption1: 'baz',
        myOption3: 5
    }
});
var a = new MyChildClass();
a.options.myOption1; // 'baz'
a.options.myOption2; // 'bar'
a.options.myOption3; // 5
```
还有`L.Util.setOptions`，一种用于方便地将传递给构造函数的选项与类中定义的默认值合并的方法：
```javascript
var MyClass = L.Class.extend({
    options: {
        foo: 'bar',
        bla: 5
    },
    initialize: function (options) {
        L.Util.setOptions(this, options);
        ...
    }
});
var a = new MyClass({bla: 10});
a.options; // {foo: 'bar', bla: 10}
```
请注意，options对象允许使用任何键，而不仅仅是由类及其基类定义的选项。这意味着你可以使用选项对象来存储特定于应用程序的信息，只要您避免相关类已使用的键。
##### Includes
includes是一个特殊的类属性，它将所有指定的对象合并到类中（这些对象称为mixin）。
```javascript
var MyMixin = {
    foo: function () { ... },
    bar: 5
};
var MyClass = L.Class.extend({
    includes: MyMixin
});
var a = new MyClass();
a.foo();
```
你也可以使用`include`方法在运行时执行这些includes操作:
```javascript
MyClass.include(MyMixin);
```
`statics`只是一个便利的属性，它将特定的对象属性作为类的静态属性注入，用于定义常量：
```javascript
var MyClass = L.Class.extend({
    statics: {
        FOO: 'bar',
        BLA: 5
    }
});
MyClass.FOO; // 'bar'
```
##### Constructor hooks
如果你是一个插件开发人员，通常需要为现有类添加额外的初始化代码（例如，编辑`L.Polyline`的钩子）。leaflet提供了一种使用`addInitHook`轻松完成的方法：
```javascript
MyClass.addInitHook(function () {
    // ... do something in constructor additionally
    // e.g. add event listeners, set custom properties etc.
});
```
当您只需要进行一个额外的方法调用时，您还可以使用以下快捷方式：
```javascript
MyClass.addInitHook('methodName', arg1, arg2, …);
```
#### Functions
|   Function    |   返回值   |   描述   |
|:----------|:-------:|:--------|
|extend(`<Object>` props)|Function|Extends the current class given the properties to be included. Returns a Javascript function that is a class constructor (to be called with new).|
|include(`<Object>` properties)|this|Includes a mixin into the current class.|
|mergeOptions(`<Object>` options)|this|Merges options into the defaults of the class.|
|addInitHook(`<Function>` fn)|this|Adds a constructor hook to the class.|









### <span id="Evented">Evented<span>
### <span id="Layer">Layer<span>
### <span id="Control">Control<span>
L.Control is a base class for implementing map controls. Handles positioning. All other controls extend from this class.
#### Options
|   Option   |   类型   |   默认值   |   描述   |
|:----------:|:-------:|:--------:|:--------|
|  position  | String |'topright'|The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'|

#### Methods
Classes extending L.Control will inherit the following methods:

|   Method   |   返回值   |   描述   |
|:----------|:-------:|:--------|
|getPosition()|string|Returns the position of the control.|
|setPosition(`<string>` position)|this|Sets the position of the control.|
|getContainer()|HTMLElement|Returns the HTMLElement that contains the control.|
|addTo(<['Map'](#Map)> map)|this|Adds the control to the given map.|
|remove()|this|Removes the control from the map it is currently active on.|

##### Extension methods
每个控制应该从[L.Control](#Control)扩展并（重新）实现以下方法。

|   Method    |   返回值   |   描述   |
|:----------|:-------:|:--------|
|onAdd(<['Map'](#Map)> map)|HTMLElement|返回控件的DOM容器元素，并在相关的地图事件上添加侦听器。调用`control.addTo(map)`。|
|onRemove(<['Map'](#Map)> map)||可选方法。应该包含所有清理代码，用于删除先前在`onAdd`中添加的侦听器。调用`control.remove()`。|

### <span id="Handler">Handler<span>
Abstract class for map interaction handlers
#### Methods

|   Method    |   返回值   |   描述   |
|:----------|:-------:|:--------|
|enable()|this|Enables the handler|
|disable()|this|Disables the handler|
|enabled()|Boolean|Returns true if the handler is enabled|

##### Extension methods
Classes inheriting from [Handler](#Handler) must implement the two following methods:

|   Method    |   返回值   |   描述   |
|:----------|:-------:|:--------|
|addHooks()||Called when the handler is enabled, should add event hooks.|
|removeHooks()||Called when the handler is disabled, should remove the event hooks added previously.|

#### Functions
There is static function which can be called without instantiating L.Handler:

|   Function    |   返回值   |   描述   |
|:----------|:-------:|:--------|
|addTo(<['Map'](#Map)> map, `<String>` name)|this|Adds a new Handler to the given map with the given name.|






## Misc






















**Map**
------
> API各种类中的核心部分，用来在页面中创建地图并操纵地图.
#### &ensp;用法示例

```javascript
// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
	center: [51.505, -0.09],
	zoom: 13
});
```
#### &ensp;创建

|  构造器        |   描述        |
|:-------|:------------|
| `L.map` (String)|给定div元素的DOM ID 和可选的对象字面值，来实例化映射对象Map options。|
| `L.map`(HTMLElement) |通过div元素和带有地图选项的描述的文字对象来实例化一个地图对象，其中文字对象是可选的。|

#### &ensp;选项

| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|preferCanvas|Boolean|false|[Paths](#)是否应该呈现在[Canvas](#)渲染器上。默认情况下，所有Paths都在[SVG](#)渲染器中呈现。|

##### &ensp;控制选项

| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|attributionControl|Boolean|true|是否默认将属性控件添加到地图|
|zoomControl|Boolean|true|是否默认将缩放控件添加到地图|

##### &ensp;交互选项

| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|closePopupOnClick|Boolean|true|当你不想用户点击地图关闭消息弹出框时，请将其设置为false。|
|zoomSnap|Number|1|强制地图的缩放级别始终为此的倍数，特别是在`fitBounds()`放大或缩小之后。|
|zoomDelta|Number|1|控制地图的缩放级别多少后改变`zoomIn()`，`zoomOut()`，在键盘上点+或-，或者使用缩放控件。|
|trackResize|Boolean|true|确定地图在窗口尺寸改变时是否可以自动处理浏览器以更新视图.|
|boxZoom|Boolean|true|决定地图是否可被缩放到鼠标拖拽出的矩形的视图，鼠标拖拽时需要同时按住shift键.|
|doubleClickZoom|Boolean\String|true|决定地图是否可被双击缩放.|
|dragging|Boolean|true|决定地图是否可被鼠标或触摸拖动.|

##### &ensp;地图状态选项

| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|crs|[CRS]()|L.CRS.EPSG3857|使用的坐标系，当你不确定坐标系是什么时请不要更改.|
|center|[LatLng]()|true|初始化地图的地理中心.|
|zoom|Number|true|初始化地图的缩放.|
|minZoom|Number|true|地图的最小视图。可以重写地图图层的`minZoom`.|
|maxZoom|Number|true|地图的最大视图。可以重写地图图层的`maxZoom`.|
|layers|Layer[]|true|初始化后加载到地图上的图层.|
|maxBounds|[LatLngBounds]()|true|当这个选项被设置后，地图被限制在给定的地理边界内，当用户平移将地图拖动到视图以外的范围时会出现弹回的效果，并且也不允许缩小视图到给定范围以外的区域（这取决于地图的尺寸）。|
|renderer|[Renderer]()|true|在地图上绘制矢量图层的默认方法。[L.SVG]()或者[L.Canvas]()默认取决于浏览器支持。|

##### &ensp;动画选项

| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|zoomAnimation|Boolean|true|确定瓦片缩放动画是否可用。通常默认在所有浏览器中都支持CSS3转场，android例外.|
|zoomAnimationThreshold|Number|4|如果缩放差异超过此值，将不会动画缩放.|
|fadeAnimation|Boolean|true|确定瓦片淡出动画是否可用。通常默认在所有浏览器中都支持CSS3转场，android例外.|
|markerZoomAnimation|Boolean|true|确定注记的缩放是否随地图缩放动画而播放，如果被禁用，注记在动画中拉长时会消失。通常默认在所有浏览器中都支持CSS3转场，android例外.|
|transform3DLimit|Number|2^23|定义CSS转换转换的最大大小。默认值不应该改变，除非网页浏览器在做了很大的工作后在错误的位置放置图层panBy.|

##### &ensp;平移惯性选项

| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|inertia|Boolean|*|如果该选项可用，在拖动和在某一时间段内持续朝同一方向移动建有动力的地图时，会有惯性的效果.|
|inertiaDeceleration|Number|3000|确定惯性移动减速的速率，单位是像素每秒的二次方.|
|inertiaMaxSpeed|Number|Infinity|惯性移动的最大速度，单位是像素每秒.|
|easeLinearity|Number|0.2||
|worldCopyJump|Boolean|false|启用此选项后，地图会跟踪何时平移到世界的另一个“副本”.|
|maxBoundsViscosity|Number|0.0|如果maxBounds已设置，则此选项将控制拖动地图时边界的固定程度.|

##### &ensp;键盘导航选项
| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|keyboard|Boolean|true|聚焦到地图且允许用户通过键盘的方向键和+/-键来漫游地图.|
|keyboardPanDelta|Number|80|确定按键盘方向键时地图平移的像素.|

##### &ensp;鼠标滚轮选项
| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|scrollWheelZoom|Boolean\Sting|true|是否可以使用鼠标滚轮缩放地图。如果通过'center'，它将放大到视图的中心，而不管鼠标在哪里。|
|wheelDebounceTime|Number|40|限制车轮发射的速率（以毫秒为单位）。默认情况下，用户无法每40ms更频繁地通过滚轮进行缩放。|
|wheelPxPerZoomLevel|Number|60|意味着一个完整缩放级别的变化。较小的值将使车轮变焦更快（反之亦然）。|

##### &ensp;触感交互选项
| 选项 | 类型 | 默认 |    描述    |
|:---:|:---:|:---:|:-----------|
|tap|Boolean|true|支持即时点击的移动黑客。|
|tapTolerance|Number|15|用户在触摸过程中可以移动手指的最大像素数，因此可以认为它是有效的轻击。|
|touchZoom|Boolean\String|*|是否可以通过用两根手指拖动来缩放地图。|
|bounceAtZoomLimits|Boolean|true|如果您不想让地图缩小超过最小/最大缩放范围，然后在捏缩放时反弹回来，请将其设置为false。|

#### &ensp;事件
##### &ensp;图层事件

| 事件 | 数据 |   描述    |
|:---:|:---:|:-----------|
|baselayerchange|[LayersControlEvent]()|通过图层控件更改基础图层时触发。|
|overlayadd|[LayersControlEvent]()|通过图层控件选择叠加层时触发。|
|overlayremove|[LayersControlEvent]()|通过图层控件取消选择覆盖图时触发。|
|layeradd|LayerEvent|将新图层添加到地图时触发。|
|layerremove|LayerEvent|从地图中移除某个图层时触发。|

##### &ensp;映射状态更改事件
| 事件 | 数据 |   描述    |
|:---:|:---:|:-----------|
|zoomlevelschange|[Event]()|由于添加或移除图层而导致地图上缩放级别的数量发生更改时触发。|
|resize|[ResizeEvent]()|调整地图大小时触发。|
|unload|[Event]()|使用删除方法销毁地图时触发。|
|viewreset|[Event]()|当地图需要重新绘制其内容时（这通常发生在地图缩放或加载上）时触发。对创建自定义叠加非常有用。|
|load|[Event]()|初始化地图时（第一次设置中心和缩放时）触发。|
|zoomstart|[Event]()|地图缩放即将改变时（例如缩放动画之前）触发。|
|movestart|[Event]()|当地图视图开始变化时（例如，用户开始拖动地图）触发。|
|zoom|[Event]()|在缩放级别发生任何变化时反复发射，包括缩放和飞行动画。|
|move|[Event]()|在地图的任何移动过程中反复发射，包括平移和飞行动画。|
|zoomend|[Event]()|任何动画之后，当地图发生变化时触发。|
|moveend|[Event]()|地图中心停止改变时（例如，用户停止拖动地图）触发。|
<<<<<<< HEAD

**注:**
load事件说明：

```text
在地图状态改变事件中，load事件比较特殊，不同于click和zoom等事件的使用方法，如click事件的示例代码如下：
```

```javascript
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);
```

```text
如果简单的将'click'改为'load'将不会有任何效果，正确的解决方法是在加载地图之前将on('load', function(){......})添加进去，示例代码如下：
```
```javascript
var mymap = L.map('mapid').on('load', onMapClick).setView([30.51872, 114.39802], 12);
```

=======
>>>>>>> 3b418ea074c43dd67dd0062aec69a1183767a516

**Icon**
------

> 创建标记时显示的图标。

#### &ensp;使用实例

```javascript
var myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
```
> [L.Icon.Default]()是由[L.Icon]()拓展而来，表示在默认情况下，标记使用的是蓝色图标。

#### &ensp;创建

|方法 |描述 |
|:----:|:----|
|`L.icon()`|通过给定的选项创建图标实例。|

#### &ensp;选项

| 选项 | 类型 | 默认 | 描述 |
|:---:|:---:|:---:|:---|
|iconUrl|String|null|（必需）图标图像的URL（脚本中的绝对或相对路径）。|
|iconRetinaUrl|String|null|（图标图像视网膜版本的URL，用于视网膜屏幕的设备（脚本中的绝对或相对路径）。|
|iconSize|Point|null|图标图像的大小（以像素为单位）。|
|iconAnchor|Point|null|图标提示的坐标（在左上角）。图标将对齐，以便此点位于标记的地理位置。如果大小是指定的则此点位于中心处，也可以在CSS中设置负边界。|
|popupAnchor|Point|[0,0]|与图标锚相关的打开弹出框的点的坐标。|
|tooltipAnchor|Point|[0,0]|工具提示将相对于图标定位点“打开”的点的坐标。|
|shadowUrl|String|null|图标阴影图的URL。如果没有指定，图标没有阴影。|
|shadowRetinaUrl|String|null|图标在视网膜视图下的尺寸的URL。如果没有指定，图标没有阴影。用于视网膜屏幕的设备。|
|shadowSize|Point|null|阴影图像的大小（以像素为单位）。|
|shadowAnchor|Point|null|阴影“尖端”（相对于其左上角）的坐标（如果未指定，则与iconAnchor相同）。|
|className|String|''|图标和阴影图片的自定义的类名。默认为空。|

#### &ensp;方法

|方法 |返回值 | 描述|
|:----:|:----|:-----|
|`createIcon()`|HTML元素|当图标必须显示时在内部调用，返回一个<img>根据选项设计的HTML元素。|
|`createShadow()`|HTML元素|制作createIcon，作为它下面的阴影|

#### &ensp;Icon.Default

> A trivial subclass of Icon, represents the icon to use in Markers when no icon is specified. Points to the blue marker image distributed with Leaflet releases. In order to customize the default icon, just change the properties of L.Icon.Default.prototype.options (which is a set of Icon options). If you want to completely replace the default icon, override the L.Marker.prototype.options.icon with your own icon instead.

|选项 | 类型 | 默认 | 描述 |
|:----:|:----|:---:|:----|
|imagePath|String||[Icon.Default]()会尝试自动检测蓝色图标图像的位置。如果您以非标准方式放置这些图像，请将此选项设置为指向正确的路径。|

**DivIcon**
------

> 用div要素而非图片来轻量级地显示注记的图标。默认情况下，阴影会有一个小的白色的方形作为leaflet-div-icon类和样式。

#### &ensp;使用实例

```javascript
var myIcon = L.divIcon({className: 'my-div-icon'});
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
```
> 默认情况下，阴影会有一个小的白色的方形作为leaflet-div-icon类和样式。

#### &ensp;创建
| 构造函数 | 描述  |
|:-------:|:-----|
|`L.divIcon()`|用给定的选项实例化图标。|


#### &ensp;选项

|选项 | 类型 | 默认 | 描述 |
|:----:|:----|:---:|:----|
|html|String|''|在div要素中自定义的HTML代码，默认为空。|
|bgPos|Point|[0,0]|可选的背景相对位置，以像素为单位。|

> 从[Icon]()继承的选项

#### &ensp;方法

> 从[Icon]()继承的方法

<span id = "jump">FeatureGroup</span>