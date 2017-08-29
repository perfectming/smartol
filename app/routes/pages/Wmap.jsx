import React from 'react';
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import ol from 'openlayers';

// import util from '../../comps/Util';
import styles from './Wmap.scss'
import Loading from 'fengui/component/page/Loading'
// import data from '../../../config/deodata.js'

let Body = React.createClass({
  // componentWillMount () {
  //   let {mapbool,mapdata,centerdata} = this.props;
  //   this.props.init();
  // },
  componentDidMount () {
    // let {centerdata,mapdata,mapbool} = this.props;

    // this.props.map(centerdata,mapdata,mapbool);
    
            // addGeoJSON(geojsonObject);

    // 使用ajax获取矢量地图数据
    // let datass = JSON.stringify({
    //                     "name":'水源地缺少批文',
                        
    //                 })
    $.ajax({
        async: true,
        type : "POST",
        url: 'http://172.16.1.2:8080/database/aa',
        data: '',
        dataType: 'json',
        contentType:'application/json',
        success: function(data, status) {
          console.log(data)
            // 成功获取到数据内容后，调用方法添加到地图
            // console.log(JSON.parse(data))
            data.features[0].geometry.coordinates.map((value, key)=> {
              key == 0 && value.map((value, key)=> {
                if(key==0){
                  let layer = new ol.layer.Vector({
                      source: new ol.source.Vector()
                    })
                  let map = new ol.Map({
                    layers: [
                      new ol.layer.Tile({
                        source: new ol.source.TileArcGISRest({
                          // attributions: [attribution],
                          url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
                          })
                      }),
                      // new ol.layer.Tile({
                      //       source: new ol.source.OSM()
                      //       }), 
                      layer
                    ],
                    view: new ol.View({ 
                      projection: 'EPSG:4326',
                        center: value,
                      zoom: 10
                    }),
                    controls: ol.control.defaults().extend([
                      new ol.control.FullScreen(), //全屏控件
                      new ol.control.ScaleLine(), //比例尺
                      new ol.control.OverviewMap(), //鹰眼控件
                      new ol.control.Rotate(),
                      new ol.control.MousePosition(),
                      new ol.control.ZoomSlider(),
                    ]), 
                    target: 'map'
                  });
                  let image = new ol.style.Circle({
                    radius: 5,
                    fill: null,
                    stroke: new ol.style.Stroke({color: 'red', width: 1})
                  });

                  let styles = {
                    'Point': new ol.style.Style({
                      image: image
                    }),
                    'LineString': new ol.style.Style({
                      stroke: new ol.style.Stroke({
                        color: 'green',
                        width: 1
                      })
                    }),
                    'MultiLineString': new ol.style.Style({
                      stroke: new ol.style.Stroke({
                        color: 'rgba(247,4,3, 1)',
                        width: 4
                      })
                    }),
                    'MultiPoint': new ol.style.Style({
                      image: image
                    }),
                    'MultiPolygon': new ol.style.Style({
                      stroke: new ol.style.Stroke({
                        color: 'yellow',
                        width: 1
                      }),
                      fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 0, 0.1)'
                      })
                    }),
                    'Polygon': new ol.style.Style({
                      stroke: new ol.style.Stroke({
                        color: 'blue',
                        lineDash: [4],
                        width: 3
                      }),
                      fill: new ol.style.Fill({
                        color: 'rgba(0, 0, 255, 0.1)'
                      })
                    }),
                    'GeometryCollection': new ol.style.Style({
                      stroke: new ol.style.Stroke({
                        color: 'magenta',
                        width: 2
                      }),
                      fill: new ol.style.Fill({
                        color: 'magenta'
                      }),
                      image: new ol.style.Circle({
                        radius: 10,
                        fill: null,
                        stroke: new ol.style.Stroke({
                          color: 'magenta'
                        })
                      })
                    }),
                    'Circle': new ol.style.Style({
                      stroke: new ol.style.Stroke({
                        color: 'red',
                        width: 2
                      }),
                      fill: new ol.style.Fill({
                        color: 'rgba(255,0,0,0.2)'
                      })
                    })
                  };

                  let styleFunction = function(feature) {
                    return styles[feature.getGeometry().getType()];
                  };

                    
                  // 加载矢量地图
                  function addGeoJSON(data) {
                      let layer2 = new ol.layer.Vector({
                          source: new ol.source.Vector({
                              features: (new ol.format.GeoJSON()).readFeatures(data, {     // 用readFeatures方法可以自定义坐标系
                                  dataProjection: 'EPSG:4326',    // 设定JSON数据使用的坐标系
                                  featureProjection: 'EPSG:4326' // 设定当前地图使用的feature的坐标系
                              })
                          }),
                          style: styleFunction
                      });

                      map.addLayer(layer2);
                  }
                  
                  addGeoJSON(data);
                  var anchor = new ol.Feature({
                        geometry: new ol.geom.Point(value)
                      });
                      anchor.setStyle(new ol.style.Style({
                        image: new ol.style.Icon({
                          src: 'http://172.16.1.2:9090/public/posicon.png'
                        })
                      }));
                      layer.getSource().addFeature(anchor);

                      // 监听地图层级变化
                      map.getView().on('change:resolution', function(){
                          var style = anchor.getStyle();
                          // 重新设置图标的缩放率，基于层级10来做缩放
                          style.getImage().setScale(this.getZoom() / 10);
                          anchor.setStyle(style);
                      })
                  // function addGeoJSON2(data) {
                  //     let layer2 = new ol.layer.Vector({
                  //         source: new ol.source.Vector({
                  //             features: (new ol.format.GeoJSON()).readFeatures(data, {     // 用readFeatures方法可以自定义坐标系
                  //                 // dataProjection: 'EPSG:3857',    // 设定JSON数据使用的坐标系
                  //                 // featureProjection: 'EPSG:3857' // 设定当前地图使用的feature的坐标系
                  //             })
                  //         }),
                  //         style: new ol.style.Style({
                  //           stroke: new ol.style.Stroke({
                  //             color: 'red',
                  //             width: 4
                  //           })
                  //         }),
                  //     });
                  //     map.addLayer(layer2);
                  // }
                  // $.ajax({
                  //   url: 'http://172.16.1.47:8080/database/aa',
                  //   success: function(data, status) {
                  //     // 成功获取到数据内容后，调用方法添加到地图
                  //     dispatch(actions.setVars('mapdata', data));

                      
                  //     console.log(JSON.parse(data))
                  //     JSON.parse(data).coordinates.map((value, key)=> {
                  //       key == 0 && value.map((value, key)=> {
                  //         key == 0 && dispatch(actions.setVars('centerdata', value));
                  //         dispatch(actions.setVars('mapbool', true));

                  //       })
                  //     })
                  //   }
                  // });
                }
              })
            })
        }
    });
          
  },

  render () {
    let {mapbool,mapdata,centerdata} = this.props;
    // console.log(mapbool,mapdata,centerdata)

      // if(mapbool){
        return (
          <div id="map" className={styles.mainBox}>
            
          </div>
        )
      // }else{
      //   return (
      //     <div className={styles.waitbox}><Loading/></div>
      //   )
      // }
      
   
      
  }
})

const mapStateToProps = (state) => {
  return {
    // mapbool: state.vars.mapbool,
    // mapdata: state.vars.mapdata,
    // centerdata: state.vars.centerdata,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // init: () => {
    //   $.ajax({
    //     url: 'http://172.16.1.47:8080/database/aa',
    //     success: function(data, status) {
    //       // 成功获取到数据内容后，调用方法添加到地图
    //       dispatch(actions.setVars('mapdata', data));

          
    //       console.log(JSON.parse(data))
    //       JSON.parse(data).coordinates.map((value, key)=> {
    //         key == 0 && value.map((value, key)=> {
    //           key == 0 && dispatch(actions.setVars('centerdata', value));
    //           dispatch(actions.setVars('mapbool', true));

    //         })
    //       })
    //     }
    //   });
    // },
    // map: (centerdata,mapdata,mapbool) => {
    //   console.log(mapbool,"2113333333333333333")
    //   if(mapbool){
    //     let map = new ol.Map({
    //       layers: [
    //         new ol.layer.Tile({
    //           source: new ol.source.TileArcGISRest({
    //             // attributions: [attribution],
    //             url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    //             })
    //         }),
    //         // new ol.layer.Tile({
    //         //       source: new ol.source.OSM()
    //         //     }), 

    //       ],
    //       view: new ol.View({ 
    //         projection: 'EPSG:3857',
    //           center: centerdata,
    //         zoom: 10
    //       }),
    //       controls: ol.control.defaults().extend([
    //         new ol.control.FullScreen(), //全屏控件
    //         new ol.control.ScaleLine(), //比例尺
    //         new ol.control.OverviewMap(), //鹰眼控件
    //         new ol.control.Rotate(),
    //         new ol.control.MousePosition(),
    //         new ol.control.ZoomSlider(),
    //       ]), 
    //       target: 'map'
    //     });
    //     let image = new ol.style.Circle({
    //       radius: 5,
    //       fill: null,
    //       stroke: new ol.style.Stroke({color: 'red', width: 1})
    //     });

    //     let styles = {
    //       'Point': new ol.style.Style({
    //         image: image
    //       }),
    //       'LineString': new ol.style.Style({
    //         stroke: new ol.style.Stroke({
    //           color: 'green',
    //           width: 1
    //         })
    //       }),
    //       'MultiLineString': new ol.style.Style({
    //         stroke: new ol.style.Stroke({
    //           color: 'green',
    //           width: 4
    //         })
    //       }),
    //       'MultiPoint': new ol.style.Style({
    //         image: image
    //       }),
    //       'MultiPolygon': new ol.style.Style({
    //         stroke: new ol.style.Stroke({
    //           color: 'yellow',
    //           width: 1
    //         }),
    //         fill: new ol.style.Fill({
    //           color: 'rgba(255, 255, 0, 0.1)'
    //         })
    //       }),
    //       'Polygon': new ol.style.Style({
    //         stroke: new ol.style.Stroke({
    //           color: 'blue',
    //           lineDash: [4],
    //           width: 3
    //         }),
    //         fill: new ol.style.Fill({
    //           color: 'rgba(0, 0, 255, 0.1)'
    //         })
    //       }),
    //       'GeometryCollection': new ol.style.Style({
    //         stroke: new ol.style.Stroke({
    //           color: 'magenta',
    //           width: 2
    //         }),
    //         fill: new ol.style.Fill({
    //           color: 'magenta'
    //         }),
    //         image: new ol.style.Circle({
    //           radius: 10,
    //           fill: null,
    //           stroke: new ol.style.Stroke({
    //             color: 'magenta'
    //           })
    //         })
    //       }),
    //       'Circle': new ol.style.Style({
    //         stroke: new ol.style.Stroke({
    //           color: 'red',
    //           width: 2
    //         }),
    //         fill: new ol.style.Fill({
    //           color: 'rgba(255,0,0,0.2)'
    //         })
    //       })
    //     };

    //     let styleFunction = function(feature) {
    //       return styles[feature.getGeometry().getType()];
    //     };

          
    //     // 加载矢量地图
    //     function addGeoJSON(data) {
    //         let layer = new ol.layer.Vector({
    //             source: new ol.source.Vector({
    //                 features: (new ol.format.GeoJSON()).readFeatures(data, {     // 用readFeatures方法可以自定义坐标系
    //                     // dataProjection: 'EPSG:3857',    // 设定JSON数据使用的坐标系
    //                     // featureProjection: 'EPSG:3857' // 设定当前地图使用的feature的坐标系
    //                 })
    //             }),
    //             style: styleFunction
    //         });
    //         map.addLayer(layer);
    //     }
    //     addGeoJSON(mapdata);
    //   }
      

    // }
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
