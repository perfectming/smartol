import React from 'react'
import DarkGray from './darkgray/Page'

let Page = React.createClass({
  render () {
    let {params, pageinfo} = this.props;
    return (
      <div>
        {
          pageinfo.theme === 'darkgray' && <DarkGray params={params} pageinfo={pageinfo}/>
        }
      </div>
    )
  }
})

export default Page
