import React from 'react'
import Header from './Header'
// import Tree from './Tree'
import Nav from './Nav'
import Body from './Body'
import styles from './Page.scss'

let Theme = React.createClass({
  render () {
    let {params: {header, menu, page}, pageinfo, params, type} = this.props;
    return (
      <div className={styles.suofang}>
        <Header params={params} pageinfo={pageinfo} type={type}/>
        <Nav params={params} pageinfo={pageinfo} type={type}/>
        <Body header={header} menu={menu} page={page} type={type}/>
      </div>
    )
  }
})

export default Theme
