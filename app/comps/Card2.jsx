import React from 'react'
import {Card} from 'antd'

let Element = React.createClass({
  render () {
    let {name, data, detail} = this.props.compInfo;
    return (<div style={{ background: '#ECECEC', padding: '20px',  height: '100%'}}>
      <Card title={detail.title} bordered={false} style={{ width: '100%',height:'100%'}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>)
  }
})

export default Element
