import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import Loading from 'fengui/component/page/Loading'
import styles from './Framepage3.scss'

import { browserHistory } from 'react-router'

let Page = React.createClass({
  componentDidMount () {
    this.props.init();
  },
  render () {
    let {} = this.props;
    // console.log(params)
    // if (!pageinfo) {
    //   return <Loading/>
    // }
    return (
     22222222222222222223
      
    )
  }
})


const mapStateToProps = (state) => {
  return {
    // pageinfo: state.vars.importantPageInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
