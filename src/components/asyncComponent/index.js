import React, { Component } from 'react'
export default function asyncComponent(importantComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }
        componentDidMount() {
            importantComponent().then((mod) => {
                this.setState({
                    component: mod.default || mod
                })
            })
        }
        render() {
            const C = this.state.component
            return C ? <C {...this.props} /> : null
        }
    }
    return AsyncComponent
}