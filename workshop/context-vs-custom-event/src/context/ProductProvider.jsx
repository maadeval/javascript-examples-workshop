import { createContext } from 'react'
import { useProductCounter } from '../hooks/useProductCounter'

export const ProductContext = createContext({
  count: 0,
  min: 0,
  max: 0,
  increment: () => {},
  decrement: () => {},
})

export const ProductProvider = ({ children }) => {
  const { count, min, max, ...productHandlers } = useProductCounter()

  return (
    <ProductContext.Provider value={{ count, min, max, ...productHandlers }}>
      {children}
    </ProductContext.Provider>
  )
}
