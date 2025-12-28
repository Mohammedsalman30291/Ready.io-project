import { useEffect, useState } from "react"
import { getProducts } from "../services/Api"
import type { Product } from "../services/Api"
import Card from "../components/Card"
import Loader from "../components/Loader"
import Error from "../components/Error"

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || p.category === category)
  )

  if (loading) return <Loader />
  if (error) return <Error message={error} />

  return (
    <div className="page">
      <input
        placeholder="Search..."
        onChange={e => setSearch(e.target.value)}
      />

      <select onChange={e => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
      </select>

      <div className="grid">
        {filtered.map(p => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
