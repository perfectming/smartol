import React from 'react'
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

export default Body
