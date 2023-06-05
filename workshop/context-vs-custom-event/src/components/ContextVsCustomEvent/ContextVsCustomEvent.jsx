import { useState } from 'react'
import style from './ContextVsCustomEvent.module.css'

const MIN_COUNT = 0
const MAX_COUNT = 10

export const ContextVsCustomEvent = () => {
  const [count, setCount] = useState(MIN_COUNT)

  const handleLessCount = () => {
    if (count === MIN_COUNT) return
    setCount(count - 1)
  }

  const handleMoreCount = () => {
    if (count === MAX_COUNT) return
    setCount(count + 1)
  }

  return (
    <main className={style.container}>
      <h1 className={style.title}>Context vs CustomEvent! 💥</h1>
      <section className={style.blocksContainer}>
        <article className={style.block}>
          <h3 className={style.secondTitle}>🦖 Con Context</h3>
          <article className={style.cardBox}>
            <figure className={style.cardFigure}>
              <img
                className={style.cardImage}
                src='https://edge-mug.vercel.app/_next/image?url=%2Fmug.png&w=3840&q=75'
              />
            </figure>
            <footer className={style.cardInfo}>
              <h4 className={style.cardTitle}>Vercel Cup</h4>
              <div className={style.counterBox}>
                <button
                  className={style.counter}
                  disabled={count === MIN_COUNT}
                  onClick={handleLessCount}
                >
                  -
                </button>
                <span className={`${style.counter} ${style.counterNum}`}>
                  {count}
                </span>
                <button
                  className={style.counter}
                  disabled={count === MAX_COUNT}
                  onClick={handleMoreCount}
                >
                  +
                </button>
              </div>
            </footer>
          </article>
          <button className={style.button}>Generar alerta</button>
        </article>
        <article className={style.block}>
          <h3>💡 Con CustomEvent</h3>
          <button className={style.button}>Generar alerta</button>
        </article>
      </section>
    </main>
  )
}
