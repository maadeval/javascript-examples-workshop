import style from './TodoForm.module.css'

export const TodoForm = ({
  handleSubmitForm,
  handleResetForm,
  handleInputChange,
  value,
  error,
}) => {
  return (
    <form className={style.form} onSubmit={handleSubmitForm}>
      <label className={style.labelContainer}>
        Escriba un nuevo item:
        <input autoFocus value={value} onChange={handleInputChange} />
        {error && <span>{error}</span>}
      </label>
      <div>
        <button type='submit'>Guardar Item</button>
        <button type='button' onClick={handleResetForm}>
          Limpiar formulario
        </button>
      </div>
    </form>
  )
}
