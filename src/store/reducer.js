import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType'

const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
}
export default (state = defaultState, action) => {
  console.log('state: ', state, action);
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    return newState
  }
  if (action.type === DELETE_ITEM) {
    console.log('action: ', action);
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}
