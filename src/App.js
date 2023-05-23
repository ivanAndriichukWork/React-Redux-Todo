import { Layout } from 'antd'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import React from 'react'

const containerStyle: React.CSSProperties = {
  paddingInline: 50,
}

const App = () => (
  <Layout style={containerStyle}>
    <AddTodo />
    <TodoList />
  </Layout>
)

export default App
