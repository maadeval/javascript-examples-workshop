import { ExampleWithContext } from '../ExampleWithContext/ExampleWithContext'
import style from './ContextVsCustomEvent.module.css'

export const ContextVsCustomEvent = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>Context vs CustomEvent! 💥</h1>
      <section className={style.blocksContainer}>
        <ExampleWithContext />
      </section>
    </main>
  )
}
