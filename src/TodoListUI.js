import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          value={props.inputValue}
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputValue}
        />
        <Button type="primary" onClick={props.btnClick}>增加</Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => props.listItemClick(index)}>{item}</List.Item>)}
        />
      </div>
    </div>
  );

}

export default TodoListUI;