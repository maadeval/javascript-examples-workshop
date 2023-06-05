import { createContext } from 'react'
import { useAlert } from '../hooks/useAlert'

export const AlertContext = createContext({
  message: null,
  setContentMessage: () => {},
})

export const AlertProvider = ({ children }) => {
  const { message, setContentMessage } = useAlert()

  return (
    <AlertContext.Provider value={{ message, setContentMessage }}>
      {children}
    </AlertContext.Provider>
  )
}
