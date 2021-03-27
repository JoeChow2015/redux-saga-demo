import React from 'react'

import { connect } from 'react-redux'

class ComB extends React.Component {
    handleClick = () => {
        console.log('comB props', this.props)
        this.props.dispatch({
            type: 'pro',
            data: 123
        })
    }
    renderList = () => {
        if (!this.props.proList) return
        return this.props.proList.map(item => {
            return (
                <div key={item.name}>
                    <div>名称：{item.name}</div>
                    <div>价格：{item.price}</div>
                </div>
            )
        })
    }
    render () {
        return (
            <>
                <button onClick={this.handleClick}>发送pro 异步action</button>
                <br/>
                商品列表：
                {this.renderList()}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state.pro)
}

export default connect(mapStateToProps)(ComB)