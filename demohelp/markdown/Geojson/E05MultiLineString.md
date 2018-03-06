### GeoJSON-MultiLineString

```text
对类型“MultiLineString"来说，"coordinates"成员
必须是一个线坐标数组的数组。
```

> * 标准数据格式：

```javascript
var MultiLine = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "MultiLineString",
            "coordinates": [
                [
                    [
                        114.30862426757812,
                        30.65533885862785
                    ],
                    [
                        114.23755645751953,
                        30.55191344082329
                    ]
                ],[
                    [
                        114.3134307861328,
                        30.677191798461496
                    ],
                    [
                        114.38827514648437,
                        30.528849308009075
                    ]
                ]
            ]
        }
    };
```
