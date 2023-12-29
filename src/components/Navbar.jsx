import useAuth from "../hooks/useAuth";
import TotalCart from "./TotalCart";

export default function Navbar() {
  const { isAuth, role } = useAuth();

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "5px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>Tokopaedi</h3>
      <TotalCart />

      {isAuth && <div>Welcome, {role}</div>}
    </div>
  );
}
