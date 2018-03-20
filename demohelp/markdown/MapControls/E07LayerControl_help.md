<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
    <title>图层选择控件</title>
    <link href="../../css/helpstyle.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div class="biaoti">
        图层选择控件
    </div>    
    <div class="xiaobiaoti">
        一、示例功能
    </div>
    <div class="zhengwen">
        该示例通过自定义图层选择控件，实现了加载不同图层的功能。
    </div>
    <div class="xiaobiaoti">
        二、实现说明:
    </div>
    <div class="zhengwen">
        1、数据：使用一个OSM的世界地图，一个Bing地图道路图层，一个Bing地图航拍影像图层，以及一个Json格式国界矢量图和一个KML格式矢量图。<br />
        <br />
        2、实现步骤：
        <br />
        <br />
        [地图显示]<br />
        <br />
        （1）先引入ol.js（ol是一个专为WebGIS客户端开发提供的JavaScript 类库包，用于实现标准格式发布的地图数据访问。OpenLayers 3对OpenLayers网络地图库进行了根本的重新设计。openlayer2虽然被广泛使用，但从JavaScript开发的早期发展阶段开始，已日益显示出它的落后。
        OL3已运用现代的设计模式从底层重写。）、ol.css（是地图样式文件，包含了地图样式的方方面面，例如，填充色、图标样式、图片样式、规则图形样式、边界样式、文字样式等，样式一般针对矢量要素图层。）；
        <br />
        <br />
        （2）再创建一个ID为“mapCon”的div层，并设置其样式；
        <br />
        <br />
        （3）然后在body标签里面编写地图显示的脚本。
        &nbsp; &nbsp;1)创建ol.source.OSM()类，获取OSM世界地图；<br /><br />
        &nbsp; &nbsp;2)创建ol.layer.Tile()类，通过设置该类的source属性显示OSM世界地图；<br /><br />
        &nbsp; &nbsp;3)创建ol.source.BingMaps()类，通过设置该类的imagerySet属性获取Bing地图道路图层和卫星影像图层；<br /><br />
        &nbsp; &nbsp;4)创建ol.layer.Tile()类，通过设置该类的source属性显示Bing地图道路图层和卫星影像图层；<br /><br />
        &nbsp; &nbsp;5)创建ol.source.Vector()类，通过设置该类的url属性获取Json格式和KML格式数据，通过设置该类的format属性解析数据；<br /><br />
        &nbsp; &nbsp;6)创建ol.layer.Vector()类，通过设置该类的source属性显示一个Json格式国界矢量图和一个KML格式矢量图；<br /><br />
        &nbsp; &nbsp;7)创建ol.map()类，通过设置该类的layers属性加载上述图层，再通过设置该类的view属性确定地图的显示中心和级别。<br /><br />
        <br />
        [添加控件]<br />
        <br />
        （4）创建图层目录容器，获取所有图层名称和属性，创建复选框元素，为复选框添加变更事件addChangeEvent()；
        <br />
        <br />
        （5）最后通过自定义的loadLayersControl(）方法将自定义图层选择控件添加到地图容器中。
    </div>
    <div class="xiaobiaoti">
        三、功能类/参数说明
    </div>
    <div class="zhengwen">
        <font class="Class">1、ol.Map类：</font>该类是一个地图容器类<br />
        <br />
        <font class="constructorTile">1.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.Map(options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">options：</font>（object类型）可选项，设置该对象其他属性，以键值对的形式设置。<br />
            <font class="nextParameter">【1】target：</font>（Element | string | undefined）可选项，指定地图所在的网页div元素的id，例如代码中：'mapCon'。如果在构建时未指定，则必须调用ol.Map()类的setTarget()方法以便绘制地图。<br />
            <font class="nextParameter">【2】layers：</font>（Array-[ol.layer.Base] | ol.Collection[ol.layer.Base | undefined]）可选项，指定加载的图层。如果未定义，则将呈现不包含图层的地图（图层是按提供的顺序呈现的，如果想要矢量图层显示在瓦片图层顶部，则必须位于瓦片图层之后）。<br />
            <font class="nextParameter">【3】view：</font>（ol.View | undefined）可选项，设置地图显示视图。如果在构建时未指定，则必须通过ol.Map()类的setView()方法指定，否则不会提取图层源。<br />
        </div>
        <font class="funDescription">1.2 方法说明：</font>
        <br />
        <div class="zhuji">
            <font class="functionName">render()：</font>请求地图渲染（下一帧动画）。<br />
            <font class="functionName">getEventPixel(event)：</font>获取相对于浏览器窗口的地图像素位置。<br />
            <font class="nextParameter">event：</font>(event）事件。<br />
            <font class="functionName">getView()：</font>获取地图视图。返回值为{ol.View}类。<br />
            <font class="functionName">addLayer(layer)：</font>将地图图层添加到地图容器中。<br />
            <font class="nextParameter">layer：</font>(ol.layer.Base）地图图层。<br />
            <font class="functionName">removeLayer(layer)：</font>将图层从地图容器中移除。<br />
            <font class="nextParameter">layer：</font>(ol.layer.Base）地图图层。<br />
        </div>
        <font class="Class">2、ol.layer.Tile类：</font>该类是一个瓦片图层类，用于显示瓦片资源。这些瓦片提供了预渲染，并且由特定分辨率的缩放级别组织的瓦片图片网格组成。<br />
        <br />
        <font class="constructorTile">2.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.layer.Tile(options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">options：</font>（object类型）可选项，设置该对象其他属性，以键值对的形式设置。<br />
            <font class="nextParameter">【1】source：</font>（ol.source.Tile）必填项。为图层设置来源、服务地址。<br />
        </div>
        <font class="Class">3、ol.source.OSM类：</font>OpenStreetMap瓦片图层资源。<br />
        <br />
        <font class="constructorTile">3.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.source.OSM(opt_options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">opt_options：</font>（object类型）可选项，设置该图层的配置选项，以键值对的形式设置。<br />
            <font class="nextParameter">【1】cacheSize：</font>（number|undefined）可选项，设置缓存大小。<br />默认是2048。<br />
            <font class="nextParameter">【2】crossOrigin：</font>（null|string|undefined）可选项，设置加载瓦片的跨域属性。<br />默认是匿名的。<br />
            <font class="nextParameter">【3】maxZoom：</font>（number|undefined）可选项，设置最大放大级别。<br />默认是19。<br />
            <font class="nextParameter">【4】opaque：</font>（boolean|undefined）可选项，设置图层是否是不透明的。<br />默认是true。<br />
            <font class="nextParameter">【5】reprojectionErrorThreshold：</font>（number|undefined）可选项，设置重投影允许的最大误差（以像素为单位）。设置值越大，精度越低。<br />默认是0.5。<br />
            <font class="nextParameter">【6】tileLoadFunction：</font>（ol.TileLoadFunctionType|undefined  ）可选项，设置通过给定的URL加载瓦片的功能。<br />默认是function(imageTile, src) {imageTile.getImage().src = src; };<br />
            <font class="nextParameter">【7】url：</font>（string|undefined）可选项，设置url模板。<br />默认为https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png。<br />
            <font class="nextParameter">【8】wrapX：</font>（boolean|undefined）可选项，设置是否在地图水平坐标轴上重复。<br />默认是true。
        </div>
        <font class="Class">4、ol.source.BingMaps类：</font>必应地图的瓦片资源。<br />
        <br />
        <font class="constructorTile">4.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.source.BingMaps(options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">options：</font>（object类型）可选项，设置该图层的配置选项，以键值对的形式设置。<br />
            <font class="nextParameter">【1】key：</font>（string类型）必选项。必应瓦片地图API密钥。<br />
            <font class="nextParameter">【2】imagerySet：</font>（string类型）必选项。设置必应瓦片地图类型。 例如："Road","Aerial","AerialWithLabels", "collinsBart", "ordnanceSurvey"。详细介绍如下：<br />
            <font class="nextParameter">&nbsp;&nbsp;&nbsp;"Road"：</font>卫星拍摄道路影像。<br />
            <font class="nextParameter">&nbsp;&nbsp;&nbsp;"Aerial"：</font>航拍影像。<br />
            <font class="nextParameter">&nbsp;&nbsp;&nbsp;"AerialWithLabels"：</font>道路覆盖航拍影像。<br />
            </font>
        </div>
        <font class="Class">5、ol.layer.Vector类：</font>用于显示在客户端渲染的矢量数据。<br />
        <br />
        <font class="constructorTile">5.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.layer.Vector(opt_options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">opt_options：</font>（object类型）可选项，设置该图层的配置选项，以键值对的形式设置。<br />
            <font class="nextParameter">【1】source：</font>（string）必选项，设置矢量图层数据来源。<br />
            <font class="nextParameter">【2】style：</font>（ol.style.Style | Array-[ol.style.style] | ol.StyleFunction | undefined）图层样式，一个ol.style.Style或者一个ol.style.Style数组，或者一个返回 ol.style.Style 的函数。<br />
        </div>
        <font class="Class">6、ol.source.Vector类：</font>矢量要素来源。<br />
        <br />
        <font class="constructorTile">6.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.source.Vector(opt_options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">opt_options：</font>（object类型）可选项，设置该图层的配置选项，以键值对的形式设置。<br />
            <font class="nextParameter">【1】url：</font>（string | ol.FeatureUrlFunction | undefined）可选项，矢量图层数据的url。<br />
            <font class="nextParameter">【2】format：</font>（ol.format.Feature | undefined）可选项，url属性设置后，XHR方式加载要素使用的数据格式。<br />默认是未定义的。<br />&nbsp;&nbsp;注意：如果设置了url，format一定要设置，否则可以忽略。<br />
            <font class="nextParameter">【3】attribution：</font>（ol.AttributionLike | undefined）可选项，地图右下角的 logo 包含的内容。<br />
            <font class="nextParameter">【4】features：</font>（Array-[ol.feature] | ol.Collection-[ol.feature] | undefined）可选项，地理要素，从字符串读取的数据。<br />
            <font class="nextParameter">【5】loader：</font>（ol.FeatureLoader | undefined）可选项，加载要素使用的加载函数。<br />
            <font class="nextParameter">【6】logo：</font>（string | olx.LogoOptions | undefined）可选项，logo包含的内容。<br />
            <font class="nextParameter">【7】strategy：</font>（ol.LoadingStrategy | undefined）可选项，加载要素使用的策略。<br />默认是一次性加载所有要素。<br />
            <font class="nextParameter">【8】wrapX：</font>（boolean | undefined）可选项，是否在地图水平坐标轴上重复。<br />默认是 true。<br />
        </div>
        <font class="Class">7、ol.format.GeoJSON类：</font>操作GeoJSON数据，包括各种读写方法。<br />
        <br />
        <font class="constructorTile">7.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor"> ol.format.GeoJSON(opt_options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">opt_options：</font>（object类型）可选项，设置该图层的配置选项，以键值对的形式设置。<br />
            <font class="nextParameter">【1】defaultDataProjection：</font>（ol.ProjectionLike）可选项，数据默认坐标系。<br />默认是EPSG:4326,即为地理坐标系。<br />
            <font class="nextParameter">【2】featureProjection：</font>（ol.ProjectionLike）可选项，通过format解析的要素坐标系。<br />
            <font class="nextParameter">【3】geometryName：</font>（string | undefined）可选项，创建要素时几何要素名。<br />
        </div>
        <font class="Class">8、ol.format.KML类：</font>操作KML数据，包括各种读写方法。<br />
        <br />
        <font class="constructorTile">8.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor"> ol.format.KML(opt_options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">opt_options：</font>（object类型）可选项，设置该图层的配置选项，以键值对的形式设置。<br />
            <font class="nextParameter">【1】extractStyles：</font>（boolean | undefined）可选项，是否提取KML样式。<br />默认是true。<br />
            <font class="nextParameter">【2】showPointNames：</font>（boolean | undefined）可选项，是否显示地点标记名称。<br />默认是true。<br />
            <font class="nextParameter">【3】defaultStyle：</font>（Array-[l.style.style] | undefined）可选项，默认样式。<br />默认缺省样式为Google Earth。<br />
            <font class="nextParameter">【4】writeStyles：</font>（boolean | undefined）可选项，是否给KML写入样式 。<br />默认是true。<br />
        </div>
        <font class="Class">9、ol.View类：</font>该类是一个地图显示视图类。ol.View对象是地图初始化必备三要素之一，表示一个简单的二维视图的映射，主要控制地图与用户的交互，如进行缩放，调节分辨率、地图的旋转等。<br />
        <br />
        <font class="constructorTile">9.1 构造函数：</font>
        <br />
        <div class="zhuji">
            <font class="constructor">ol.View(opt_options)</font><br />
            <br />
            <font class="paraDescription">参数说明：</font>
            <br />
            <font class="parameter">opt_options：</font>（Object类型）可选项，设置该对象其他属性，以键值对的形式设置。<br />
            <font class="nextParameter">【1】center：</font>（ol.Coordinate|undefined）可选项，设置地图显示中心；<br />
            <font class="nextParameter">【2】zoom：</font>（number|undefined）可选项，设置地图的显示级数。<br />
            <font class="nextParameter">【3】minZoom：</font>（number|undefined）可选项，设置地图最小缩放级别，它与maxZoom(或minResolution)和zoomFactor一起使用，如果同时给出maxResolution,maxResolution优先级高于minZoom。<br />默认值为0。<br />
            <font class="nextParameter">【4】maxZoom：</font>（number|undefined）可选项，设置地图最大缩放级别，它与minZoom(或maxResolution)和zoomFactor一起使用，如果同时给出minResolution,minResolution优先级高于maxZoom。<br />默认值为28。<br />
            <font class="nextParameter">【5】rotation：</font>（number|undefined）可选项，设置初始视图的旋转弧度（顺时针方向)。<br />默认值为0。<br />
            <font class="nextParameter">【6】projection：</font>（ol.ProjectionLike）可选项，地图的投影坐标系。<br />默认为EPSG:3857，即墨卡托坐标系。<br />
        </div>
        <font class="funDescription">9.2 方法说明：</font>
        <br />
        <div class="zhuji">
            <font class="functionName">setCenter(center)：</font>设置地图视图的中心坐标。<br />
            <font class="nextParameter">center：</font>(ol.Coordinate | undefined）地图视图的中心坐标。<br />
            <font class="functionName">setZoom(zoom)：</font>设置地图视图的缩放级别。<br />
            <font class="nextParameter">zoom：</font>(number）地图视图的缩放级别。<br />
        </div>
        <p>
            <a href="http://openlayers.org/en/latest/apidoc/" alt="OpenLayers 3 API。"
               target="_blank">注：详细说明请参见OpenLayers3 API手册。</a>
        </p>
    </div>
</body>
</html>
