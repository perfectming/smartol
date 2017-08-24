import React from 'react';
import ol from 'openlayers';
// import util from '../../comps/Util';
import styles from './Resource.scss'

let Olbasemap = React.createClass({
  componentDidMount () {
       // util.adaptHeight('map',1,20);//高度自适应

       //  let projection,attribution,coor,view;

       //  attribution = new ol.Attribution({
       //      html: '© <a href="http://www.chinaonmap.com/map/index.html">天地图</a>'
       //  });

       //  let map = new ol.Map({
       //      target: 'map',
       //      layers: [
       //          new ol.layer.Tile({
       //              source: new ol.source.XYZ({
       //                  attributions: [attribution],
       //                  url: "http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
       //              })
       //          }),
       //          new ol.layer.Tile({
       //              source: new ol.source.XYZ({
       //                  url: "http://t2.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}"
       //              })
       //          })
       //      ],
       //      view: new ol.View({
       //        projection: 'EPSG:900913',//WGS84
       //        center: ol.proj.fromLonLat([104, 30]),
       //        zoom: 5,
       //      }),
       //      controls: ol.control.defaults().extend([
       //          new ol.control.FullScreen(), //全屏控件
       //          new ol.control.ScaleLine(), //比例尺
       //          new ol.control.OverviewMap(), //鹰眼控件
       //          new ol.control.Rotate(),
       //          new ol.control.MousePosition(),
       //          new ol.control.ZoomSlider(),
       //       ]),
       //    });
  },
  
  render () {
    let {} = this.props;
    
      return (
        <div id="map" className={styles.mainBox}>
          
       </div>
      )
   
      
  }
})



export default Olbasemap;




// import React from 'react'
// import {connect} from 'react-redux'
// import styles from './Resource.scss'
// import actions from 'fengui/redux/actions'
// import Title from '../../comps/Title.jsx'


// let Body = React.createClass({
//   componentWillMount () {
//     this.props.init();
//   },
  
//   render () {
//     let {} = this.props;
    
//       return (
//         <div className={styles.mainBox}>
//           资源市场页面
//        </div>
//       )
   
      
//   }
// })

// const mapStateToProps = (state) => {
//   return {
    
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     init: () => {
//       // $.ajax({
//       //   async: true,
//       //   type : "POST",
//       //   url : '',
//       //   // url : url,
//       //   data: '',
//       //   dataType: 'json',
//       //   contentType:'application/json',
//       //   complete: function(msg){
//       //       // console.log(msg.responseText);
            
//       //   },
//       //   success : function(data) {
            
//       //       dispatch(actions.setVars('resualt', data));
            
//       //   }
        
//       // })
//     },
   
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Body)