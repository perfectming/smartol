import React from 'react'
import {connect} from 'react-redux'
import styles from './Reportopt.scss'
import actions from 'fengui/redux/actions'
import { browserHistory } from 'react-router'
import Title from '../../comps/Title.jsx'

// ready(function(){
//     var oDiv=document.getElementById('div');
//     drag(oDiv); 
// })

// //拖拽原理：改变obj的top值与left值
// function drag(obj)
// {
//     addEvent(obj,'mousedown',function(ev){
//         var oEvent=ev||event;
//         //不变的参考距离＝mousedown时鼠标坐标－obj到页面的左边距
//         var disX=oEvent.clientX-obj.offsetLeft;
//         var disY=oEvent.clientY-obj.offsetTop;
//         addEvent(document,'mousemove',move);
//         addEvent(document,'mouseup',up);
//         oEvent.preventDefault();//阻止默认事件，取消文字选中
//         function move(ev)
//         {
//             var oEvent=ev||event;
//             var left=oEvent.clientX-disX;
//             var top=oEvent.clientY-disY;
//             obj.style.left=left+'px';
//             obj.style.top=top+'px';
//             obj.setCapture&&obj.setCapture();//低版本IE阻止默认事件，取消文字选中
//         }
//         function up()
//         {
//             removeEvent(document,'mousemove',move);
//             removeEvent(document,'mouseup',up);
//             obj.releaseCapture&&obj.releaseCapture();//低版本IE取消阻止默认事件
//         }
//     })
// }
// //添加事件绑定
// function addEvent(obj,sEv,fn)
// {
//     if(obj.addEventListener)
//     {
//         obj.addEventListener(sEv,fn,false);
//     }else{
//         obj.attachEvent('on'+sEv,fn);
//     }
// }

// //删除事件绑定
// function removeEvent(obj,sEv,fnName)
// {
//     if(obj.removeEventListener)
//     {
//         obj.removeEventListener(sEv,fnName,false);
//     }else{
//         obj.detachEvent('on'+sEv,fnName);
//     }
// }
// //代码加载完执行js
// function ready(fn)
// {
//     if(document.addEventListener)
//     {
//         document.addEventListener('DOMContentLoaded',fn,false)
//     }else{
//         document.attachEvent('onreadystatechange',function(){
//             if(document.readyState=='complete')
//             {fn();}
//         })
//     }
// }   
let Body = React.createClass({
  componentWillMount () {
    this.props.init();
  },
  render () {
    let {toroad} = this.props;
      return (
        <div className={styles.mainBox}>
          报告输出页面
        </div>
      )
  }
})

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      // $.ajax({
      //   async: true,
      //   type : "POST",
      //   url : '',
      //   // url : url,
      //   data: '',
      //   dataType: 'json',
      //   contentType:'application/json',
      //   complete: function(msg){
      //       // console.log(msg.responseText);
            
      //   },
      //   success : function(data) {
            
      //       dispatch(actions.setVars('resualt', data));
            
      //   }
        
      // })
    },
    toroad: ()=>{
      browserHistory.push('/main/assess/road');
      dispatch(actions.setVars('navActiveKey',2));
      dispatch(actions.setVars('headerActiveKey',1));
      dispatch(actions.setVars('navindex',1))
    }
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
