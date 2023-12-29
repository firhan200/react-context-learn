import useAuth from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  return (
    <>
      <button type="button" onClick={() => login("123456", "ADMIN")}>
        Log me in
      </button>
    </>
  );
}
