import style from './ContextVsCustomEvent.module.css'

export const ContextVsCustomEvent = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>Context vs CustomEvent! 💥</h1>
      <section className={style.blocksContainer}>
        <article className={style.block}>
          <h3>🦖 Con Context</h3>
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
