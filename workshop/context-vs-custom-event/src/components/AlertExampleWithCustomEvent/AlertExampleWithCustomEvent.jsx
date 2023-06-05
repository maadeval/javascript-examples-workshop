import { useAlertWithCustomEvent } from '../../hooks/useAlertWithCustomEvent'
import style from './AlertExampleWithCustomEvent.module.css'

export const AlertExampleWithCustomEvent = () => {
  const { message } = useAlertWithCustomEvent()

  if (!message) return null

  return (
    <div className={style.alert}>
      <p className={style.title}>Alert message:</p>
      {message}
    </div>
  )
}
