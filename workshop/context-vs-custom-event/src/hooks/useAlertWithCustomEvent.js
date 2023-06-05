import { useEffect, useState } from 'react'
import { alertBox } from '../events/alertBox'

export const useAlertWithCustomEvent = () => {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const callback = (content) => setMessage(content)

    const event = alertBox.subscribe(callback)

    return () => alertBox.unsubscribe(event)
  }, [])

  useEffect(() => {
    if (!message) return

    const timeoutId = setTimeout(() => setMessage(null), 3000)

    return () => clearTimeout(timeoutId)
  }, [message])

  return {
    message,
  }
}
