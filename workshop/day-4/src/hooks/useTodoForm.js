import { useEffect, useState } from 'react'
import { validateInputError } from '../utils/todos/validateInputError'

export const useTodoForm = () => {
  const [inputState, setInputState] = useState(INITIAL_INPUT_STATE)

  const handleInputChange = (evt) => {
    setInputState((lastValues) => ({
      ...lastValues,
      value: evt.target.value,
    }))
  }

  const handleResetForm = () => {
    setInputState(INITIAL_INPUT_STATE)
  }

  useEffect(() => {
    const lenghtOfInput = inputState.value.length

    if (lenghtOfInput === 0) return

    const error = validateInputError(inputState.value)

    setInputState((lastValues) => ({
      ...lastValues,
      error,
    }))
  }, [inputState.value])

  return {
    ...inputState,
    handleInputChange,
    handleResetForm,
  }
}

const INITIAL_INPUT_STATE = {
  value: '',
  error: null,
}
