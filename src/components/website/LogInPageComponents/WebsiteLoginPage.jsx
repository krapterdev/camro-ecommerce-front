import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../../../context/CartContext";

function WebsiteLoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { getCartCount, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    await login(email, password);
    // console.log("cartItems", cartItems);
    const token = localStorage.getItem("authToken");

    if (cartItems) {
      await axios.post(`${webURL}/add-cart`, cartItems);
    }

    localStorage.removeItem("guestCart");

    setTimeout(() => {
      navigate(getCartCount() > 0 ? "/viewcart" : "/");
    }, 1000);
    // } catch (err) {
    //   alert("Invalid login");
    // }
  };

  return (
    <>
      <section className="px-3">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
            <div className="dz-bnr-inr-entry">
              <h1>Login</h1>
              <nav
                aria-label="breadcrumb text-align-start"
                className="breadcrumb-row"
              >
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/"> Home</Link>
                  </li>
                  <li className="breadcrumb-item">Login</li>
                </ul>
              </nav>
            </div>
            <div className="registration-media">
              <img
                src="src/assets/website/images/registration/pic3.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content justify-content-center">
            <div className="login-area">
              <h2 className="text-secondary text-center">Login</h2>
              <p className="text-center m-b25">
                welcome please login to your account
              </p>
              <form onSubmit={handleLogin}>
                <div className="m-b30">
                  <label className="label-title">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                    placeholder="Email Address"
                  />
                </div>
                <div className="m-b15">
                  <label className="label-title">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-secondary text-uppercase me-2 sign-btn"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <Link
                    to="/register"
                    className="btn btn-outline-secondary text-uppercase"
                  >
                    Register
                  </Link>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsiteLoginPage;
