import { useState } from 'react'
import style from './ProductCardWithCustomEvent.module.css'

const MIN_COUNT = 0
const MAX_COUNT = 10

export const ProductCardWithCustomEvent = () => {
  const [count, setCount] = useState(MIN_COUNT)

  const increment = () => {
    if (count === MAX_COUNT) return
    setCount(count + 1)
  }

  const decrement = () => {
    if (count === MIN_COUNT) return
    setCount(count - 1)
  }

  return (
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
            onClick={decrement}
          >
            -
          </button>
          <span className={`${style.counter} ${style.counterNum}`}>
            {count}
          </span>
          <button
            className={style.counter}
            disabled={count === MAX_COUNT}
            onClick={increment}
          >
            +
          </button>
        </div>
      </footer>
    </article>
  )
}
