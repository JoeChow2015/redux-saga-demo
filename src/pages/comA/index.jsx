import React from 'react'

import { connect } from 'react-redux'

class ComA extends React.Component {
    handleClick = () => {
        console.log('comA props', this.props)
        this.props.getUser()
    }
    render () {
        return (
            <>
                <button onClick={this.handleClick}>发送异步 user action， 获取用户信息</button>
                <br/>
                用户信息：
                <div>姓名：{this.props.userName}</div>
                <div>年龄：{this.props.age}</div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return Object.assign({}, state.user)
}
const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            dispatch({
                type: 'user'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComA)