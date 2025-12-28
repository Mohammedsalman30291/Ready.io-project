import { Link } from "react-router-dom"
import type { Product } from "../services/Api"


type Props = {
  product: Product
}

export default function Card({ product }: Props) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
    </Link>
  )
}
