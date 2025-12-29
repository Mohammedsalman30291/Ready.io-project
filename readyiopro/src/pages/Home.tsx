import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <div className="home-content fade-in">
        <h1 className="slide-up">Welcome to FakeStore SPA</h1>

        <p className="slide-up delay-1">
          This is a Single Page Application built using React and TypeScript.
          It fetches real-time product data from a public API and displays it
          using dynamic routing and reusable components done by <b>Mohammed Salman H.</b>
        </p>

        <div className="home-actions slide-up delay-2">
          <Link to="/products" className="btn">
            Explore Products
          </Link>

          <a
            href="https://fakestoreapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View API
          </a>
        </div>
      </div>
    </div>
  )
}
