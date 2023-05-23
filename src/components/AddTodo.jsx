import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Layout } from 'antd'
import { createTodoItem } from '../store/todoSlice'
import { GET_STORE } from '../store'

const containerStyle: React.CSSProperties = {
  paddingBlock: 16,
  // backgroundColor: '#7dbcea',
  marginBottom: 16,
  gap: 8,
}

const inputStyle: React.CSSProperties = {
  marginRight: 16,
}

export const AddTodo = () => {
  const dispatch = useDispatch()
  const { postTodoLoading } = useSelector(GET_STORE.TODOS)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const changeHandler = e => setTitle(e.target.value)

  const onSubmit = () => {
    // Simple validation for title
    if (!title.length) {
      return alert('Title is required')
    }

    dispatch(
      createTodoItem({
        todo: title,
        completed: false, // uncompleted by default
        userId: 5, // needs for current API
        description,
      })
    )
  }

  return (
    <Layout style={containerStyle}>
      <Input
        style={inputStyle}
        placeholder="Title..."
        onChange={changeHandler}
      />
      <Input.TextArea placeholder="Description..." onChange={setDescription} />
      <Button
        type="primary"
        style={{ width: 200 }}
        onClick={onSubmit}
        disabled={postTodoLoading}
      >
        Add
      </Button>
    </Layout>
  )
}
