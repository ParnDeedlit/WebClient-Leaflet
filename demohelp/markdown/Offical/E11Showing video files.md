### Video on leaflet
```text
说明：首先将基础图层加载进leaflet，然后选择在合适的区域放
置video。通过两点确定区域，分别上左上角和右下角两点。
```
##### 示例代码如下：
```javascript
var bounds = L.latLngBounds([[ 32, -130], [ 13, -100]]);
```
**注：**
若想确定所选区域的大小，可以通过以下代码，将所选择的区域展示在页面上。
```javascript
L.rectangle(bounds).addTo(map);
map.fitBounds(bounds);
```