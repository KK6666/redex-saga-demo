import axios from 'axios'
import { GET_LIST, CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType'

// dispatch原本只可以接受一个对象，现在通过redux-thunk可以接受一个函数，接收函数后会先执行函数，然后将函数执行的结果发送给store
export const getTodoList = () => {
  return (dispatch) => axios.get(`http://yapi.smart-xwork.cn/mock/147723/getList`).then(res => {
    const data = res.data.data.list
    console.log('data: ', data);
    const action = getListAction(data)
    dispatch(action)
  })
}

export const getListAction = (value) => ({
  type: GET_LIST,
  value
})

export const changeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = (value) => ({
  type: ADD_ITEM,
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})