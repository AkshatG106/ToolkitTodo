import { createSlice,nanoid } from "@reduxjs/toolkit"; 

const initialState = {
    todos :[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state, action) => {
            const index = state.todos.findIndex((todo)=>todo.id===action.payload.id)
            if(index !== -1){
                state[index] = action.payload.updatedTodo;
            }
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;