import { useParams } from 'react-router-dom'

export const RepositoryPage = () => {
  const { organization, name } = useParams()
  return (
    <>
      <h2>Information from URL:</h2>
      <p>
        <strong>Organization:</strong> {organization}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
    </>
  )
}
