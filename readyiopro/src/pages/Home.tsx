import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to FakeStore </h1>
      <p>This is application was build by Mohammed Salman for the interview task</p>
      <Link to="/products" className="btn">
        View Products
      </Link>
    </div>
  )
}
