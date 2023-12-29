import useCart from "../hooks/useCart";

export default function TotalCart() {
  const { cart } = useCart();

  return <div>My Cart: {cart.length}</div>;
}
