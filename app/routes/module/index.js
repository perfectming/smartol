module.exports = {
  path: '/',
  childRoutes: [
    {
      path: ':header/:menu/:page',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Page.jsx'))
        })
      }
    },{
      path: 'index',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Turn'))
      })
    }
  }
  ]
}
