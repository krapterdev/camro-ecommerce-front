import React from "react";
import { Link } from "react-router-dom";

function WebsiteLoginPage() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   remember: true,
  // });

  // const [showPassword, setShowPassword] = useState(false);
  // const [loginMsg, setLoginMsg] = useState("");
  // const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  // const handleLogin = async () => {
  //   try {
  //     setErrors({});
  //     setLoginMsg("Logging in...");

  //     const res = await fetch("http://127.0.0.1:8000/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: formData.email,
  //         password: formData.password,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (res.status === 200) {
  //         localStorage.setItem("auth_user", JSON.stringify(data.user));
  //         localStorage.setItem("auth_token", data.token);
  //       setLoginMsg("✅ " + data.message);
  //       setTimeout(() => navigate("/order"), 1000);
  //     } else if (res.status === 400) {
  //       setErrors(data.errors);
  //       setLoginMsg("Please fix the validation errors.");
  //     } else {
  //       setLoginMsg("❌ " + (data.message || "Login failed"));
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setLoginMsg("Something went wrong.");
  //   }
  // };
  
  return (
    <>
      <section class="px-3">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
            <div class="dz-bnr-inr-entry">
              <h1>Login</h1>
              <nav
                aria-label="breadcrumb text-align-start"
                class="breadcrumb-row"
              >
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/"> Home</Link>
                  </li>
                  <li class="breadcrumb-item">Login</li>
                </ul>
              </nav>
            </div>
            <div class="registration-media">
              <img
                src="src/assets/website/images/registration/pic3.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 end-side-content justify-content-center">
            <div class="login-area">
              <h2 class="text-secondary text-center">Login</h2>
              <p class="text-center m-b25">
                welcome please login to your account
              </p>
              <form>
                <div class="m-b30">
                  <label class="label-title">Email Address</label>
                  <input
                    name="dzName"
                    required=""
                    class="form-control"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div class="m-b15">
                  <label class="label-title">Password</label>
                  <div class="secure-input ">
                    <input
                      type="password"
                      name="password"
                      class="form-control dz-password"
                      placeholder="Password"
                    />
                    <div class="show-pass">
                      <i class="eye-open fa-regular fa-eye"></i>
                    </div>
                  </div>
                </div>
                <div class="form-row d-flex justify-content-between m-b30">
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="basic_checkbox_1"
                      />
                      <label class="form-check-label" for="basic_checkbox_1">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <Link class="text-primary" to="forget-password.html">
                      Forgot Password
                    </Link>
                  </div>
                </div>
                <div class="text-center">
                  <Link
                    to="/user-dashboard"
                    class="btn btn-secondary btnhover text-uppercase me-2 sign-btn"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    class="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsiteLoginPage;
