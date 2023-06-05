import { useContext } from 'react'
import { ProductContext } from '../../context/ProductProvider'
import style from './ProductCardWithContext.module.css'

export const ProductCardWithContext = () => {
  const { count, decrement, increment, min, max } = useContext(ProductContext)

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
            disabled={count === min}
            onClick={decrement}
          >
            -
          </button>
          <span className={`${style.counter} ${style.counterNum}`}>
            {count}
          </span>
          <button
            className={style.counter}
            disabled={count === max}
            onClick={increment}
          >
            +
          </button>
        </div>
      </footer>
    </article>
  )
}
