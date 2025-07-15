import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

const AddWeight = () => {
  const { catid: id } = useParams(); // if editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productweight_name: "",
    productweight_slug: "",
    status: true,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`${baseURL}/productweight/${id}`).then((res) => {
        const data = res.data;
        setFormData({
          productweight_name: data.productweight_name,
          productweight_slug: data.productweight_slug,
          status: data.status === 1,
        });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "productweight_name") {
        const slug = value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");
        setFormData((prev) => ({ ...prev, productweight_slug: slug }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const data = new FormData();
    data.append("productweight_name", formData.productweight_name);
    data.append("productweight_slug", formData.productweight_slug);
    data.append("status", formData.status ? 1 : 0);

    try {
      const url = id
        ? `${baseURL}/productweight/update/${id}`
        : `${baseURL}/productweight/add-productweight`;

      await axios.post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        id
          ? `ProductWeight "${formData.productweight_name}" updated successfully!`
          : `ProductWeight "${formData.productweight_name}" created successfully!`
      );

      setTimeout(() => {
        navigate("/admin/manage-productweight");
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
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* ProductWeight Info */}
            <div className="card mb-3">
              <div className="card-header">
                <h4 className="card-title">ProductWeight Information</h4>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">
                    ProductWeight Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="productweight_name"
                    value={formData.productweight_name}
                    onChange={handleChange}
                    required
                  />
                  {errors.productweight_name && (
                    <div className="alert alert-danger mt-2">
                      {errors.productweight_name[0]}
                    </div>
                  )}
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="form-label">
                    ProductWeight Slug <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="productweight_slug"
                    value={formData.productweight_slug}
                    onChange={handleChange}
                    required
                  />
                  {errors.productweight_slug && (
                    <div className="alert alert-danger mt-2">
                      {errors.productweight_slug[0]}
                    </div>
                  )}
                </div>

                <div className="col-lg-4">
                  <h5 className="fw-medium mb-2">
                    ProductWeight Status <span className="text-primary">*</span>
                  </h5>
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

            {/* Submit */}
            <div className="card p-3">
              <div className="row justify-content-end">
                <div className="col-lg-2">
                  <button className="btn btn-primary w-100" type="submit">
                    {id ? "Update ProductWeight" : "Create ProductWeight"}
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
