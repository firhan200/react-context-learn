import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./contexts/CartContext";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);
