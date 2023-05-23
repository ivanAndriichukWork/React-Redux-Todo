const BASE_URL = 'https://dummyjson.com/todos'

export const getTodosApi = () => fetch(BASE_URL).then(res => res.json())

export const createTodoApi = body =>
  fetch(`${BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(res => res.json())

export const updateTodoApi = ({ id, ...rest }) =>
  fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rest),
  }).then(res => res.json())

export const deleteTodoApi = id =>
  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())
