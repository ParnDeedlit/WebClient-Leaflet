### WMS与TMS

------
WMS（Web Map Service），网络地图服务。

TMS（Tile Map Service），切片地图服务。

> leaflet不能直接使用WMS文件，需要通过创建L.TileLayer.WMS图层，提供WMS的url并在配置选项中添加layer选项。**WMS中的“layer”与leaflet中的“layer是不同概念的”**

##### 示例代码如下:
```javascript
var map = L.map(mapDiv, mapOptions);

var wmsLayer = L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', wmsOptions).addTo(map);
```

### 图层组合方式
##### 示例代码如下：
```javascript
var basemaps = {
    Countries: L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', {
        layers: 'ne:ne_10m_admin_0_countries'
    }),

    Boundaries: L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', {
        layers: 'ne:ne_10m_admin_0_boundary_lines_land'
    }),

    'Countries, then boundaries': L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', {
        layers: 'ne:ne_10m_admin_0_countries,ne:ne_10m_admin_0_boundary_lines_land'
    }),

    'Boundaries, then countries': L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/ows?', {
        layers: 'ne:ne_10m_admin_0_boundary_lines_land,ne:ne_10m_admin_0_countries'
    })
};
```
> 代码说明：前两种'layer'方式是单独加载进去，在leaflet上的展示依赖leaflet代码执行，也就是有两个请求；后两种'layer'方式通过","分离隔开，只需要一个请求，他们的组合方式依赖WMS服务器来完成。
