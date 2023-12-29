import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import useAuth from "./hooks/useAuth";

export default function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Product />
        <Product />
        <Product />
      </div>

      {isAuth ? <Logout /> : <Login />}
    </>
  );
}
