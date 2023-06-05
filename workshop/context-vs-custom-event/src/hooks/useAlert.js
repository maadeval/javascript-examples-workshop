import { useEffect, useState } from 'react'

const DEFAULT_TIMEOUT = 3000

export const useAlert = (timeout = DEFAULT_TIMEOUT) => {
  const [message, setMessage] = useState(null)

  const setContentMessage = (content) => setMessage(content)

  useEffect(() => {
    if (!message) return

    const timerId = setTimeout(() => {
      setMessage(null)
    }, timeout)

    return () => clearTimeout(timerId)
  }, [message, timeout])

  return {
    message,
    setContentMessage,
  }
}
