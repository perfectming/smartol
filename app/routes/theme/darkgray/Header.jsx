import React from 'react'
import {connect} from 'react-redux'
import styles from './Header.scss'
// import {Menu, Icon} from 'antd'
import actions from 'fengui/redux/actions'
import { browserHistory } from 'react-router'

let Header = React.createClass({
  componentWillMount () {
    let {init, params: {menu}, pageinfo} = this.props;
    init(menu, pageinfo);
  },
  render() {
    let {changeActiveKey, activeKey, pageinfo,headboo=true} = this.props;
    // let {activeKey} = this.state;
    if(headboo){
    return (
      <div className={styles.mainBox}>
        <div className={styles.headerbox}>
          {
            pageinfo.menu.map((value, key)=>{
              return (
                <div key={key} className={`${activeKey===key ? styles.active : styles.nomal} ${styles.headitembox}`} onClick={() => changeActiveKey(value,key)}>
                  <img src={value.icon}/>
                  <div>{value.name}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
    }else{
      return (
        <div></div>
      )
    }
  }
})

const mapStateToProps = (state) => {
  return {
    activeKey: state.vars.headerActiveKey,
    headboo: state.vars.headboo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (page, pageinfo) => {
      console.log(pageinfo)
      pageinfo.menu.map((value, key)=>{
        if(value.url === page) {
          console.log('key',key)
          dispatch(actions.setVars('headerActiveKey', key));
          dispatch(actions.setVars('navindex', key));

        }
      })
    },
    changeActiveKey: (value,key) => {
      console.log(value);
      dispatch(actions.setVars('headerActiveKey', key));
      dispatch(actions.setVars('navindex', key));
      // console.log(e.item.props);
      browserHistory.push(value.mainPage);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
