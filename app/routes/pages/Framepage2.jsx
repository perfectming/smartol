import React from 'react'
import {connect} from 'react-redux'
import styles from './Framepage2.scss'
import actions from 'fengui/redux/actions'
import data from '../../../config/modata.js'
import Title from '../../comps/Title.jsx'
import Loading from 'fengui/component/page/Loading'
import url from '../../../config/urls.js'
import { Alert, message, Icon} from 'antd'
console.log(screen.width)
let Body = React.createClass({
  componentWillMount () {
    let {roadData2,roadboo2}=this.props;
    this.props.init();
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
        n:ptop + $(window).scrollTop()+90
      });
  },
  render () {
    let {roadData2,roadboo2,closebtn} = this.props;
    let {boo,m,n} = this.state;
    if(roadboo2){

      if(screen.width==1366){
        return (
          <div className={styles.mainbox} style={{position:'absolute',left:this.state.x, top:this.state.y}}>
            <div className={styles.movebox} id="div" onMouseDown={(e)=>this.MouseDown(boo,e,m,n)} onMouseMove={(e)=>this.MouseMove(boo,e,m,n)} onMouseUp={()=>this.MouseUp(boo)} onMouseOut={(e)=>this.MouseOut(boo,e)}>
            <div className={styles.closebox} onClick={()=>closebtn()}><Icon type="close-square-o" style={{ fontSize: 26, color: '#fff',width:30,height:30 }} /></div>
            </div>
            <div className={styles.head}>线路工程评估报告</div>
            <div className={styles.infosbox}>
              {
                roadData2.map((value,key)=>{
                  return (
                    <div className={value.errnumber == 0 ? styles.nonebox : styles.onebox} key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                      <div className={styles.onetitbox}>{value.name}</div>
                      <div className={value.errnumber ? styles.blockbox :styles.hiddenbox}>
                        {
                          value.content.map((value, key)=>{
                            return (
                              <div key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                                <div className={styles.towtitbox}>{value.name}</div>
                                <div>
                                  {
                                    value.content.map((value, key)=>{
                                      return (
                                        <ul key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                                          <div className={styles.thrtitbox}>{value.name}</div>
                                          {
                                            value.content && value.content.map((value, key)=>{
                                              return (
                                                <li className={value.content != undefined ? styles.libox : styles.none} key={key}>
                                                  {value.content != undefined && <span>{value.name}</span>}
                                                  {value.content != undefined && <span>{value.content}</span>}
                                                </li>

                                              )
                                            })
                                          }
                                        </ul>

                                      )
                                    })
                                  }
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>

                      
                    </div>
                    
                  )
                })
              }
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
            <div className={styles.infosbox}>
              {
                roadData2.map((value,key)=>{
                  return (
                    <div className={value.errnumber == 0 ? styles.nonebox : styles.onebox} key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                      <div className={styles.onetitbox}>{value.name}</div>
                      <div className={value.errnumber ? styles.blockbox :styles.hiddenbox}>
                        {
                          value.content.map((value, key)=>{
                            return (
                              <div key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                                <div className={styles.towtitbox}>{value.name}</div>
                                <div>
                                  {
                                    value.content.map((value, key)=>{
                                      return (
                                        <ul key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                                          <div className={styles.thrtitbox}>{value.name}</div>
                                          {
                                            value.content && value.content.map((value, key)=>{
                                              return (
                                                <li className={value.content != undefined ? styles.libox : styles.none} key={key}>
                                                  {value.content != undefined && <span>{value.name}</span>}
                                                  {value.content != undefined && <span>{value.content}</span>}
                                                </li>

                                              )
                                            })
                                          }
                                        </ul>

                                      )
                                    })
                                  }
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>

                      
                    </div>
                    
                  )
                })
              }
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
    roadData2: state.vars.resualt2,
    roadboo2:state.vars.roadboo2,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      $.ajax({
        async: true,
        type : "POST",
        url : url.burl,
        // url : url,
        data: '',
        dataType: 'json',
        contentType:'application/json',
        complete: function(msg){
            // console.log(msg.responseText);
            
        },
        success : function(data) {
          // console.log(data[0].content[0])
          dispatch(actions.setVars('resualt2', data));
          dispatch(actions.setVars('roadboo2', true));
          let arr1 = [];
          data[0].content.map((value, key)=>{
            value.content.map((value2, key2)=>{
              value2.content.map((value3,key3)=>{
                // console.log(value3.content)
                if(value3.content){
                  console.log(value3.content)
                  arr1.push(value3.content)
                }
              })
            })
          })
          console.log(arr1)
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          // if(textStatus=='timeout'){
            dispatch(actions.setVars('roadboo2', true));
            message.error('数据请求失败,请重试',5);
          // }
        },
        
      })
    },
    closebtn: ()=> {
      dispatch(actions.setVars('frameboo', false));
    }
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)