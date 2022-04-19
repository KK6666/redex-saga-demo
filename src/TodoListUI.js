import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            value={this.props.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.props.changeInputValue}
          />
          <Button type="primary" onClick={this.props.btnClick}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (<List.Item onClick={() => this.props.listItemClick(index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;