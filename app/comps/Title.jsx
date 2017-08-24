import React from 'react'
import {connect} from 'react-redux'
import styles from './Title.scss'

let Title = React.createClass({
  componentWillMount () {
    this.props.init();
  },
  render () {
    let {title} = this.props;
      return (
        <div className={styles.mainBox}>
          {title}
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
