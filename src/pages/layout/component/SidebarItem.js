import React, { Component } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu
class SideBarItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0,
		}
	}
	componentDidMount() {}
	shouldComponentUpdate() {
		return true
	}
	handleClick = (e) => {
		this.setState({
			current: e.key,
		})
	}
	hasOneShowingChild(children = [], parent) {
		const showingChildren = children.filter((item) => {
			if (item.hidden) {
				return false
			} else {
				// Temp set(will be used if only has one showing child)
				this.onlyOneChild = item
				return true
			}
		})
		if (showingChildren.length === 1) {
			return true
		}
		if (showingChildren.length === 0) {
			this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
			return true
		}

		return false
	}
	clickRouter(path) {
        console.log(this.props)
		this.props.history.push({
			pathname: path,
		})
	}
	render() {
		return (
			<div>
				{this.hasOneShowingChild(
					this.props.router.children,
					this.props.router
				) ? (
					<Menu.Item
						key={this.props.router.children[0].path}
						onClick={() =>
							this.clickRouter(this.props.router.children[0].path)
						}
					>
						{this.props.router.meta.title}
					</Menu.Item>
				) : (
					<SubMenu
						key={this.props.router.path}
						icon={<AppstoreOutlined />}
						title={this.props.router.meta.title}
					>
						{this.props.router.children.map((child, index) => {
							return (
								<Menu.Item
									key={child.path}
									onClick={() => this.clickRouter(child.path)}
								>
									{child.meta.title}
								</Menu.Item>
							)
						})}
					</SubMenu>
				)}{' '}
			</div>
		)
	}
}
export default withRouter(SideBarItem)
