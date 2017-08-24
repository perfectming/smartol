import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import PieChart from './PieChart'
import DatePicker from './DatePicker'
import LineChart from './LineChart'

let Comp = React.createClass({
  render () {
    let {type} = this.props;
    console.log(type);
    switch (type) {
      // case 'Label':
      //   return <Card compInfo={this.props}/>
      case 'Label2':
        return <Card2 compInfo={this.props}/>

      case 'Pie_chart':
        return <PieChart compInfo={this.props}/>

      case 'DatePicker':
        return <DatePicker compInfo={this.props}/>

      case 'Line_chart':
        return <LineChart compInfo={this.props}/>

      default:
        return <div></div>
    }
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

export default Comp

