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
          x:700,
          y:300,
          boo:false,
          m:0,
          n:0
      }
  },
  MouseMove(boo,e,m,n){
    // e.preventDefault();
    // console.log(boo)
    let oDiv=document.getElementById('div');
    let bianY = $(oDiv).offset().top*(1920/screen.width)+ $(oDiv).height()*(1920/screen.width);
    if(e.clientY*(1920/screen.width)>= bianY){
      e.clientY = bianY;
    }


    let pleft = e.clientX*(1920/screen.width) - $(oDiv).offset().left*(1920/screen.width);
    let ptop = e.clientY*(1920/screen.width) - $(oDiv).offset().top*(1920/screen.width);
    console.log($(oDiv).offset().left)
    // console.log(ptop)
    boo && this.setState({
      x:e.clientX*(1920/screen.width)-m,
      y:e.clientY*(1920/screen.width)-n  + $(window).scrollTop()
    });
  },
  MouseUp(boo,e){
    this.setState({
        boo:false,
        
    });
  },
  MouseOut(boo,e){
    e.preventDefault();
    this.setState({
        boo:false,
        
    });
  },
  MouseDown(boo,e,m,n){
    let oDiv=document.getElementById('div');
    // console.log("gun",);
    // console.log(e.clientX)
    // console.log($(oDiv).offset().top);
    let pleft = e.clientX*(1920/screen.width) - $(oDiv).offset().left*(1920/screen.width);
    let ptop = e.clientY*(1920/screen.width) - $(oDiv).offset().top*(1920/screen.width);


      this.setState({
        boo:true,
        m:pleft,
        n:ptop + $(window).scrollTop()+208
      });
  },
  render () {
    let {closebtn,wrongdata,wrongbool,frameboo4} = this.props;
    let {boo,m,n} = this.state;
    if(wrongbool){

      if(screen.width==1366){
        return (
          <div className={styles.mainbox} style={{position:'absolute',left:this.state.x, top:this.state.y}}>
            <div className={styles.movebox} id="div" onMouseDown={(e)=>this.MouseDown(boo,e,m,n)} onMouseMove={(e)=>this.MouseMove(boo,e,m,n)} onMouseUp={()=>this.MouseUp(boo)} onMouseOut={(e)=>this.MouseOut(boo,e)}>
            <div className={styles.closebox} onClick={()=>closebtn()}><Icon type="close-square-o" style={{ fontSize: 26, color: '#fff',width:30,height:30 }} /></div>
            </div>
            <div className={styles.head}>错误数据统计</div>
            <div className={styles.infobox}>
            <div className={styles.leftbox}>
              <ul>
                <li>可研报告</li>
                {
                  wrongdata.drop.map((value, key)=>{
                    return(
                        <li className={styles.rowbox} key={key}>
                          {
                            value.map((value, key)=>{
                              return (
                                <span key={key}>{value}</span>
                              )
                            })

                          }
                        </li>

                      
                    )
                  })

                }
              </ul>
            </div>
            <div className={styles.rightbox}>
              <ul>
                  <li>迭加分析</li>
                  {
                    wrongdata.feasibility.map((value, key)=>{
                      return(
                          <li className={styles.rowbox} key={key}>
                            {
                              value.map((value, key)=>{
                                return (
                                  <span key={key}>{value}</span>
                                )
                              })

                            }
                          </li>

                        
                      )
                    })

                  }
                </ul>
            </div>
          </div>
         </div>
        )
      }else{
        return (

          <div className={styles.mainbox} style={{position:'absolute',left:this.state.x, top:this.state.y}}>
            <div className={styles.movebox} id="div" onMouseDown={(e)=>this.MouseDown(boo,e,m,n)} onMouseMove={(e)=>this.MouseMove(boo,e,m,n)} onMouseUp={()=>this.MouseUp(boo)} onMouseOut={(e)=>this.MouseOut(boo,e)}>
            <div className={styles.closebox} onClick={()=>closebtn()}><Icon type="close-square-o" style={{ fontSize: 26, color: '#fff' }} /><Icon type="close-square-o" style={{ fontSize: 26, color: '#fff',width:30,height:30 }} /></div>
            </div>
            <div className={styles.head}>线路工程评估报告</div>
            <div className={styles.infobox}>
            <div className={styles.leftbox}>
              <ul>
                <li>可研报告</li>
                {
                  wrongdata.drop.map((value, key)=>{
                    return(
                        <li className={styles.rowbox} key={key}>
                          {
                            value.map((value, key)=>{
                              return (
                                <span key={key}>{value}</span>
                              )
                            })

                          }
                        </li>

                      
                    )
                  })

                }
              </ul>
            </div>
            <div className={styles.rightbox}>
              <ul>
                  <li>迭加分析</li>
                  {
                    wrongdata.feasibility.map((value, key)=>{
                      return(
                          <li className={styles.rowbox} key={key}>
                            {
                              value.map((value, key)=>{
                                return (
                                  <span key={key}>{value}</span>
                                )
                              })

                            }
                          </li>

                        
                      )
                    })

                  }
                </ul>
            </div>
          </div>
         </div>
        )
      }
    }else{
      return (
        <div className={styles.mainbox} style={{position:'absolute',left:this.state.x, top:this.state.y}}>
        <div className={styles.movebox} id="div" onMouseDown={(e)=>this.MouseDown(boo,e,m,n)} onMouseMove={(e)=>this.MouseMove(boo,e,m,n)} onMouseUp={()=>this.MouseUp(boo)} onMouseOut={(e)=>this.MouseOut(boo,e)}>
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