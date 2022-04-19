import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType'

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