import { useState } from 'react'
import { useTodoForm } from './hooks/useTodoForm'
import { useTodoList } from './hooks/useTodoList'

function App() {
  const { error, value, handleInputChange, handleResetForm } = useTodoForm()
  const { handleDelete, handleSave, handleUpdate, todos } = useTodoList()

  const [editInput, setEditInput] = useState('')
  const [selectedTodo, setSelectedTodo] = useState()

  const handleSubmitForm = (evt) => {
    evt.preventDefault()

    handleSave({ value })
    handleResetForm()
  }

  const handleCancelEdit = () => {
    setSelectedTodo()
  }

  const handleEdit = ({ id }) => {
    handleUpdate({
      id,
      value: editInput,
    })
    handleCancelEdit()
  }

  return (
    <>
      <TodoForm
        handleInputChange={handleInputChange}
        handleResetForm={handleResetForm}
        handleSubmitForm={handleSubmitForm}
        value={value}
        error={error}
      />
      <section>
        {todos.length === 0 ? (
          <p>No hay elementos en la lista.</p>
        ) : (
          <ul>
            {todos.map(({ id, value }) => (
              <li key={id}>
                {selectedTodo === id ? (
                  <>
                    <input
                      defaultValue={value}
                      onChange={(ev) => setEditInput(ev.target.value)}
                      autoFocus
                    />
                    <button onClick={() => handleEdit({ id })}>
                      Guargar cambios
                    </button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <span>{value}</span>
                    <button onClick={() => setSelectedTodo(id)}>Editar</button>
                    <button onClick={() => handleDelete({ id })}>
                      Eliminar
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

const TodoForm = ({
  handleSubmitForm,
  handleResetForm,
  handleInputChange,
  value,
  error,
}) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Escriba un nuevo item:
        <input autoFocus value={value} onChange={handleInputChange} />
        {error && <span>{error}</span>}
      </label>
      <button type='submit'>Guardar Item</button>
      <button type='button' onClick={handleResetForm}>
        Limpiar formulario
      </button>
    </form>
  )
}

export default App
