import { Link } from "react-router-dom"

export const Top = () => {
  return (
    <div>
      <h1>Top</h1>
      <ul>
        <li><Link to={"/preload-query"}>/preload-query</Link></li>
      </ul>
    </div>
  )
}