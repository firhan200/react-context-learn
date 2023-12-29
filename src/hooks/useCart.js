import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useCart() {
    const { cart, addToCart } = useContext(CartContext);

    return {
        cart,
        addToCart,
    };
}