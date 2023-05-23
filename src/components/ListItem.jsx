import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Checkbox, List, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { removeTodoItem, updateTodoItem } from '../store/todoSlice'

const checkboxStyle: React.CSSProperties = {
  marginRight: 8,
}
const textStyle: React.CSSProperties = {
  textAlign: 'start',
}

const disable: React.CSSProperties = {
  color: 'grey',
  textDecorationLine: 'line-through',
}

export const ListItem = ({ id, todo, completed }) => {
  const dispatch = useDispatch()

  const onChange = e =>
    dispatch(
      updateTodoItem({
        completed: e.target.checked,
        id: e.target.id,
      })
    )

  const onRemoveTodo = id => dispatch(removeTodoItem(id))

  return (
    <List.Item>
      <div>
        <Checkbox
          {...{ id, onChange, checked: completed, style: checkboxStyle }}
        />
        <Typography.Text style={{ ...textStyle, ...(completed && disable) }}>
          {todo}
        </Typography.Text>
      </div>

      <Button onClick={() => onRemoveTodo(id)}>
        <DeleteOutlined />
      </Button>
    </List.Item>
  )
}
