import { useState } from 'react'

export const useTodoList = () => {
  const [todos, setTodos] = useState([])

  const handleSave = ({ value }) => {
    setTodos((lastValues) => [
      {
        id: crypto.randomUUID(),
        value,
      },
      ...lastValues,
    ])
  }

  const handleDelete = ({ id }) => {
    setTodos((lastValues) => lastValues.filter((todo) => todo.id !== id))
  }

  const handleUpdate = ({ id, value }) => {
    setTodos((lastValues) =>
      lastValues.map((todo) => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          value,
        }
      })
    )
  }

  return {
    todos,
    handleSave,
    handleDelete,
    handleUpdate,
  }
}
