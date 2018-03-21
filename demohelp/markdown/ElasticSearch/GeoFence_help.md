## 地理围栏
[Bug提交地址,如有问题请提交问题说明,我们会及时响应](https://github.com/ParnDeedlit/WebClient-Mapbox/issues)

----

### 主要代码逻辑

这里的代码的主要逻辑如下:

**1.初始化操作**

    1.1 initMap 初始化地图

    1.2 initGeoFencePolygon 该函数主要获取用于网络请求的参数,传入的围栏的范围

    1.3 initGeoFence 地图显示地理围栏范围,更具不同的属性设置不同的颜色

    1.4 initTrackView 初始化地图中动态设备点的样式,如在围栏内蓝色,不在使用红色等

**2. 获取设备 异步操作**

    2.1 initCarIds 获取要监控的设备id列表

**3. 实时查询 异步操作**

    3.1 loadRealData 根据1.2获取的围栏范围以及2获取的设备列表来请求数据信息

    3.2 updateTrackView  根据上面请求的数据实时更新地图上的设备状态

----
### 查询设备id列表

``` html
http://192.168.17.237:8080/es/generalQuery?indexName=df_history&typeName=2017-12-17&spatialCondition=polygon:29.8439,121,5894;33,5194,107,9816;34.3662,108.3814&timeCondition=&queryField=imei
```

上面的字符串拼接可以使用els-mapgis中的getRangeIdsUri来实现.使用方式
~~~ html
<script include="els-mapgis,geojson" src="libs/zondyclient/include-mapboxgl.js"></script>
~~~

#### 参数表格

|名称|类型|说明|
|:---|:---|:---|
|indexName|索引名称|这个对应的是传统数据库的名称|
|typeName|表名|这个对应的是传统数据库的某张表的名称,可以为`空`|
|spatialCondition|几何查询条件|只支持`circle`, `polygon`两种|
|timefield|时间字段|`时间字段名称`，对应的时间属性字段，不给内部自动判断数字长整型|
|timeCondition|时间条件|~~~ **这里无需传入时间条件,这里永远是获取的数据库最新的数据,以服务器端数据库为准** ~~~|

** spatialCondition **
> circle:lat,lon,radio    `中心点`,纬度在前，经度在后; `半径`,单位是`千米`, **示例:`circle:114,30,2`**
> polygon:lat,lon;lat,lon;lat,lon　`传一组坐标点，头尾无需是相同点` **示例:`polygon:40,110;40,120;30,120;30,110`**

----

----

### 判断是否进入/离开围栏

> rest服务： GET类型

> 这里实际逻辑是前端每次每隔一段时间像后台请求是否在某个围栏里面，每次都是｀多个设备｀判断这次提交的一组围栏是否与其相交，是多个设备共用同一组围栏的意思

``` html
http://192.168.17.237:8080/es/GeoEnclosureQuery?indexName=df_history&typeName=2017-12-17&spatialCondition=polygon:33.5021,107.98004;33.5081,107.98204;35.5261,107.97814&timefield=dataTime&idfield=imei&ids=4de781cb1802480b2470eff029a32a0a
```
----
#### 参数表格

|名称|类型|说明|
|:---|:---|:---|
|indexName|索引名称|这个对应的是传统数据库的名称|
|typeName|表名|这个对应的是传统数据库的某张表的名称,可以为`空`|
|spatialCondition|几何查询条件|只支持`circle`, `polygon`两种|
|timefield|时间字段|`时间字段名称`，对应的时间属性字段，不给内部自动判断数字长整型|
|idfield|id字段|`设备id字段名称`|
| ids|id列表|以逗号分割 例"1,2,3"`一组id`|

** spatialCondition **
> circle:lat,lon,radio    `中心点`,纬度在前，经度在后; `半径`,单位是`千米`, **示例:`circle:114,30,2`**
> polygon:lat,lon;lat,lon;lat,lon　`传一组坐标点，头尾无需是相同点` **示例:`polygon:40,110;40,120;30,120;30,110`**


----

#### 返回值
|名称|类型|说明|
|:---|:---|:---|
|result|布尔值|**在围栏内**为true; ~~不在围栏内~~为false|
|geo|Json对象| **geo:{lon:110,lat:34}**|
