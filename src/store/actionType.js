// action的type统一管理的意义：
// 1.复用type
// 2.写错了常量名称，程序会直接在浏览器和控制台报错
export const CHANGE_INPUT_VALUE = new Set() //new Set() 保证定义的常量type是唯一的
export const ADD_ITEM = new Set()
export const DELETE_ITEM = new Set()