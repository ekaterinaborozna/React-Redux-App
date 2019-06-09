import { SELECTED_TODO} from '../actions/actionsTypes'

const TodoActiveReducer = (state=null, action) => {
    switch (action.type){

        
        case SELECTED_TODO:
        return  action.payload
        
        default:
        return state
       
        
        
    }
}

export default TodoActiveReducer