import { AlertExampleWithContext } from '../AlertExampleWithContext/AlertExampleWithContext'
import { AlertExampleWithCustomEvent } from '../AlertExampleWithCustomEvent/AlertExampleWithCustomEvent'
import { ExampleWithContext } from '../ExampleWithContext/ExampleWithContext'
import { ExampleWithCustomEvent } from '../ExampleWithCustomEvent/ExampleWithCustomEvent'
import { WidgetExampleWithContext } from '../WidgetExampleWithContext/WidgetExampleWithContext'
import style from './ContextVsCustomEvent.module.css'

export const ContextVsCustomEvent = () => {
  return (
    <>
      <AlertExampleWithCustomEvent />
      <AlertExampleWithContext />
      <main className={style.container}>
        <h1 className={style.title}>Context vs CustomEvent! 💥</h1>
        <section className={style.blocksContainer}>
          <ExampleWithContext />
          <ExampleWithCustomEvent />
        </section>
      </main>
      <WidgetExampleWithContext />
    </>
  )
}
