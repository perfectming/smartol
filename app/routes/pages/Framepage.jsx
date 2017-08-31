import React from 'react'
import {connect} from 'react-redux'
import styles from './Framepage.scss'
import actions from 'fengui/redux/actions'
import data from '../../../config/modata.js'
import FixedContent from 'fengui/component/page/FixedContentpc'
import Loading from 'fengui/component/page/Loading'
import url from '../../../config/urls.js'
import { Alert, message } from 'antd' 
let Body = React.createClass({
  componentWillMount () {
    let {roadData2,roadboo2}=this.props;
    this.props.init();
  },
  render () {
    let {roadData2,roadboo2} = this.props;
    let arr=[0,19,6,3];
    if(roadboo2){
      return (
        <div className={styles.mainBox}>
          <div className={styles.head}>线路工程评估报告</div>
          <div className={styles.infosbox}>
            {
              roadData2.map((value,key)=>{
                return (
                  <div className={styles.onebox} key={key} style={arr[key] ? {display:'inlineTable'} : {display:'none'}}>
                    <div className={styles.onetitbox}>{value.name}</div>
                    <div className={arr[key] ? styles.blockbox :styles.hiddenbox}>
                      {
                        value.content.map((value, key)=>{
                          return (
                            <div key={key}>
                              <div className={styles.towtitbox}>{value.name}</div>
                              <div>
                                {
                                  value.content.map((value, key)=>{
                                    return (
                                      <ul key={key}>
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
        <div className={styles.waitbox}><Loading/></div>
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
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
