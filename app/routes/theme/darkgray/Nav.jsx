import React from 'react'
import {connect} from 'react-redux'
import styles from './Nav.scss'
// import {Menu, Icon} from 'antd'
import actions from 'fengui/redux/actions'
import { browserHistory } from 'react-router'

let Nav = React.createClass({
  componentDidUpdate () {
    let {init, params: {page}, pageinfo,navindex} = this.props;
    init(page, pageinfo,navindex);
  },
  componentWillMount () {
    let {init2, params: {page}, pageinfo,navindex} = this.props;
    init2(page, pageinfo,navindex);
  },
  render() {
    let {changeActiveKey, activeKey, pageinfo,navindex} = this.props;
    console.log('navindex',navindex)
    // console.log(pageinfo.menu[navindex].tree);
    if(navindex && pageinfo.menu[navindex].tree){
    	return (
	      <div className={styles.mainBox}>
	        <div className={styles.navbox}>
	          {
	            pageinfo.menu[navindex].tree.map((value, key)=>{
	              return (
	                <div key={key} className={`${activeKey===key ? styles.active : styles.nomal} ${styles.navitembox}`} onClick={() => changeActiveKey(value,key)}>
	                	<div className={styles.imgbox}>
	                		<img src={value.icon}/>
	                	</div>
	                  
	                  <div>{value.name}</div>
	                </div>
	              )
	            })
	          }
	        </div>
	      </div>
	    );
    }else{
    	return(
    		<div></div>
    	)
    }
    
  }
})

const mapStateToProps = (state) => {
  return {
    activeKey: state.vars.navActiveKey,
    navindex: state.vars.navindex,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (page, pageinfo,navindex) => {
      console.log(pageinfo,navindex)
      navindex && pageinfo.menu[navindex].tree && pageinfo.menu[navindex].tree.map((value, key)=>{
        if(value.engname === page) {
          console.log('key',key)
          dispatch(actions.setVars('navActiveKey', key));
          // dispatch(actions.setVars('navindex', key));

        }
      })
    },
    init2: (page, pageinfo,navindex) => {
      console.log(pageinfo,navindex)
      navindex && pageinfo.menu[navindex].tree && pageinfo.menu[navindex].tree.map((value, key)=>{
        if(value.engname === page) {
          console.log('key',key)
          dispatch(actions.setVars('navActiveKey', key));
          // dispatch(actions.setVars('navindex', key));

        }
      })
    },
    changeActiveKey: (value,key) => {
      // console.log(value);
      dispatch(actions.setVars('navActiveKey', key));
      // console.log(e.item.props);
      browserHistory.push(value.url);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)