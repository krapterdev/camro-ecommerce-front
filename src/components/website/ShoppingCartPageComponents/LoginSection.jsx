import React, { useState } from "react";

const LoginSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginMsg, setLoginMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = () => {
    // yaha actual login logic aayega
    console.log("Login submitted: ", formData);
    setLoginMsg("Login functionality not yet implemented.");
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Login</h4>
            </div>
            <form className="form-login form-has-password" onSubmit={(e) => e.preventDefault()}>
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
                    className={`toggle-password ${showPassword ? "show" : "unshow"}`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className={showPassword ? "icon-eye-line" : "icon-eye-hide-line"}></i>
                  </span>
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
                      {/* <div>
                        <i className="icon-check"></i>
                      </div> */}
                    </div>
                    {/* <label htmlFor="login-form_agree">Remember me</label> */}
                  </div>
                  <a
                    href="https://mangatramonline.com/forget-password"
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

              <br />
              <div id="loginMsg">{loginMsg}</div>
            </form>
          </div>

          <div className="right">
            <h4 className="mb_8">New Customer</h4>
            <p className="text-secondary">
              Be part of our growing family of new customers!
            </p>
            <a
              href="https://mangatramonline.com/register"
              className="tf-btn btn-fill"
            >
              <span className="text text-button">Register</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
