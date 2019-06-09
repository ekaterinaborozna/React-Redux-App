import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SELECTED_TODO } from './actionsTypes'

let TodoId = 2


export const addTodo = (text, textinformation, name, date) => ({
    type: ADD_TODO,
    id: TodoId++,
    text,
    textinformation,
    name,
    date
    
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const select = (todo) => {
    return {
        type: SELECTED_TODO,
        payload: todo
    }
}
