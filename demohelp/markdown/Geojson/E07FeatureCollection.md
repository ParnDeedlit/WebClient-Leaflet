### Geojson特征集合数据格式：

> * 标准数据格式如下：
```javascript
 var FeaCollection = {
        "type":"FeatureCollection",
        "features":[]
    }
```

#### 注:
若访问对象路径过长时，可以通过赋值给变量的方法来解决：
```javascript
var item = data.aggregations.mapExtent.geohash.buckets[i];
var coordinate = decodeGeoHashToPolygon(item.key);
```
