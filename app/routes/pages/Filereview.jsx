import React from 'react'
import {connect} from 'react-redux'
import styles from './Filereview.scss'
import actions from 'fengui/redux/actions'
import { browserHistory } from 'react-router'
import Title from '../../comps/Title.jsx'
let Body = React.createClass({
  componentWillMount () {
    this.props.init();
  },
  render () {
    let {toroad,tomap} = this.props;
      return (
        <div className={styles.mainBox}>
          
          <div className={styles.btnbox} onClick={()=>toroad()}></div>
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
    },
    // tomap: ()=> {
    //   window.open("turn", "_blank");
    //   // window.open ("framepage", "qweqeqewqe", 'height=400, width=710, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, left=400, top=400')
    //   // : message.error('暂无该项评估报告',5);
    // }
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
