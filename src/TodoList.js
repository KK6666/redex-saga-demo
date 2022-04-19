import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputValueAction, addItemAction, deleteItemAction } from './store/actionCreator'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.btnClick = this.btnClick.bind(this)
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    this.listItemClick = this.listItemClick.bind(this)  //转变this指向
    // 派发action，改变了store里的state，但是组件的state并没有改变，将这里的订阅注释掉后，可以发现组件的input的value未改变
    store.subscribe(this.storeChange) //订阅Redux的状态
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            value={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={this.btnClick}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={this.listItemClick.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

  changeInputValue(e) {
    console.log(e.target.value)
    const action = changeInputValueAction(e.target.value)
    store.dispatch(action)
  }
  btnClick(e) {
    const action = addItemAction()
    store.dispatch(action)
  }
  listItemClick(index) {
    console.log('index: ', index);
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
    // setState是异步的，这里打印执行完SetState的state
    setTimeout(() => {
      console.log(`stateAfterSetState`, this.state)
    }, 0)

  }
}
export default TodoList;