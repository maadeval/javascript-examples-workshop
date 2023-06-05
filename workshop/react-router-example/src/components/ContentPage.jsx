import { Link } from 'react-router-dom'

export const ContentPage = () => {
  return (
    <>
      <h2>Content of page (repositories):</h2>
      <section>
        <article>
          <h3>Article 1</h3>
          <Link to='/organization1/papatzu'>Read more</Link>
        </article>
        <article>
          <h3>Article 2</h3>
          <Link to='/organization2/reponcio'>Read more</Link>
        </article>
        <article>
          <h3>Article 3</h3>
          <Link to='/organization3/lamcom'>Read more</Link>
        </article>
      </section>
    </>
  )
}
