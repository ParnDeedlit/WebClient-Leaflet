## Json地理数据转换为GeoJSON
```text
Turn your geo data into GeoJSON.
```
**注：**
使用GeoJSON脚本库的`parse()`方法，可以将一组或单个地理数据对象转换为GeoJSON数据。

### ①一组对象
#### 代码示例：
```javascript
var data = [
  { name: 'Location A', category: 'Store', street: 'Market', lat: 39.984, lng: -75.343 },
  { name: 'Location B', category: 'House', street: 'Broad', lat: 39.284, lng: -75.833 },
  { name: 'Location C', category: 'Office', street: 'South', lat: 39.123, lng: -74.534 }
];
GeoJSON.parse(data, {Point: ['lat', 'lng']});
//如果不需要全部的properties,则使用下面这个句子选择性的添加：
GeoJSON.parse(data, {Point: ['lat', 'lng'], include: ['name']});
//只保留了name属性
```
> * 转换结果如下：

```javascript
var output = {
  "type": "FeatureCollection",
  "features": [
    { "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [-75.343, 39.984]},
      "properties": {
        "name": "Location A",
        "category": "Store"
      }
    },
    { "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [-75.833, 39.284]},
      "properties": {
        "name": "Location B",
        "category": "House"
      }
    }
  ]
};
```

### ②单个对象
#### 代码示例：
```javascript
var singleobject = { name: 'Location A', category: 'Store', street: 'Market', lat: 39.984, lng: -75.343 }
GeoJSON.parse(singleobject, {Point: ['lat', 'lng']});
```
> * 转换结果如下：
```javascript
 var output = {
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [-75.343, 39.984]},
    "properties": {
      "name": "Location A",
      "category": "Store"
    }
  }; 
```
### ③对象之间拥有相同属性
**注：**
若数据对象拥有相同特性，则可以通过include取它们共同的特性。
#### 代码示例：
```javascript
var data1 = [{ name: 'Location A', street: 'Market', x: 34, y: -75 }];
 
var data2 = [{ name: 'Location B', date: '11/23/2012', x: 54, y: -98 }];
 
GeoJSON.defaults = {Point: ['x', 'y'], include: ['name']};
 
GeoJSON.parse(data1, {});
GeoJSON.parse(data2, {});
```
> * 转换结果如下：
```javascript
var output = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-75, 34]
      },
      "properties": {
        "name": "Location A"
      }
    }
  ]
};
var output1 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-98, 54]
        },
        "properties": {
          "name": "Location B"
        }
      }
    ]
  };
```

