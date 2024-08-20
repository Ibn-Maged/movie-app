import { useParams } from "react-router-dom"

const Details = () => {
  const params = useParams();
  return (
    <div>Details of {params.id}</div>
  )
}

export default Details