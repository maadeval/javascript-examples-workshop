import { useState } from 'react'

const MIN_COUNT = 0
const MAX_COUNT = 10

export const useProductCounter = ({
  min = MIN_COUNT,
  max = MAX_COUNT,
} = {}) => {
  const [count, setCount] = useState(min)

  const decrement = () => {
    if (count === min) return
    setCount(count - 1)
  }

  const increment = () => {
    if (count === max) return
    setCount(count + 1)
  }

  return {
    count,
    decrement,
    increment,
    min,
    max,
  }
}
