import "./login.scss";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogin = () => {
    navigate("/admin");
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={(e) => handleLogin()}>
        <div className="logo mb-4">
          <Logo />
        </div>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; 2023 - {currentYear}
        </p>
      </form>
    </main>
  );
}
