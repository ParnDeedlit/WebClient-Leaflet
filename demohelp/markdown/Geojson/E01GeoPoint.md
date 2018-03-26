#### GeoJSON
------

> GeoJSON是一种对各种地理数据结构进行编码的格式。GeoJSON对象可以表示几何、特征或者特征集合。GeoJSON支持下面几何类型：`点`、`线`、`面`、`多点`、`多线`、`多面`和`几何集合`。GeoJSON里的特征包含一个`几何对象`和`其他属性`，特征集合表示一系列特征。

##### 提交BUG
> 找到bug请提交，我们会及时解决[issue](https://github.com/ParnDeedlit/WebClient-Leaflet/issues)。

#### GeoJSON-Point
------

***注：*** 对类型"Point"来说，“coordinates"成员必须是一个单独的位置。

标准数据格式：
```javascript
var Point = {
    "type": "Feature",
    "geometry": {
        "type": "Point", 
        "coordinates": [102.0, 0.5]},
    "properties": {
        "prop0": "value0"
    }
}
```






