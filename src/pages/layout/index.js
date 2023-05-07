import React, { Component } from 'react'
// import Footer from './component/footer'
import './styles/layout.scss'
import { Menu } from 'antd'
import SidebarItem from './component/SidebarItem'
import { renderRoutes } from 'react-router-config'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import Router from '../../router/index.js'
import { setCollapsed } from '@/redux/actions'
class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			route: props.route,
			current: 'dashboard',
		}
	}
	componentDidMount() {}
	shouldComponentUpdate() {
		return true
	}
	tabUpdate = (item) => {
		this.props.history.push({
			pathname: item.path,
		})
	}
	toggleCollapsed() {
		let actions = {
			type: 'SET_COLLAPSED',
			value: !this.props.collapsed,
		}
		this.props.setToggleCollapsed(actions)
	}
	render() {
		let route = []
		Router.map((item) => {
			if (item.children && item.children.length > 0) {
				item.children.map((item) => {
					route.push(item)
				})
			}
		})
		let newRouter = Router.filter((item) => {
			return item.children && item.children.length > 0
		})
		return (
			<div className="layout">
                
                <Menu
					theme="dark"
					trigger={null}
					collapsible="true"
					defaultSelectedKeys={[this.props.location.pathname]}
					selectedKeys={[this.props.location.pathname]}
					mode="inline"
					inlineCollapsed={this.props.collapsed}
				>
					{' '}
					{newRouter.map((route, index) => {
						return (
							<SidebarItem
								router={route}
								key={route.path}
							></SidebarItem>
						)
					})}{' '}
				</Menu>{' '}
                {/* </div> */}
				
				<div className="view_content">
					<div className="view_content_header">
						<Button
							type="primary"
							onClick={() => this.toggleCollapsed()}
						>
							{' '}
							{React.createElement(
								this.props.collapsed
									? MenuUnfoldOutlined
									: MenuFoldOutlined
							)}{' '}
						</Button>{' '}
					</div>{' '}
					<div className="view_content_section">
						{' '}
						{renderRoutes(route)}{' '}
					</div>{' '}
				</div>{' '}
				{/* <Footer tabUpdate={this.tabUpdate} pathname={this.props.location.pathname}></Footer> */}{' '}
			</div>
		)
	}
}
//这里的stateToProps 是为了将redux 的state 同步到props
const stateToProps = (state) => {
	return {
		collapsed: state.collapsed,
	}
}

const dispatchToProps = (dispatch) => {
	return {
		setToggleCollapsed(actions) {
			let action = setCollapsed(actions)
			dispatch(action)
		},
	}
}
export default connect(stateToProps, dispatchToProps)(Layout)
