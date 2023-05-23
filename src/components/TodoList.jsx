import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'
import { compareByCompleted } from '../helpers/compareByCompleted'
import { fetchTodos } from '../store/todoSlice'
import { GET_STORE } from '../store'
import { ListItem } from './ListItem'

export const TodoList = () => {
  const dispatch = useDispatch()
  const { todos, getTodosLoading } = useSelector(GET_STORE.TODOS)
  const data = todos.toReversed().sort(compareByCompleted)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <List
      bordered
      dataSource={data}
      renderItem={({ id, todo, completed }) => (
        <ListItem
          key={id}
          {...{ id, todo, completed }}
          actions={!getTodosLoading ? data : undefined}
        />
      )}
    />
  )
}
