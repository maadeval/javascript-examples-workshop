import { useContext } from 'react'
import { AlertContext } from '../../context/AlertProvider'

import style from './AlertExampleWithContext.module.css'

export const AlertExampleWithContext = () => {
  const { message } = useContext(AlertContext)

  if (!message) return null

  return (
    <div className={style.alert}>
      <p className={style.title}>Alert message:</p>
      {message}
    </div>
  )
}
