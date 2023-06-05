import { useContext } from 'react'
import { AlertContext } from '../../context/AlertProvider'
import { ProductCardWithContext } from '../ProductCardWithContext/ProductCardWithContext'
import { CancelIcon } from '../icons/CancelIcon'
import { CheckIcon } from '../icons/CheckIcon'
import style from './ExampleWithContext.module.css'

export const ExampleWithContext = () => {
  const { setContentMessage } = useContext(AlertContext)

  return (
    <>
      <section className={style.blocksContainer}>
        <article className={style.block}>
          <h3 className={style.secondTitle}>🦖 Con Context</h3>
          <ProductCardWithContext />
          <button
            onClick={() => setContentMessage(<h3>Alert generated! 🚀</h3>)}
            className={style.button}
          >
            Generar alerta
          </button>
          <div className={style.ventageBlock}>
            <CheckIcon
              style={{ display: 'block' }}
              height={'1.5rem'}
              color='green'
            />
            <p>Permite tener estados globales compartidos.</p>
          </div>
          <div className={style.ventageBlock}>
            <CancelIcon
              style={{ display: 'block' }}
              height='1.5rem'
              color='red'
            />
            <p>
              Se renderizan muchos componentes que no utilizan este contexto.
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
