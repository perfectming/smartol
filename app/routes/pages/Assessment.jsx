import React from 'react'
import {connect} from 'react-redux'
import styles from './Assessment.scss'
import actions from 'fengui/redux/actions'
import data from '../../../config/data.js'
import Title from '../../comps/Title.jsx'
import { browserHistory } from 'react-router'
import Loading from 'fengui/component/page/Loading'
import { Alert, message } from 'antd' 
import draga from '../../../config/drag'         
import Framepage2 from './Framepage2.jsx'        
  message.config({
    top: 100,
    duration: 2,
  });     
 

let Body = React.createClass({
  componentWillMount () {
    let {proposaldata,bool} = this.props;
    this.props.init();
    
  },
  componentWillUnmount () {
    let {bool} = this.props;
    this.props.leave();
    
  },
  componentDidMount () {
    // let {bool} = this.props;
    this.props.drag();
    
  },

  render () {
    let {textfocus,lostfocus,onfocus,topage,proposaldata,bool,pageboo=true,btnbool,frameboo} = this.props;
    let arr = ['资源市场：','输气工艺：','线路工程：','站场工艺：','配套工程：','环保用地：','经济评价：'];
    // let data = data.data.modata.data;
    // if(proposaldata==undefined){
    //   proposaldata=[
    //     {project_name: "资源市场", proposal: ""},
    //     {project_name: "输气工艺", proposal: ""},
    //     {project_name: "线路工程", proposal: ""},
    //     {project_name: "站场工艺", proposal: ""},
    //     {project_name: "配套工程", proposal: ""},
    //     {project_name: "环保用地", proposal: ""},
    //     {project_name: "经济评价", proposal: ""}]}
    // console.log("asdddddddddddddd",proposaldata)
    if(bool){
      return (
        <div className={styles.mainBox}>
          <div className={styles.infobox}>
            {
              data.data.menu[1].tree.map((value, key)=>{
                return (
                  <div className={styles.itembox} key={key}>
                    <div className={styles.itemtitle}>
                      {value.name+'：'}
                      <div className={styles.seebtn} onClick={()=>topage(value)}>查看评估报告</div>
                    </div>
                    <textarea id="text" wrap="virtual" spellCheck="false" readOnly="readonly" placeholder="请在这里输入您的意见..." onClick={(e)=>onfocus(e.target)}>
                    {proposaldata[key].proposal}
                    </textarea>
                    <div className={styles.btnbox}>
                      <div onClick={(e)=>lostfocus(e.target,value)}>确认</div>
                      <div style={proposaldata[key].proposal ? {display:'inlineBlock'}:{display:'none'}} onClick={(e)=>textfocus(e.target)}>修改</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {frameboo && <Framepage2/>}
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
    // proposal: state.vars.resualt,
    proposaldata: state.vars.proposaldata,
    bool: state.vars.bool,
    btnbool: state.vars.btnbool,
    frameboo: state.vars.frameboo,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    drag: () => {

    },
    init: () => {
      
      $.ajax({
        async: true,
        type : "POST",
        url : 'http://172.16.1.2:8080/database/find_option',
        // url : url,
        data: {},
        dataType: 'json',
        contentType:'application/json',
        timeout:2000,
        complete: function(msg){
            console.log(msg.responseText);
            
        },
        success : function(data) {
          console.log(data)
          dispatch(actions.setVars('proposaldata', data));
          dispatch(actions.setVars('bool', true));
          //   console.log(JSON.parse('{'+'"data"'+':'+'{'+'"data"'+':'+data+'}'+'}'))
          //   let arr=[];
          //   data.map((value, key)=>{
          //     console.log(value.proposal)
          //     arr.push(value.proposal)
          //   })
          //   console.log(arr)
            
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          if(textStatus=='timeout'){
            message.error('综合评估数据请求失败',3);
            
          // dispatch(actions.setVars('bool', true));

          }
        },
      })
    },
    textfocus: (key) => {           // 修改按钮触发
      $(key).parent().siblings("textarea").focus();
      $(key).parent().siblings("textarea").removeAttr('readOnly');
      $(key).parent().siblings("textarea").css({background:'#DBD8D8',color:'#000',border:'1px solid #6697E7'}); 
    },
    lostfocus: (key,value) => {     // 确认按钮触发
      dispatch(actions.setVars('btnbool', true));

      console.log(value.name)
      console.log($(key).parent().siblings("textarea").val());
      $(key).parent().siblings("textarea").css({background:'#F6F6F6',color:'#777777',borderBottom:'1px solid #666',borderTop:'none',borderLeft:'none',borderRight:'none'});
      $(key).parent().siblings("textarea").attr('readOnly',"readonly");
      if($(key).parent().siblings("textarea").val()){
        $(key).siblings("div").show();
      }else{
        $(key).siblings("div").hide();

      }
      
      let text = $(key).parent().siblings("textarea").val();
      let datas = JSON.stringify({
        "project_name":value.name,
        "proposal":$(key).parent().siblings("textarea").val()
        
      })
      let datas2 = {
        "project_name":value.name,
        "proposal":$(key).parent().siblings("textarea").val()
        
      }
      // let datas = 
      console.log(datas)
      $.ajax({
        async: true,
        type : "POST",
        url : 'http://172.16.1.2:8080/database/save_option',
        // url : url,
        data: datas,  
        dataType: 'json',
        // contentType:'application/x-www-form-urlencoded',
        contentType:'application/json',
        complete: function(msg){
            // console.log(msg.responseText);
            
        },
        success : function(data) {
            message.success('修改成功',2);
            // $.ajax({
            //   async: true,
            //   type : "POST",
            //   url : 'http://172.16.1.40:8080/database/find_option',
            //   // url : url,
            //   data: {},
            //   dataType: 'json',
            //   contentType:'application/json',
            //   timeout:2000,
            //   complete: function(msg){
            //       console.log(msg.responseText);
                  
            //   },
            //   success : function(data) {
            //     console.log(data[1])
            //     dispatch(actions.setVars('proposaldata', data));
            //     dispatch(actions.setVars('bool', true));
            //     message.success('修改成功',2);
            //     //   console.log(JSON.parse('{'+'"data"'+':'+'{'+'"data"'+':'+data+'}'+'}'))
            //     //   let arr=[];
            //     //   data.map((value, key)=>{
            //     //     console.log(value.proposal)
            //     //     arr.push(value.proposal)
            //     //   })
            //     //   console.log(arr)
                  
                  
            //   },
            //    error: function(XMLHttpRequest, textStatus, errorThrown) {
            //     if(textStatus=='timeout'){
            //       message.error('综合评估数据请求失败',3);
            //     }
            //   },
            // })
            
        }
        // error: function(XMLHttpRequest, textStatus, errorThrown) {
        //   if(textStatus=='timeout'){
        //     message.error('保存失败,请检查网络连接或服务器状态',5);
        //   // dispatch(actions.setVars('bool', true));

        //   }
        // },
        
      })
    },
    onfocus: (key) => {
      console.log('aaa',$(key).val())

      if($(key).val()==''){
        console.log(1212)
        $(key).removeAttr('readOnly')
        $(key).css({background:'#DBD8D8',color:'#000',border:'1px solid #6697E7'}); 
      }
    },
    
    topage: (value)=> {
      value.name=="线路工程" ?
        dispatch(actions.setVars('frameboo', true))
      : message.error('暂无该项评估报告',2);
      // browserHistory.push(value.url);
      
      // dispatch(actions.setVars('headboo',false));
      // dispatch(actions.setVars('headerActiveKey',1));
      // dispatch(actions.setVars('navindex',1))
      // value.name=="线路工程" ?
      // window.open ("framepage", "qweqeqewqe", 'height=400, width=710, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, left=400, top=400')
      // : message.error('暂无该项评估报告',5);
    },
    leave: ()=>{
      dispatch(actions.setVars('bool', false));
    },

   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
