# 地理围栏
## rest服务： GET类型

> 这里实际逻辑是前端每次每隔一段时间像后台请求是否在某个围栏里面，每次都是｀多个设备｀判断这次提交的一组围栏是否与其相交，是多个设备共用同一组围栏的意思

``` html
http://192.168.17.237:8080/es/GeoEnclosureQuery?indexName=df_history&typeName=2017-12-17&spatialCondition=polygon:33.5021,107.98004;33.5081,107.98204;35.5261,107.97814&timefield=dataTime&idfield=imei&ids=4de781cb1802480b2470eff029a32a0a
```

+ indexName：索引名称
+ typeName：表名
+ spatialCondition：几何。例：
  - circle:lat,lon,radio `中心点`,纬度在前，经度在后  　`半径`,单位是`千米`
  - polygon:lat,lon;lat,lon;lat,lon　`传一组坐标点，头尾无需是相同点`
+ timefield:时间字段   `时间字段名称`，对应的时间属性字段，不给内部自动判断数字型
+ idfield:id字段　　　`设备id字段名称`
+ ids:id列表 以逗号分割 例"1,2,3"　　`一组id`

返回值
+ result (true/false)
+ 坐标点

# 时空查询
rest服务：
http://192.168.17.237:8080/es/stQuery?indexName=df_history&typeName=2017-12-17&spatialCondition=polygon:29.843798,121.58775;29.843746,121.586464;29.845467,121.5646&timeCondition=1321312354,123123130&IDs=&otherProperty=&pageNo=1&pageSize=10
+ indexName：索引名称
+ typeName：表名
+ spatialCondition：几何条件 例：
  - pnt:lat,lon   `实际上是circle容差查询`
  - circle:lat,lon,r(radio)  
  - rect:xmin,ymin,xmax,ymax    
  - polygon:lat,lon;lat,lon;lat,lon
+ timeCondition:时间条件 例time:from,to  form,to是long型/int/long long等可以比较的类型
  - 支持时间戳
  - `不支持date格式`
+ IDs:id列表 暂时传为空，　目前没实现功能
+ otherProperty:其它属性条件 例  att=hello
+ pageNo:从第几页查询　　`类似els官方的scoll语法的scollid`,默认保持心跳时间是`4分钟`
+ pageSize：每页查询多少条记录 `类似els官方的scoll语法的size`

# 时空聚合查询
rest服务
http://192.168.17.237:8080/es/stQueryByAgg?indexName=df_history&typeName=2017-12-17&spatialCondition=polygon:29.843798,121.58775;29.843746,121.586464;29.845467,121.5646&timeCondition=&otherProperty=&aggfield=speed&aggtype=avg
indexName：索引名称
typeName：表名
spatialCondition：几何条件，同时空查询一致
timeCondition：时间条件，同时空查询一致
otherProperty：其它属性条件，同时空查询一致
aggfield：要聚合的字段，类型必须为数值型
aggtype：聚合方式，分为max、min、sum、avg、count、StdDev（标准差）、sumOfSqu（平方和）、variance（方差）八种方式
