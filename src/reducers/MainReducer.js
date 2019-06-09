import { combineReducers } from 'redux'
import todos from './TodoReducer'
import activetodos from './TodoActiveReducer'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  todos, activetodos,
  visibilityFilter
})