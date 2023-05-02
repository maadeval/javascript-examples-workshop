const INPUT_VALUE_RANGE = {
  MIN: 3,
  MAX: 24,
}

const INPUT_MESSAGES_ERROR = {
  EMPTY: 'El campo no puede estar vacio',
  LESS_CHARACTERS: `El campo debe tener al menos ${INPUT_VALUE_RANGE.MIN} caracteres`,
  MORE_CHARACTERS: `El campo debe tener menos de ${INPUT_VALUE_RANGE.MAX} caracteres`,
}

export const validateInputError = (inputValue) => {
  const hasOnlyEmptySpaces = inputValue.trim().length === 0
  if (hasOnlyEmptySpaces) return INPUT_MESSAGES_ERROR.EMPTY

  const hasLessCharacters = inputValue.length < INPUT_VALUE_RANGE.MIN
  const hasMoreCharacters = inputValue.length > INPUT_VALUE_RANGE.MAX

  if (hasLessCharacters) return INPUT_MESSAGES_ERROR.LESS_CHARACTERS
  if (hasMoreCharacters) return INPUT_MESSAGES_ERROR.MORE_CHARACTERS

  return null
}
