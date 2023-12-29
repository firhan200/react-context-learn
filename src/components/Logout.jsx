import useAuth from "../hooks/useAuth";

export default function Logout() {
  const { logout } = useAuth();

  return (
    <>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
    </>
  );
}
