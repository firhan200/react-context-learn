import useCart from "../hooks/useCart";

export default function AddToCart() {
  const { addToCart } = useCart();

  return (
    <button type="button" onClick={addToCart}>
      Add to Cart
    </button>
  );
}
