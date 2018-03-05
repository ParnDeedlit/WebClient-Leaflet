## 交互式分级统计图
### 一、数据引入
**注:**
本例中将Geojson数据单独保存在js脚本中，直接在HTML页面中以标签引入。

> * Geojson是数据格式示例：

```javascript
{
    "type": "Feature",
    "properties": {
        "name": "Alabama",
        "density": 94.65
    },
    "geometry": ...
    ...
}
```

> * 引入代码：
```javascript
//标签引入数据脚本
<script src="../../js/us-states.js"></script>
//L.geoJson方法
L.geoJson(statesData).addTo(map);
```

### 二、颜色标记
1.首先根据数值范围，对数据进行阶梯式分级，并用相近颜色的不同深浅或者不同颜色来进行表示。

> * 分级函数代码如下：

```javascript
    function getColor(d) {               
        return d > 1000 ? '#800026' :
            d > 500  ? '#BD0026' :
                d > 200  ? '#E31A1C' :
                    d > 100  ? '#FC4E2A' :
                        d > 50   ? '#FD8D3C' :
                            d > 20   ? '#FEB24C' :
                                d > 10   ? '#FED976' :
                                    '#FFEDA0';
    }
```

2.通过样式函数获取Geojson数据中的具体数值，赋予其不同颜色。

> * 样式函数代码如下：

```javascript
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
```

3.通过L.geoJson方法引入，代码如下：

```javascript
L.geoJson(statesData, {style: style}).addTo(map);
```

