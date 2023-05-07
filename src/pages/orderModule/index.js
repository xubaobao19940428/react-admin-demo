import React, { Component } from 'react'

class OrderList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			a: 1,
		}
	}
	componentDidMount() {
		console.log(this.add(100))

		console.log(this.sunFunciton(1, 100, 0))
	}
	add(endNum) {
		if (endNum == 1) {
			return endNum
		} else {
			return endNum + this.add(endNum - 1)
		}
	}
	sunFunciton(start, end, num) {
		num = start + end
		start++
		end--
		if (start > end) {
			return num
		} else {
			return num + this.sunFunciton(start, end, num)
		}
	}
	clikChange() {
		let a = this.state.a
		this.setState({
			a: a + 1,
		})
	}
	shouldComponentUpdate(nexProps, nextState) {
        if(nextState.a>=3){
            return false
        }else{
            return true
        }
		
	}
	render() {
        let {a} = this.state
		return (
			<div className="home-module" onClick={() => this.clikChange()}>
				{/* 订单页{a} */}
            
                <ul>
                    
                </ul>
			</div>
		)
	}
}
export default OrderList
