import { ContextVsCustomEvent } from './components/ContextVsCustomEvent/ContextVsCustomEvent'
import { AlertProvider } from './context/AlertProvider'
import { ProductProvider } from './context/ProductProvider'

function App() {
  return (
    <AlertProvider>
      <ProductProvider>
        <ContextVsCustomEvent />
      </ProductProvider>
    </AlertProvider>
  )
}

export default App
