import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import Loading from 'fengui/component/page/Loading'
import styles from './Framepage3.scss'
import { Alert, message } from 'antd' 

import { browserHistory } from 'react-router'

let Page = React.createClass({
  componentWillMount () {
    let {wrongbool,wrongdata} = this.props;

    this.props.init();
  },
  render () {
    let {wrongbool,wrongdata} = this.props;
    // console.log(window.location)

    // console.log(params)
    // if (!pageinfo) {
    //   return <Loading/>
    // }
    console.log(wrongdata)
    if(wrongbool){
      return (
        <div className={styles.mainBox}>
          <div className={styles.wrongbox}>错误数据统计</div>
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
        <div className={styles.waitbox}><Loading/></div>
      )
    }
    
  }
})


const mapStateToProps = (state) => {
  return {
    wrongdata: state.vars.wrongdata,
    wrongbool: state.vars.wrongbool,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      function GetQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = ""; 
        if (r != null) 
           context = r[2]; 
        reg = null; 
        r = null; 
        return context == null || context == "" || context == "undefined" ? "" : context; 
      }
      // alert(GetQueryString("id"));
      var id = decodeURI(GetQueryString("id"))

      $.ajax({
        async: true,
        type : "POST",
        url : 'http://172.16.1.2:8080/database/correctnesserror',
        // url : url,
        data:id,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
