import React from 'react'
import {connect} from 'react-redux'
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;


function onChange(date, dateString) {
  console.log(date, dateString);
}

let Component = React.createClass({
  componentDidMount () {
  },

  render () {
    return (
      <div style={{marginTop:40, width:180, marginLeft: 10}}>
        <RangePicker onChange={onChange} />
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)

