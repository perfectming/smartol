import React from 'react'
import {connect} from 'react-redux'
import styles from './Tree.scss'
import {loading} from 'fengui/component/popup'
import {Menu, Icon} from 'antd'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
const SubMenu = Menu.SubMenu;

let Tree = React.createClass({
  componentWillMount () {
    let {init, params: {header, menu, page}} = this.props;
    init(header, menu, page);
  },
  render () {
    let {activeNodes, params: {menu}, changePage, pageinfo, activeKey=1} = this.props;
    return (
      <div className={styles.mainBox}>
        <div className={styles.treeBox}>
          <div className={styles.treeScroll}>
            <Menu
              onClick={(e) => changePage(e)}
              style={{width: 240}}
              selectedKeys={[activeNodes]}
              defaultOpenKeys={[menu]}
              mode="inline"
            >
              {
                pageinfo && pageinfo.menu[+activeKey].tree.map((value) => {
                  if (value.menu) {
                    return (
                      <SubMenu key={value.menu} title={<span><Icon type={value.icon}/><span>{value.name}</span></span>}>
                        {
                          value.subMenu.map((subMenu) => {
                            return (
                              <Menu.Item key={subMenu.url}>{subMenu.icon &&
                              <Icon type={subMenu.icon}/>}{subMenu.name}</Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  } else {
                    return (
                      <Menu.Item key={value.url}>{value.icon && <Icon type={value.icon}/>}{value.name}</Menu.Item>
                    )
                  }
                })
              }
            </Menu>
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    activeNodes: state.vars.treeActiveNods,
    activeKey: state.vars.headerActiveKey,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: (header, menu, page) => {
      dispatch(actions.setVars('treeActiveNods', `/${header}/${menu}/${page}`));
    },
    changePage: (e) => {
      dispatch(actions.setVars('treeActiveNods', e.key));
      browserHistory.push(e.key);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tree)
