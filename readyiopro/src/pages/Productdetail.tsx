import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../services/Api"
import type { Product } from "../services/Api"
import Loader from "../components/Loader"
import Error from "../components/Error"

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!id) return

    getProductById(id)
      .then(setProduct)
      .catch(err => setError(err.message))
  }, [id])

  if (!product && !error) return <Loader />
  if (error) return <Error message={error} />

  return (
    <div className="page">
      <img src={product!.image} className="detail-img" />
      <h2>{product!.title}</h2>
      <p>{product!.description}</p>
      <h3>₹ {product!.price}</h3>

      <Link to="/products" className="btn">
        Back
      </Link>
    </div>
  )
}
