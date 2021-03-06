import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import styles from './Content.scss'
import Road from '../pages/Road'
import Assessment from '../pages/Assessment'
import Filereview from '../pages/Filereview'
import Resource from '../pages/Resource'
import Reportopt from '../pages/Reportopt'
import Framepage from '../pages/Framepage3'
import Wmap from '../pages/Wmap'
import Turn2 from '../pages/Turn2'
import Turn from './Turn'

let Body = React.createClass({
  componentWillMount () {
    this.props.init();
  },
  render () {
    let {header, menu, page} = this.props;
    // console.log(page,'122222222222222222')
      return (<div className={styles.mainBox}>
        {page=='road' && <Road/>}
        {page=='assessment' && <Assessment/>}
        {page=='arlh.html' && <Filereview/>}
        {page=='resource' && <Resource/>}
        {page=='reportopt' && <Reportopt/>}
        {page=='framepage3'&& <Framepage/>}
        {page=='wmap' && <Wmap/>}
        {page=='turn2' && <Turn2/>}
        {page=='turn' && <Turn/>}
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
    init: () => {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
