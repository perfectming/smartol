import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import apiClient from 'fengui/util/apiClient'
import Loading from 'fengui/component/page/Loading'
import FixedContent from 'fengui/component/page/FixedContentpc'
import { browserHistory } from 'react-router'

let Page = React.createClass({
  componentDidMount () {
    this.props.init();
  },
  render () {
    let {} = this.props;
    let host=window.location.host;
    // console.log(params)
    // if (!pageinfo) {
    //   return <Loading/>
    // }
    return (
      <FixedContent mode="fullWidth" width={1920}>
        <iframe frameBorder={'no'} width={'100%'} height={1080} src={'http://'+host+'/main/app/arlh.html'}></iframe>
        
      </FixedContent>
      
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
      browserHistory.push('/main/app/arlh.html');
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
