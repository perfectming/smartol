import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import apiClient from 'fengui/util/apiClient'
import Theme from '../theme/Theme'
import Loading from 'fengui/component/page/Loading'
import data from '../../../config/data.js'
import FixedContent from 'fengui/component/page/FixedContentpc'
import styles from './Page.scss';
let Page = React.createClass({
  componentWillMount () {
    this.props.init(data);
  },
  render () {
    let {params, pageinfo} = this.props;
    console.log(params)
    if (!pageinfo) {
      return <Loading/>
    }
    return (
      <FixedContent mode="fullWidth" width={1920}>
        <div className={styles.bodyBox}>
          <Theme params={params} pageinfo={pageinfo}/>
        </div>
        
      </FixedContent>
      
    )
  }
})


const mapStateToProps = (state) => {
  return {
    pageinfo: state.vars.importantPageInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (data) => {
      console.log(data.data)
      // apiClient.get('/mock/control').then((result) => {
      //   console.log('re',result)
        dispatch(actions.setVars('importantPageInfo', data.data));
      // })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
