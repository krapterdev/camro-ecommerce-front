import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const AddWeight = () => {
  const { weightid: id } = useParams(); // weight ID
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    value: "",
    status: true,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`${baseURL}/products/weight/edit/${id}`).then((res) => {
        const data = res.data.data;
        setFormData({
          title: data.title,
          value: data.value,
          status: data.status === 1,
        });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "title") {
        const slug = value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");
        setFormData((prev) => ({ ...prev, value: slug }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const data = {
      title: formData.title,
      value: formData.value,
      status: formData.status ? 1 : 0,
    };

    try {
      const url = id
        ? `${baseURL}/products/weight/update/${id}`
        : `${baseURL}/products/weight/add`;

      await axios.post(url, data);

      toast.success(
        id
          ? `Weight "${formData.title}" updated successfully!`
          : `Weight "${formData.title}" created successfully!`
      );

      setTimeout(() => {
        navigate("/admin/products/weight/list");
      }, 1000);
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-xl-12 col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="card mb-3">
              <div className="card-header">
                <h4 className="card-title">Product Weight Information</h4>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Weight Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                  {errors.title && (
                    <div className="alert alert-danger mt-2">
                      {errors.title[0]}
                    </div>
                  )}
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="form-label"> Weight Value *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    required
                  />
                  {errors.value && (
                    <div className="alert alert-danger mt-2">
                      {errors.value[0]}
                    </div>
                  )}
                </div>

                <div className="col-lg-4">
                  <h5 className="fw-medium mb-2">Status *</h5>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="status"
                      checked={formData.status}
                      onChange={handleChange}
                      id="activeSwitch"
                    />
                    <label className="form-check-label" htmlFor="activeSwitch">
                      {formData.status ? "Active" : "Inactive"}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-3">
              <div className="row justify-content-end">
                <div className="col-lg-2">
                  <button className="btn btn-primary w-100" type="submit">
                    {id ? "Update" : "Create"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWeight;
