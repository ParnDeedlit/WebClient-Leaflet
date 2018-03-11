(function () {
  var r = new RegExp("(^|(.*?\\/))(include-leaflet\.js)(\\?|$)"),
      s = document.getElementsByTagName('script'), targetScript;
  for (var i = 0; i < s.length; i++) {
    var src = s[i].getAttribute('src');
    if (src) {
      var m = src.match(r);
      if (m) {
        targetScript = s[i];
        break;
      }
    }
  }

  function inputScript(url) {
    var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
    document.writeln(script);
  }

  function inputCSS(url) {
    var css = '<link rel="stylesheet" href="' + url + '">';
    document.writeln(css);
  }

  function inArray(arr, item) {
    for (i in arr) {
      if (arr[i] == item) {
        return true;
      }
    }
    return false;
  }

  //comman leaflet librarys
  function load() {
    var onInternetMode = true;
    var ip = targetScript.getAttribute('ip');
    var socket = targetScript.getAttribute('socket');

    var includes = (targetScript.getAttribute('include') || "").split(",");
    var excludes = (targetScript.getAttribute('exclude') || "").split(",");

    var httpUrl = "";

    if(ip && socket){
      onInternetMode = false;//区域网模式
    }else{//互联网模式
      onInternetMode = true;
    }

    if(onInternetMode){
      httpUrl = "http://182.61.52.190:8800";//"http://www.smaryun.com";
    }else{
      httpUrl = "http://" + ip + ":" + socket + "";
    }

    if (!inArray(excludes, 'leaflet')) {
      inputCSS(httpUrl + "/cdn/leaflet/leaflet.css");
      inputScript(httpUrl + "/cdn/leaflet/leaflet.js");
    }
    // if (!inArray(includes, 'wmts')) {
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet-tilelayer-wmts.js");
    // }
    // if (inArray(includes, 'turf')) {
    //    inputScript("http://" + ip + ":" + socket + "/cdn/turf/turf.min.js");
    // }
    // if (inArray(includes, 'mapv')) {
    //    inputScript("http://" + ip + ":" + socket + "/cdn/mapv/mapv.min.js");
    // }
    // if (inArray(includes, 'echarts')) {
    //    inputScript("http://" + ip + ":" + socket + "/cdn/echarts/echarts.js");
    // }
    if (inArray(includes, 'cluster')) {
        //https://unpkg.com/leaflet.markercluster@1.3.0/dist/
        inputCSS(httpUrl + "/cdn/leaflet-plugins/Leaflet.markercluster-1.3.0/dist/MarkerCluster.css");
        inputCSS(httpUrl + "/cdn/leaflet-plugins/Leaflet.markercluster-1.3.0/dist/MarkerCluster.Default.css");
        inputScript(httpUrl + "/cdn/leaflet-plugins/Leaflet.markercluster-1.3.0/dist/leaflet.markercluster.js");
    }
    // if (inArray(includes, 'marker')) {
    //    inputCSS("http://" + ip + ":" + socket + "/cdn/leaflet plugins/font-awesome.css");
    //    inputCSS("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet.awesome-markers.css");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet.awesome-markers.js");
    // }
    if (inArray(includes, 'heater')) {
       inputScript(httpUrl + "/cdn/leaflet-plugins/Leaflet.heat/dist/leaflet-heat.js");
    }
    if (inArray(includes, 'animate-marker')) {
       inputScript(httpUrl + "/cdn/leaflet-plugins/Leaflet.AnimatedMarker/src/AnimatedMarker.js");
    }
    if (inArray(includes, 'realmove-marker')) {
       inputScript(httpUrl + "/cdn/leaflet-plugins/Leaflet.MovingMarker/MovingMarker.js");
    }
    if (inArray(includes, 'elasticsearch')) {
       inputScript(httpUrl + "/cdn/elasticsearch/14.1.0/elasticsearch.min.js");
    }
    if (inArray(includes, 'ant-path')) {
       inputScript(httpUrl + "/cdn/leaflet-plugins/leaflet-ant-path/dist/leaflet-ant-path.js");
    }
    if (inArray(includes, 'migrate')) {
       inputScript(httpUrl + "/cdn/leaflet-plugins/leaflet.MigrationLayer/dist/leaflet.migrationLayer.js");
    }
    // if (inArray(includes, 'label')) {
    //   /*
    //      @ info - this function is conflit to cluster, so if you want to use this
    //        function,please don`t use cluster function
    //      @ property - {module} label linkto https://github.com/Leaflet/Leaflet.label
    //      @ author - Zondy PanZhuoran.ParnDeedlit
    //    */
    //    inputCSS("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet.label.css");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet.label.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.Label.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.BaseMarkerMethods.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.Marker.Label.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.CircleMarker.Label.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.Path.Label.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.Map.Label.js");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/label.FeatureGroup.Label.js");
    // }
    // if (inArray(includes, 'popup')) {
    //    inputCSS("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet.responsive.popup.css");
    //    inputScript("http://" + ip + ":" + socket + "/cdn/leaflet plugins/leaflet.responsive.popup.js");
    // }
  }

  load();
  window.isLocal = false;
  window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8800" : 'http://' + document.location.host;
})();
