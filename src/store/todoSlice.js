import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from '../api'

const initialState = {
  todos: [],
  getTodosLoading: false,
  postTodoLoading: false,
}

export const fetchTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await getTodosApi()
  return response.todos
})

export const createTodoItem = createAsyncThunk(
  'todos/createTodo',
  createTodoApi
)
export const updateTodoItem = createAsyncThunk('todos/updateTodoItem', body =>
  updateTodoApi(body)
)
export const removeTodoItem = createAsyncThunk('todos/removeTodoItem', id =>
  deleteTodoApi(id)
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // GET
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.getTodosLoading = true
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.getTodosLoading = false
      state.todos = action.payload
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.getTodosLoading = false
    })
    // POST
    builder.addCase(createTodoItem.pending, (state, action) => {
      state.postTodoLoading = true
    })
    builder.addCase(createTodoItem.fulfilled, (state, action) => {
      state.postTodoLoading = false
      state.todos.push(action.payload)
    })
    builder.addCase(createTodoItem.rejected, (state, action) => {
      state.postTodoLoading = false
    })
    // PUT
    builder.addCase(updateTodoItem.fulfilled, (state, action) => {
      state.todos = state.todos.map(item =>
        item.id === action.payload.id ? action.payload : item
      )
    })
    // DELETE
    builder.addCase(removeTodoItem.fulfilled, (state, action) => {
      console.log('🚀 ~> action:', action)
      state.todos = state.todos.filter(item => item.id !== action.payload.id)
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions

export default todoSlice.reducer
