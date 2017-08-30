import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'

import styles from './Body.scss'
import Content from '../../module/Content'

let Body = React.createClass({
  render () {
    let {header, menu, page} = this.props;
      return (<div className={styles.mainBox}>
        <Content page={page}/>
      </div>)
  }
})

const mapStateToProps = (state) => {
  return {
    // wrongdata: state.vars.wrongdata,
    // wrongbool: state.vars.wrongbool,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
