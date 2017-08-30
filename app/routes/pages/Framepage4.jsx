import React from 'react'
import {connect} from 'react-redux'
import styles from './Framepage4.scss'
import actions from 'fengui/redux/actions'
import data from '../../../config/modata.js'
import Title from '../../comps/Title.jsx'
import Loading from 'fengui/component/page/Loading'

import { Alert, message, Icon} from 'antd'
console.log(screen.width)
let Body = React.createClass({
  componentWillMount () {
    let {wrongdata,wrongbool,frameboo4,wrongdata2}=this.props;
    this.props.init(frameboo4);
  },
  getInitialState:function(){
      return{
        x:500,
        y:100,
        
      }
  },
  
  render () {
    let {closebtn,wrongdata,wrongbool,frameboo4} = this.props;
    let {boo,m,n} = this.state;
    let newarr = [];
    if(wrongbool){
     console.log(wrongdata.drop[0].length)
     let len = wrongdata.drop[0].length;
      
        return (
          <div className={styles.mainbox} style={{position:'absolute',left:this.state.x, top:this.state.y}}>
            <div className={styles.movebox} id="div" >
            <div className={styles.closebox} onClick={()=>closebtn()}></div>
            <p>错误数据统计</p>
            </div>
            <div className={styles.tablebox}>
              <table style={{ borderWidth: 1,width:len*2*140 }} cellSpacing="0">
              <thead>
                <tr>
                    <th colSpan={len}>可研报告数据

                    </th>
                    <th colSpan="4">迭加分析数据</th>
                  </tr>
              </thead>
                <tbody>
                  {
                    wrongdata.drop.map((value, key)=>{
                      return (
                        <tr key={key}>
                          {
                            value.map((value,key)=>{
                              return(
                                <td key={key} style={{width:140,fontSize:14}}>{value}</td>
                              )
                            })
                          }
                          {
                            wrongdata.feasibility[key].map((value,key)=>{
                              return (
                                <td key={key} style={{width:140,fontSize:14}}>{value}</td>
                              )
                            })
                          }
                        </tr>
                      )
                    })
                  }
                  
                  
                  </tbody>
              </table>
            </div>
            
         </div>
        )
      
    }else{
      return (
        <div className={styles.mainbox} style={{position:'absolute',left:this.state.x, top:this.state.y}}>
        <div className={styles.movebox} id="div" >
          </div>
          <Loading/>
        </div>
      )
    }  
  }
})

const mapStateToProps = (state) => {
  return {
    wrongdata: state.vars.wrongdata,
    wrongbool: state.vars.wrongbool,
    wrongdata2: state.vars.wrongdata2,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (frameboo4) => {
      console.log(frameboo4)
      // function GetQueryString(name) { 
      //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
      //   var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
      //   var context = ""; 
      //   if (r != null) 
      //      context = r[2]; 
      //   reg = null; 
      //   r = null; 
      //   return context == null || context == "" || context == "undefined" ? "" : context; 
      // }
      // // alert(GetQueryString("id"));
      // var id = decodeURI(GetQueryString("id"))

      $.ajax({
        async: true,
        type : "POST",
        url : 'http://172.16.1.2:8080/database/correctnesserror',
        // url : url,
        data:frameboo4,
        dataType: 'json',
        contentType:'application/json',
        complete: function(msg){
            // console.log(msg.responseText);
            
        },
        success : function(data) {
          console.log(data)
          dispatch(actions.setVars('wrongdata',data)) 
          dispatch(actions.setVars('wrongbool',true)) 


        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          // if(textStatus=='timeout'){
            message.error('综合评估数据请求失败',3);
          // }
        },
        
      })
    },
    closebtn: ()=> {
      dispatch(actions.setVars('frameboo4', false));
    }
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)