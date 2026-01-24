export type Product = {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: Number, required: true },
}