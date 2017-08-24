import React from 'react'
import {connect} from 'react-redux'
import ReactHighcharts from 'react-highcharts'

let Component = React.createClass({
  componentDidMount () {
  },

  render () {
    let config = {
      chart: {
        backgroundColor: 'rgba(46, 46, 65, 0)',
        plotBackgroundColor: 'rgba(46, 46, 65, 0)',
        plotBorderWidth: 0,
        borderWidth: 0,
        plotShadow: false,
        width: 320,
        height: 300
      },
      title: {
        text: ''
      },
      tooltip: {
        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        pointFormat: '<b>{point.percentage:.0f}%</b>'
      },
      credits: {
        enabled: false // 不显示highCharts版权信息
      },
      colors: ['#C98730', '#C9A44E', '#DCBB6F', '#EED190'],
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderWidth: 0,
          size: '65%',
          innerSize: '60%',
          dataLabels: {
            enabled: true,
            distance: 10,
            borderRadius: 10,
            color: 'gray'
          }
        }
      },
      series: [{
        type: 'line',
        name: 'name',
        data: [1,1,1,1]
      }]
    }
    console.log(this.props);
    return (
      <div>
        <ReactHighcharts config={config} />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    asset: state.vars.intellV2Asset
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (data) => {
      let chartData = []
      data.map((value, key) => {
        chartData.push({
          name: value.assetName,
          y: value.weight,
          sliced: key === 0,
          selected: key === 0
        })
      })
      return chartData
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)

