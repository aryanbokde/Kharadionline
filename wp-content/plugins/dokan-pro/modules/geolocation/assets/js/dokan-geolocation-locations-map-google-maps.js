(()=>{"use strict";function t(e,r,o){this.extend(t,google.maps.OverlayView),this.map_=e,this.markers_=[],this.clusters_=[],this.sizes=[53,56,66,78,90],this.styles_=[],this.ready_=!1;var i=o||{};this.gridSize_=i.gridSize||60,this.minClusterSize_=i.minimumClusterSize||2,this.maxZoom_=i.maxZoom||null,this.styles_=i.styles||[],this.imagePath_=i.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_,this.imageExtension_=i.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_,this.zoomOnClick_=!0,null!=i.zoomOnClick&&(this.zoomOnClick_=i.zoomOnClick),this.averageCenter_=!1,null!=i.averageCenter&&(this.averageCenter_=i.averageCenter),this.setupStyles_(),this.setMap(e),this.prevZoom_=this.map_.getZoom();var s=this;google.maps.event.addListener(this.map_,"zoom_changed",(function(){var t=s.map_.getZoom(),e=s.map_.minZoom||0,r=Math.min(s.map_.maxZoom||100,s.map_.mapTypes[s.map_.getMapTypeId()].maxZoom);t=Math.min(Math.max(t,e),r),s.prevZoom_!=t&&(s.prevZoom_=t,s.resetViewport())})),google.maps.event.addListener(this.map_,"idle",(function(){s.redraw()})),r&&(r.length||Object.keys(r).length)&&this.addMarkers(r,!1)}function e(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinClusterSize(),this.averageCenter_=t.isAverageCenter(),this.center_=null,this.markers_=[],this.bounds_=null,this.clusterIcon_=new r(this,t.getStyles(),t.getGridSize())}function r(t,e,o){t.getMarkerClusterer().extend(r,google.maps.OverlayView),this.styles_=e,this.padding_=o||0,this.cluster_=t,this.center_=null,this.map_=t.getMap(),this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(this.map_)}t.prototype.MARKER_CLUSTER_IMAGE_PATH_="../images/m",t.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png",t.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},t.prototype.onAdd=function(){this.setReady_(!0)},t.prototype.draw=function(){},t.prototype.setupStyles_=function(){if(!this.styles_.length)for(var t,e=0;t=this.sizes[e];e++)this.styles_.push({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:t,width:t})},t.prototype.fitMapToMarkers=function(){for(var t,e=this.getMarkers(),r=new google.maps.LatLngBounds,o=0;t=e[o];o++)r.extend(t.getPosition());this.map_.fitBounds(r)},t.prototype.setStyles=function(t){this.styles_=t},t.prototype.getStyles=function(){return this.styles_},t.prototype.isZoomOnClick=function(){return this.zoomOnClick_},t.prototype.isAverageCenter=function(){return this.averageCenter_},t.prototype.getMarkers=function(){return this.markers_},t.prototype.getTotalMarkers=function(){return this.markers_.length},t.prototype.setMaxZoom=function(t){this.maxZoom_=t},t.prototype.getMaxZoom=function(){return this.maxZoom_},t.prototype.calculator_=function(t,e){for(var r=0,o=t.length,i=o;0!==i;)i=parseInt(i/10,10),r++;return{text:o,index:r=Math.min(r,e)}},t.prototype.setCalculator=function(t){this.calculator_=t},t.prototype.getCalculator=function(){return this.calculator_},t.prototype.addMarkers=function(t,e){if(t.length)for(var r=0;o=t[r];r++)this.pushMarkerTo_(o);else if(Object.keys(t).length)for(var o in t)this.pushMarkerTo_(t[o]);e||this.redraw()},t.prototype.pushMarkerTo_=function(t){if(t.isAdded=!1,t.draggable){var e=this;google.maps.event.addListener(t,"dragend",(function(){t.isAdded=!1,e.repaint()}))}this.markers_.push(t)},t.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw()},t.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var r,o=0;r=this.markers_[o];o++)if(r==t){e=o;break}return-1!=e&&(t.setMap(null),this.markers_.splice(e,1),!0)},t.prototype.removeMarker=function(t,e){var r=this.removeMarker_(t);return!(e||!r||(this.resetViewport(),this.redraw(),0))},t.prototype.removeMarkers=function(t,e){for(var r,o=t===this.getMarkers()?t.slice():t,i=!1,s=0;r=o[s];s++){var n=this.removeMarker_(r);i=i||n}if(!e&&i)return this.resetViewport(),this.redraw(),!0},t.prototype.setReady_=function(t){this.ready_||(this.ready_=t,this.createClusters_())},t.prototype.getTotalClusters=function(){return this.clusters_.length},t.prototype.getMap=function(){return this.map_},t.prototype.setMap=function(t){this.map_=t},t.prototype.getGridSize=function(){return this.gridSize_},t.prototype.setGridSize=function(t){this.gridSize_=t},t.prototype.getMinClusterSize=function(){return this.minClusterSize_},t.prototype.setMinClusterSize=function(t){this.minClusterSize_=t},t.prototype.getExtendedBounds=function(t){var e=this.getProjection(),r=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),o=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(r);i.x+=this.gridSize_,i.y-=this.gridSize_;var s=e.fromLatLngToDivPixel(o);s.x-=this.gridSize_,s.y+=this.gridSize_;var n=e.fromDivPixelToLatLng(i),a=e.fromDivPixelToLatLng(s);return t.extend(n),t.extend(a),t},t.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},t.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers_=[]},t.prototype.resetViewport=function(t){for(var e,r=0;e=this.clusters_[r];r++)e.remove();var o;for(r=0;o=this.markers_[r];r++)o.isAdded=!1,t&&o.setMap(null);this.clusters_=[]},t.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_.length=0,this.resetViewport(),this.redraw(),o.setTimeout((function(){for(var e,r=0;e=t[r];r++)e.remove()}),0)},t.prototype.redraw=function(){this.createClusters_()},t.prototype.distanceBetweenPoints_=function(t,e){if(!t||!e)return 0;var r=(e.lat()-t.lat())*Math.PI/180,o=(e.lng()-t.lng())*Math.PI/180,i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371},t.prototype.addToClosestCluster_=function(t){for(var r,o=4e4,i=null,s=(t.getPosition(),0);r=this.clusters_[s];s++){var n=r.getCenter();if(n){var a=this.distanceBetweenPoints_(n,t.getPosition());a<o&&(o=a,i=r)}}i&&i.isMarkerInClusterBounds(t)?i.addMarker(t):((r=new e(this)).addMarker(t),this.clusters_.push(r))},t.prototype.createClusters_=function(){if(this.ready_)for(var t,e=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast()),r=this.getExtendedBounds(e),o=0;t=this.markers_[o];o++)!t.isAdded&&this.isMarkerInBounds_(t,r)&&this.addToClosestCluster_(t)},e.prototype.isMarkerAlreadyAdded=function(t){if(this.markers_.indexOf)return-1!=this.markers_.indexOf(t);for(var e,r=0;e=this.markers_[r];r++)if(e==t)return!0;return!1},e.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,r=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,o=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(r,o),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var i=this.markers_.length;if(i<this.minClusterSize_&&t.getMap()!=this.map_&&t.setMap(this.map_),i==this.minClusterSize_)for(var s=0;s<i;s++)this.markers_[s].setMap(null);return i>=this.minClusterSize_&&t.setMap(null),this.updateIcon(),!0},e.prototype.getMarkerClusterer=function(){return this.markerClusterer_},e.prototype.getBounds=function(){for(var t,e=new google.maps.LatLngBounds(this.center_,this.center_),r=this.getMarkers(),o=0;t=r[o];o++)e.extend(t.getPosition());return e},e.prototype.remove=function(){this.clusterIcon_.remove(),this.markers_.length=0,delete this.markers_},e.prototype.getSize=function(){return this.markers_.length},e.prototype.getMarkers=function(){return this.markers_},e.prototype.getCenter=function(){return this.center_},e.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},e.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},e.prototype.getMap=function(){return this.map_},e.prototype.updateIcon=function(){var t=this.map_.getZoom(),e=this.markerClusterer_.getMaxZoom();if(e&&t>e)for(var r,o=0;r=this.markers_[o];o++)r.setMap(this.map_);else if(this.markers_.length<this.minClusterSize_)this.clusterIcon_.hide();else{var i=this.markerClusterer_.getStyles().length,s=this.markerClusterer_.getCalculator()(this.markers_,i);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.setSums(s),this.clusterIcon_.show()}},r.prototype.triggerClusterClick=function(){var t=this.cluster_.getMarkerClusterer();google.maps.event.trigger(t.map_,"clusterclick",this.cluster_),t.isZoomOnClick()&&this.map_.fitBounds(this.cluster_.getBounds())},r.prototype.onAdd=function(){if(this.div_=document.createElement("DIV"),this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.innerHTML=this.sums_.text}this.getPanes().overlayMouseTarget.appendChild(this.div_);var e=this;google.maps.event.addDomListener(this.div_,"click",(function(){e.triggerClusterClick()}))},r.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x-=parseInt(this.width_/2,10),e.y-=parseInt(this.height_/2,10),e},r.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px",this.div_.style.zIndex=google.maps.Marker.MAX_ZINDEX+1}},r.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},r.prototype.show=function(){if(this.div_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.style.display=""}this.visible_=!0},r.prototype.remove=function(){this.setMap(null)},r.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),this.div_.parentNode.removeChild(this.div_),this.div_=null)},r.prototype.setSums=function(t){this.sums_=t,this.text_=t.text,this.index_=t.index,this.div_&&(this.div_.innerHTML=t.text),this.useStyle()},r.prototype.useStyle=function(){var t=Math.max(0,this.sums_.index-1);t=Math.min(this.styles_.length-1,t);var e=this.styles_[t];this.url_=e.url,this.height_=e.height,this.width_=e.width,this.textColor_=e.textColor,this.anchor_=e.anchor,this.textSize_=e.textSize,this.backgroundPosition_=e.backgroundPosition,this.backgroundSize_=e.backgroundSize},r.prototype.setCenter=function(t){this.center_=t},r.prototype.createCss=function(t){var e=[];e.push("background-image:url("+this.url_+");");var r=this.backgroundPosition_?this.backgroundPosition_:"0 0";e.push("background-position:"+r+";");var o=this.backgroundSize_?this.backgroundSize_:"contain";e.push("background-size:"+o+";"),"object"==typeof this.anchor_?("number"==typeof this.anchor_[0]&&this.anchor_[0]>0&&this.anchor_[0]<this.height_?e.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;"):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px;"),"number"==typeof this.anchor_[1]&&this.anchor_[1]>0&&this.anchor_[1]<this.width_?e.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;"):e.push("width:"+this.width_+"px; text-align:center;")):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");var i=this.textColor_?this.textColor_:"black",s=this.textSize_?this.textSize_:11;return e.push("cursor:pointer; top:"+t.y+"px; left:"+t.x+"px; color:"+i+"; position:absolute; font-size:"+s+"px; font-family:Arial,sans-serif; font-weight:bold"),e.join("")};var o=o||{};o.MarkerClusterer=t,t.prototype.addMarker=t.prototype.addMarker,t.prototype.addMarkers=t.prototype.addMarkers,t.prototype.clearMarkers=t.prototype.clearMarkers,t.prototype.fitMapToMarkers=t.prototype.fitMapToMarkers,t.prototype.getCalculator=t.prototype.getCalculator,t.prototype.getGridSize=t.prototype.getGridSize,t.prototype.getExtendedBounds=t.prototype.getExtendedBounds,t.prototype.getMap=t.prototype.getMap,t.prototype.getMarkers=t.prototype.getMarkers,t.prototype.getMaxZoom=t.prototype.getMaxZoom,t.prototype.getStyles=t.prototype.getStyles,t.prototype.getTotalClusters=t.prototype.getTotalClusters,t.prototype.getTotalMarkers=t.prototype.getTotalMarkers,t.prototype.redraw=t.prototype.redraw,t.prototype.removeMarker=t.prototype.removeMarker,t.prototype.removeMarkers=t.prototype.removeMarkers,t.prototype.resetViewport=t.prototype.resetViewport,t.prototype.repaint=t.prototype.repaint,t.prototype.setCalculator=t.prototype.setCalculator,t.prototype.setGridSize=t.prototype.setGridSize,t.prototype.setMaxZoom=t.prototype.setMaxZoom,t.prototype.onAdd=t.prototype.onAdd,t.prototype.draw=t.prototype.draw,e.prototype.getCenter=e.prototype.getCenter,e.prototype.getSize=e.prototype.getSize,e.prototype.getMarkers=e.prototype.getMarkers,r.prototype.onAdd=r.prototype.onAdd,r.prototype.draw=r.prototype.draw,r.prototype.onRemove=r.prototype.onRemove,Object.keys=Object.keys||function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e};const i=t;var s;s=jQuery,DokanGeo.LocationsMaps={map:null,markers:[],marker_clusterer:null,info_window:null,init:function(){var t=this,e=s("#dokan-geolocation-locations-map");t.map=new google.maps.Map(e.get(0),{zoom:parseInt(DokanGeo.map_zoom,10),mapTypeId:google.maps.MapTypeId.ROADMAP}),t.info_window=new google.maps.InfoWindow,t.setMarkers(),t.map.addListener("clusterclick",(function(e){var r=e.getBounds(),o=e.getMarkers(),i=Object.keys(r),n=Object.keys(r[i[0]]);if(r[i[0]][n[0]]===r[i[0]][n[1]]){var a='<div class="white-popup dokan-geo-map-info-windows-in-popup">';o.forEach((function(e){a+=t.getInfoWindowContent(e.info)})),a+="</div>",s.magnificPopup.open({items:{type:"inline",src:a}})}}))},setMarkers:function(){var t=s('[name="dokan_geolocation[]"]');if(t.length){var e=this,r=new google.maps.LatLngBounds,o={url:DokanGeo.marker.image,scaledSize:new google.maps.Size(32,32)};e.marker_clusterer&&e.marker_clusterer.clearMarkers(),e.markers=[],t.each((function(){s(this).val();var t=s(this).data("latitude"),i=s(this).data("longitude"),n=s(this).data("info"),a=new google.maps.LatLng(t,i);r.extend(a);var p={position:a,map:e.map,info:n};DokanGeo.marker.image&&(p.icon=o);var h=new google.maps.Marker(p);h.addListener("click",(function(){if(n){var t=e.getInfoWindowContent(n);e.info_window.setContent(t),e.info_window.open(e.map,h),e.map.panTo(a)}})),e.markers.push(h)})),e.map.setCenter(r.getCenter()),1===parseInt(DokanGeo.is_auto_zoom)&&(e.map.fitBounds(r),setTimeout((function(){e.map.getZoom()>parseInt(DokanGeo.map_zoom)&&e.map.setZoom(parseInt(DokanGeo.map_zoom))}),1500)),u=0;var n=[];for(u=0;u<5;u++)n.push({url:DokanGeo.marker.clusterer,height:40,width:40,textColor:"#fddace",textSize:13,backgroundSize:"40px"});e.marker_clusterer=new i(e.map,e.markers,{gridSize:40,styles:n})}else{var a=window.location.search,p=DokanGeo.default_geolocation.latitude,h=DokanGeo.default_geolocation.longitude,l=a.replace("?","").split("&"),u=0;if(l.length){var _="",d="",g="";for(u=0;u<l.length;u++)d=(_=l[u].split("="))[0].toLowerCase(),g=_[1],"latitude"===d?p=g:"longitude"===d&&(h=g)}this.map.setCenter(new google.maps.LatLng(p,h))}},getInfoWindowContent:function(t){var e,r=DokanGeo.info_window_template;for(e in t)r=r.replace("{"+e+"}",t[e]);return r}},s("#dokan-geolocation-locations-map").length&&DokanGeo.LocationsMaps.init()})();