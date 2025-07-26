import React, { useState } from "react";
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
import useSEO from "../../hooks/useSEO";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;

  useSEO({
    title: "Register - Camro",
    description: "Create your account with Camro today.",
    keywords: "register, Camro, signup",
  });

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    country: "India",
    city: "",
    state: "Rajasthan",
    zip_code: "",
    street_address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${webURL}/user-register`, formData);
      alert("Registered successfully! Please verify your email.");
      navigate("/login");
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert("Something went wrong during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BreadCrumb
        title="Register"
        items={[{ label: "Home", href: "/" }, { label: "Register" }]}
      />

      <section className="px-3">
        <div className="row">
          <div className="col-xl-6 start-side-content">
            <div className="dz-bnr-inr-entry">
              <h1>Register</h1>
            </div>
            <div className="registration-media">
              <img
                src="src/assets/website/images/registration/pic3.png"
                alt="Registration"
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="login-area" style={{ maxWidth: "100%" }}>
              <h2 className="text-secondary text-center">Register</h2>
              <p className="text-center">
                Welcome! Please register your account
              </p>
              <form className="row" onSubmit={handleRegister}>
                {[
                  { name: "first_name", label: "First Name" ,placeholder:"First Name",type:"text",required:true},
                  { name: "last_name", label: "Last Name",placeholder:"Last Name",type:"text",required:true},
                  { name: "phone", label: "Phone" ,placeholder:"Phone",type:"number",required:true},
                  { name: "email", label: "Email address" ,placeholder:"Email",type:"email",required:true},
                  { name: "password", label: "Password" ,placeholder:"Password",type:"password",required:true},
                  { name: "zip_code", label: "ZIP Code" ,placeholder:"ZIP Code",type:"number",required:true},
                  {
                    name: "street_address",
                    label: "Street address",
                    placeholder: "Street address",
                  },
                ].map(({ name, label, placeholder ,type,required}) => (
                  <div className="col-md-6" key={name}>
                    <div className="form-group m-b25">
                      <label className="label-title">{label}</label>
                      <input
                        name={name}
                        value={formData[name]}
                        type={type}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="form-control"
                        required={required}
                      />
                      {errors[name] && (
                        <span className="text-danger">{errors[name]}</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="col-md-6">
                  <div className="m-b25">
                    <label className="label-title">Country / Region *</label>
                    <select
                      name="country"
                      className="default-select form-select w-100"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="India">India</option>
                      <option value="UK">UK</option>
                      <option value="Iraq">Iraq</option>
                    </select>
                    {errors.country && (
                      <span className="text-danger">{errors.country}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="m-b25">
                    <label className="label-title">Town / City *</label>
                    <select
                      name="city"
                      className="default-select form-select w-100"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Kota">Kota</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Udaipur">Udaipur</option>
                    </select>
                    {errors.city && (
                      <span className="text-danger">{errors.city}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="m-b25">
                    <label className="label-title">State *</label>
                    <select
                      name="state"
                      className="default-select form-select w-100"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Punjab">Punjab</option>
                    </select>
                    {errors.state && (
                      <span className="text-danger">{errors.state}</span>
                    )}
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-secondary btnhover text-uppercase me-2 sign-btn"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                  <Link
                    to="/login"
                    className="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Already Have Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
