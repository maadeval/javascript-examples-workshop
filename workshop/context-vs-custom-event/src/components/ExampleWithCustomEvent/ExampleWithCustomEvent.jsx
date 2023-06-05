import { alertBox } from '../../events/alertBox'
import { ProductCardWithCustomEvent } from '../ProductCardWithCustomEvent/ProductCardWithCustomEvent'
import { CancelIcon } from '../icons/CancelIcon'
import { CheckIcon } from '../icons/CheckIcon'
import style from './ExampleWithCustomEvent.module.css'

export const ExampleWithCustomEvent = () => {
  return (
    <section className={style.blocksContainer}>
      <article className={style.block}>
        <h3 className={style.secondTitle}>🐥 Con Custom Event</h3>
        <ProductCardWithCustomEvent />
        <button
          onClick={() => alertBox.setContent(<p>Content with Custom Event!</p>)}
          className={style.button}
        >
          Generar alerta
        </button>
        <div className={style.ventageBlock}>
          <CancelIcon
            style={{ display: 'block' }}
            height='1.5rem'
            color='red'
          />
          <p>No permite tener estados globales compartidos.</p>
        </div>
        <div className={style.ventageBlock}>
          <CheckIcon
            style={{ display: 'block' }}
            height={'1.5rem'}
            color='green'
          />
          <p>Se renderiza solo el componente asociado al estado.</p>
        </div>
      </article>
    </section>
  )
}
