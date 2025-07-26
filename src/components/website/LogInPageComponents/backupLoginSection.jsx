import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginMsg, setLoginMsg] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async () => {
    try {
      setErrors({});
      setLoginMsg("Logging in...");

      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
          localStorage.setItem("auth_user", JSON.stringify(data.user));
          localStorage.setItem("auth_token", data.token);
        setLoginMsg("✅ " + data.message);
        setTimeout(() => navigate("/order"), 1000);
      } else if (res.status === 400) {
        setErrors(data.errors);
        setLoginMsg("Please fix the validation errors.");
      } else {
        setLoginMsg("❌ " + (data.message || "Login failed"));
      }
    } catch (err) {
      console.error(err);
      setLoginMsg("Something went wrong.");
    }
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Login</h4>
            </div>
            <form
              className="form-login form-has-password"
              onSubmit={(e) => e.preventDefault()}
            >
              <div
                id="loginMsg"
                style={{
                  marginTop: "10px",
                  color: loginMsg.includes("✅") ? "green" : "red",
                }}
              >
                {loginMsg}
              </div>
              <br />
              <div className="wrap">
                <fieldset>
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or email address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div style={{ color: "red" }}>{errors.email[0]}</div>
                  )}
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password*"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="input-password"
                  />
                  <span
                    className={`toggle-password ${
                      showPassword ? "show" : "unshow"
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className={
                        showPassword ? "icon-eye-line" : "icon-eye-hide-line"
                      }
                    ></i>
                  </span>
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password[0]}</div>
                  )}
                </fieldset>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        type="checkbox"
                        id="login-form_agree"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <a
                    href="https://camro.com/forget-password"
                    className="font-2 text-button forget-password link"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>

              <div className="button-submit">
                <button
                  className="tf-btn btn-fill"
                  type="button"
                  onClick={handleLogin}
                >
                  <span className="text text-button">Login</span>
                </button>
              </div>
            </form>
          </div>

          <div className="right">
            <h4 className="mb_8">New Customer</h4>
            <p className="text-secondary">
              Be part of our growing family of new customers!
            </p>
            <Link to="/register" className="tf-btn btn-fill">
              <span className="text text-button">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
