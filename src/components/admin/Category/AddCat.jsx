import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
const imgUrl = import.meta.env.VITE_REACT_APP_STORAGE_URL;

const AddCat = () => {
  const { catid: id } = useParams(); // if editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category_name: "",
    category_slug: "",
    status: true,
    image: null,
  });

  const [existingImage, setExistingImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`${baseURL}/category/${id}`).then((res) => {
        const data = res.data;
        setFormData({
          category_name: data.category_name,
          category_slug: data.category_slug,
          status: data.status === 1,
          image: null,
        });
        setExistingImage(data.category_img);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "category_name") {
        const slug = value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");
        setFormData((prev) => ({ ...prev, category_slug: slug }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Check if image is required in add mode
    if (!id && !formData.image) {
      setErrors({ category_image: ["Category image is required."] });
      return;
    }

    const data = new FormData();
    data.append("category_name", formData.category_name);
    data.append("category_slug", formData.category_slug);
    data.append("status", formData.status ? 1 : 0);
    if (formData.image) {
      data.append("category_image", formData.image);
    }

    try {
      const url = id
        ? `${baseURL}/category/update/${id}`
        : `${baseURL}/category/add-category`;

      await axios.post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        id
          ? `Category "${formData.category_name}" updated successfully!`
          : `Category "${formData.category_name}" created successfully!`
      );

      setTimeout(() => {
        navigate("/admin/manage-category");
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
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="container"
          >
            {/* Category Info */}
            <div className="card mb-3">
              <div className="card-header">
                <h4 className="card-title">Category Information</h4>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">
                    Category Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="category_name"
                    value={formData.category_name}
                    onChange={handleChange}
                    required
                  />
                  {errors.category_name && (
                    <div className="alert alert-danger mt-2">
                      {errors.category_name[0]}
                    </div>
                  )}
                </div>

                <div className="col-lg-6 mb-3">
                  <label className="form-label">
                    Category Slug <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="category_slug"
                    value={formData.category_slug}
                    onChange={handleChange}
                    required
                  />
                  {errors.category_slug && (
                    <div className="alert alert-danger mt-2">
                      {errors.category_slug[0]}
                    </div>
                  )}
                </div>

                <div className="col-lg-4">
                  <h5 className="fw-medium mb-2">
                    Category Status <span className="text-primary">*</span>
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

            {/* Image Upload */}
            <div className="card mb-3">
              <div className="card-header">
                <h4 className="card-title">
                  Add Category Banner Photo
                  <span className="text-danger">
                    ({id ? "Optional" : "Required"})
                  </span>
                </h4>
              </div>
              <div className="card-body">
                <input
                  type="file"
                  className="form-control"
                  name="category_image"
                  onChange={handleChange}
                  accept="image/*"
                />
                {errors.category_image && (
                  <div className="alert alert-danger mt-2">
                    {errors.category_image[0]}
                  </div>
                )}

                {id && existingImage && (
                  <div className="mt-3">
                    <img
                      src={`${imgUrl}/category/${existingImage}`}
                      alt="Existing Category"
                      className="img-thumbnail"
                      width="150"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="card p-3">
              <div className="row justify-content-end">
                <div className="col-lg-2">
                  <button className="btn btn-primary w-100" type="submit">
                    {id ? "Update Category" : "Create Category"}
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

export default AddCat;
