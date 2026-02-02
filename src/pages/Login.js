import { login } from "../auth/auth";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={() => { login("USER"); window.location.href="/user"; }}>
        Login as User
      </button>
      <button onClick={() => { login("TENANT"); window.location.href="/subscription"; }}>
        Login as Tenant
      </button>
    </div>
  );
}

export default Login;
