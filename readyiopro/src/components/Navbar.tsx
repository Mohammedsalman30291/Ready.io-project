import { NavLink } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <h3>FakeStore SPA</h3>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <button onClick={toggleTheme}>🌙</button>
      </div>
    </nav>
  )
}
