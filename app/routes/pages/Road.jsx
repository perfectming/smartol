import React from 'react'
import {connect} from 'react-redux'
import styles from './Road.scss'
import data from '../../../config/modata.js'
import actions from 'fengui/redux/actions'
import Title from '../../comps/Title.jsx'
import Loading from 'fengui/component/page/Loading'

let Body = React.createClass({
  componentWillMount () {
    let {roadData,roadboo,sum}=this.props;
    this.props.init();
  },
  render () {
    let {roadData,pullDown2,roadboo,sum,tomap} = this.props;
      
    if(roadboo){
      return (
        <div className={styles.mainBox}>
          <div className={styles.headbox}>
            共检查<span>124</span>项，以下<span>{sum}</span>项有问题，需要完善：
          </div>
          <div className={styles.infobox}>
            {
              roadData.map((value, key)=>{
                return(
                  <div className={styles.firstbox} key={key} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                    <div className={`${value.errnumber==0 ? styles.nomal : styles.wrong} ${styles.iconbox}`}></div>
                    <div className={styles.fsttitle}>{value.name}<span className={styles.numbox}>{value.errnumber}</span><span style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>项有问题</span></div>
                    <div className={styles.line}></div>
                    <div className={value.errnumber ? styles.secbox :styles.hiddenbox}>
                      {
                        value.errnumber ?
                          value.content.map((value, key2)=>{
                            return(
                              <div className={styles.sceinfobox} key={key2} style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                                <div className={styles.sceitem}>
                                  <span>{value.name+'-'}</span><span></span>共<span className={styles.numbox2}>{value.errnumber}</span><span>项</span>
                                  <div className={styles.pullicon} onClick={(e)=>pullDown2(e.target)}></div>
                                  <div className={styles.line2}></div>
                                </div>
                                  
                                <div className={styles.thirdbox} >
                                  {
                                    value.content.map((value, key3)=>{
                                      if(value.errnumber){
                                        return(
                                          <div className={styles.thirdinfobox} key={key3}style={value.errnumber ? {display:'inlineTable'} : {display:'none'}}>
                                            <Title title={value.name}/>
                                            <div className={styles.textinfobox}>
                                              {
                                                value.content != undefined && value.content.map((value, key4)=>{
                                                  return(
                                                      <div className={`${value.content != undefined ? styles.show : styles.none} ${styles.libox}`} key={key4} onClick={()=>tomap()}>
                                                        {value.content != undefined && <div>{value.name}</div>}
                                                        {value.content != undefined && <div>{value.content}</div>}
                                                      </div>
                                                  )
                                                })
                                              }
                                            </div>
                                          </div>
                                        )
                                      }
                                      
                                    })
                                  }
                                </div>
                              </div>
                            )
                          })
                        : <div></div>
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
    roadData: state.vars.resualt,
    roadboo:state.vars.roadboo,
    sum:state.vars.sum,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      $.ajax({
        async: true,
        type : "POST",
        url : 'http://172.16.1.2:8080/database/analysisresults',
        // url : url,
        data: '',
        dataType: 'json',
        contentType:'application/json',
        complete: function(msg){
            // console.log(msg.responseText);
            
        },
        success : function(data) {
            dispatch(actions.setVars('resualt', data));
            dispatch(actions.setVars('roadboo', true));
            let arr3 = [];
            data.map((value,key)=>{
              arr3.push(value.errnumber)            
            })
            dispatch(actions.setVars('sum', eval(arr3.join("+"))));

        }
        
      })
    },
    // pullDown:(key)=>{
    //   $(key).siblings().fadeToggle();
    // },
    pullDown2:(key)=>{
      $(key).parent().siblings().fadeToggle();
    },
     tomap: ()=> {
      window.open("wmap", "_blank");
      // window.open ("framepage", "qweqeqewqe", 'height=400, width=710, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, left=400, top=400')
      // : message.error('暂无该项评估报告',5);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
