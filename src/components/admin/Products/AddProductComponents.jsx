// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// const baseURL = "http://127.0.0.1:8000/storage"; // Adjust if needed

// const AddProductComponent = () => {
//   const { productId: id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     product_name: "",
//     product_slug: "",
//     category_id: "",
//     description: "",
//     product_image1: null,
//     product_image2: null,
//   });

//   const [existingImage1, setExistingImage1] = useState(null);
//   const [existingImage2, setExistingImage2] = useState(null);
//   const [existingVariations, setExistingVariations] = useState([]);

//   const [priceRows, setPriceRows] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [weights, setWeights] = useState([]);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/admin/category/categories")
//       .then((res) => setCategories(res.data));
//     axios
//       .get("http://127.0.0.1:8000/api/admin/products/size/list")
//       .then((res) => setSizes(res.data));
//     axios
//       .get("http://127.0.0.1:8000/api/admin/products/weight/list")
//       .then((res) => setWeights(res.data));

//     if (id) {
//       axios
//         .get(`http://127.0.0.1:8000/api/admin/products/edit/${id}`)
//         .then((res) => {
//           const data = res.data;
//           setFormData({
//             product_name: data.product_name,
//             product_slug: data.product_slug,
//             category_id: data.category_id,
//             description: data.product_desc || "",
//             product_image1: null,
//             product_image2: null,
//           });
//           setExistingImage1(data.product_image1);
//           setExistingImage2(data.product_image2);
//           setExistingVariations(data.productImages || []);

//           if (data.productAttrs) {
//             const rows = data.productAttrs.map((item) => ({
//               size: item.size,
//               size_type: item.size_type,
//               weight: item.weight,
//               weight_type: item.weight_type,
//               mrp_price: item.mrp_price,
//               discount: item.discount,
//               selling_price: item.selling_price,
//               tax_in_value: item.tax_in_value,
//               net_price: item.net_price,
//               productcode: item.hsncode,
//               images: [],
//             }));
//             setPriceRows(rows);
//           }
//         });
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === "product_name" && {
//         product_slug: value
//           .toLowerCase()
//           .replace(/[^a-z0-9\s-]/g, "")
//           .replace(/\s+/g, "-")
//           .replace(/-+/g, "-"),
//       }),
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: files[0] }));
//   };

//   const handleDescriptionChange = (value) => {
//     setFormData((prev) => ({ ...prev, description: value }));
//   };

//   const handleRowChange = (index, e) => {
//     const updated = [...priceRows];
//     updated[index][e.target.name] = e.target.value;

//     const mrp = parseFloat(updated[index].mrp_price) || 0;
//     const discount = parseFloat(updated[index].discount) || 0;
//     const inputTax = updated[index].tax_in_value;
//     const sellingPrice = mrp - (mrp * discount) / 100;
//     const taxVal = parseFloat(inputTax);
//     const taxValue = !isNaN(taxVal) && taxVal > 0 ? taxVal : 40;
//     const netPrice = sellingPrice + taxValue;

//     updated[index].selling_price = Math.round(sellingPrice);
//     updated[index].net_price = Math.round(netPrice);

//     setPriceRows(updated);
//   };

//   const handleRowImageChange = (index, e) => {
//     const updated = [...priceRows];
//     updated[index].images = Array.from(e.target.files);
//     setPriceRows(updated);
//   };

//   const addPriceRow = () => {
//     setPriceRows((prev) => [
//       ...prev,
//       {
//         size: "",
//         size_type: sizes[0]?.value || "",
//         weight: "",
//         weight_type: weights[0]?.value || "",
//         mrp_price: "",
//         discount: "",
//         selling_price: "",
//         tax_in_value: "",
//         net_price: "",
//         productcode: "",
//         images: [],
//       },
//     ]);
//   };

//   const removePriceRow = (index) => {
//     const updated = [...priceRows];
//     updated.splice(index, 1);
//     setPriceRows(updated);
//   };

//   const handleRemoveVariationImage = async (imgId) => {
//     if (window.confirm("Remove this image?")) {
//       try {
//         await axios.delete(
//           `http://127.0.0.1:8000/api/admin/products/more-image/delete/${imgId}`
//         );
//         setExistingVariations((prev) => prev.filter((img) => img.id !== imgId));
//         toast.success("Image removed");
//       } catch {
//         toast.error("Failed to remove image");
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = new FormData();

//     if (formData.product_image1)
//       payload.append("product_image1", formData.product_image1);
//     if (formData.product_image2)
//       payload.append("product_image2", formData.product_image2);

//     payload.append("product_name", formData.product_name);
//     payload.append("product_slug", formData.product_slug);
//     payload.append("product_desc", formData.description);
//     payload.append("category_id", formData.category_id);

//     priceRows.forEach((row, idx) => {
//       row.images?.forEach((file, i) => {
//         payload.append(`more_images[${idx}_${i}]`, file);
//       });
//     });

//     const rowsToSend = priceRows.map(({ images, ...rest }) => rest);
//     payload.append("weights", JSON.stringify(rowsToSend));

//     const url = id
//       ? `http://127.0.0.1:8000/api/admin/products/update/${id}`
//       : `http://127.0.0.1:8000/api/admin/products/add`;

//     axios
//       .post(url, payload)
//       .then(() => {
//         toast.success(`Product ${id ? "updated" : "added"} successfully!`);
//         setTimeout(() => navigate("/admin/products/list"), 1500);
//       })
//       .catch((err) => {
//         if (err.response?.data?.errors) {
//           setErrors(err.response.data.errors);
//           toast.error("Validation failed");
//         } else {
//           toast.error("Something went wrong");
//         }
//       });
//   };

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const AddProductComponent = () => {
  const { productId: id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: "",
    product_slug: "",
    category_id: "",
    product_stock: "",
    short_desc: "",
    product_desc: "",
    sort_order: "",
    status: false,
    in_stock: false,
    cod_available: false,
    is_triplyhammered: false,
    is_trending: false,
    is_new_arrival: false,
    is_besteller: false,
    meta_title: "",
    meta_keywords: "",
    meta_desc: "",
    product_image1: null,
    product_image2: null,
  });

  const [existingImage1, setExistingImage1] = useState(null);
  const [existingImage2, setExistingImage2] = useState(null);
  const [existingVariations, setExistingVariations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [weights, setWeights] = useState([]);
  const [priceRows, setPriceRows] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/category/categories`)
      .then((res) => setCategories(res.data));
    axios
      .get(`${baseURL}/products/size/list`)
      .then((res) => setSizes(res.data));
    axios
      .get(`${baseURL}/products/weight/list`)
      .then((res) => setWeights(res.data));

    if (id) {
      axios.get(`${baseURL}/products/${id}`).then((res) => {
        const data = res.data;
        setFormData({
          product_name: data.product_name,
          product_slug: data.product_slug,
          category_id: data.category_id,
          product_stock: data.product_stock,
          short_desc: data.short_desc,
          product_desc: data.product_desc,
          sort_order: data.sort_order,
          status: !!data.status,
          in_stock: !!data.in_stock,
          cod_available: !!data.cod_available,
          is_triplyhammered: !!data.is_triplyhammered,
          is_trending: !!data.is_trending,
          is_new_arrival: !!data.is_new_arrival,
          is_besteller: !!data.is_besteller,
          meta_title: data.meta_title,
          meta_keywords: data.meta_keywords,
          meta_desc: data.meta_desc,
          product_image1: null,
          product_image2: null,
        });
        setExistingImage1(data.product_image1);
        setExistingImage2(data.product_image2);
        setExistingVariations(data.variation_images || []);
        setPriceRows(data.weights || []);
      });
    } else {
      setPriceRows([
        {
          size: "",
          size_type: "",
          tax_in_value: "",
          net_price: "",
          selling_price: "",
          productcode: "",
          in_stock: true,
          images: [],
        },
      ]);
    }
  }, []);

  const convertToSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const newState = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "product_name") {
        newState.product_slug = convertToSlug(value);
      }

      return newState;
    });
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      product_desc: value,
    }));
  };

  const handleRowImageChange = (index, e) => {
    const rows = [...priceRows];
    rows[index].images = Array.from(e.target.files);
    setPriceRows(rows);
  };

  const addPriceRow = () => {
    setPriceRows([
      ...priceRows,
      {
        size: "",
        size_type: "",
        tax_in_value: "",
        net_price: "",
        selling_price: "",
        productcode: "",
        in_stock: true,
        images: [],
      },
    ]);
  };

  const handleRowChange = (index, e) => {
    // const rows = [...priceRows];
    // const { name, value } = e.target;
    // rows[index][name] = value;

    const { name, value, type, checked } = e.target;
    const rows = [...priceRows];
    rows[index][name] = type === "checkbox" ? checked : value;
    setPriceRows(rows);

    const mrp = parseFloat(rows[index].mrp_price) || 0;
    const discount = parseFloat(rows[index].discount) || 0;
    const inputTax = parseFloat(rows[index].tax_in_value);
    const taxValue = !isNaN(inputTax) && inputTax > 0 ? inputTax : 40;

    const sellingPrice = mrp - (mrp * discount) / 100;
    const netPrice = sellingPrice + taxValue;

    rows[index].selling_price = Math.round(sellingPrice);
    rows[index].net_price = Math.round(netPrice);

    setPriceRows(rows);
  };

  const removePriceRow = (index) => {
    const rows = [...priceRows];
    rows.splice(index, 1);
    setPriceRows(rows);
  };

  const handleRemoveVariationImage = (imgId) => {
    axios.delete(`${baseURL}/products/remove-variation/${imgId}`).then(() => {
      setExistingVariations((prev) => prev.filter((img) => img.id !== imgId));
      toast.success("Variation image removed");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const payload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) payload.append(key, value);
    });

    priceRows.forEach((row, idx) => {
      row.images?.forEach((file, i) => {
        payload.append(`more_images[${idx}_${i}]`, file);
      });
    });

    const rowsToSend = priceRows.map(({ images, ...rest }) => rest);
    payload.append("weights", JSON.stringify(rowsToSend));

    const url = id
      ? `${baseURL}/products/update/${id}`
      : `${baseURL}/products/add`;

    axios
      .post(url, payload)
      .then(() => {
        toast.success(`Product ${id ? "updated" : "added"} successfully`);
        setTimeout(() => navigate("/admin/products/list"), 1500);
      })
      .catch((err) => {
        if (err.response?.data?.errors) {
          setErrors(err.response.data.errors);
          toast.error("Validation failed");
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="container"
    >
      {/* Product Details Section */}
      <div className="card mb-4">
        <div className="card-header">
          <strong> Product Details</strong>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-4">
              <label>Product Name</label>
              <input
                name="product_name"
                value={formData.product_name}
                onChange={handleChange}
                required
                className="form-control"
              />
              {errors.product_name && (
                <div className="alert alert-danger mt-2">
                  {errors.product_name[0]}
                </div>
              )}
            </div>
            <div className="col-4">
              <label>Slug</label>
              <input
                name="product_slug"
                value={formData.product_slug}
                onChange={handleChange}
                required
                className="form-control"
              />
              {errors.product_slug && (
                <div className="alert alert-danger mt-2">
                  {errors.product_slug[0]}
                </div>
              )}
            </div>
            <div className="col-4">
              <label>Category</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="form-control"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
              {errors.category_id && (
                <div className="alert alert-danger mt-2">
                  {errors.category_id[0]}
                </div>
              )}
            </div>
            <div className="col-6 mt-3">
              <label>Product Image 1</label>
              <input
                type="file"
                name="product_image1"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
            <div className="col-6 mt-3">
              <label>Product Image 2</label>
              <input
                type="file"
                name="product_image2"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>

          {/* Preview Product Images */}
          {existingImage1 && (
            <div className="mb-3">
              <label>Existing Image 1</label>
              <br />
              <img
                src={`${baseURL}/media/product/${existingImage1}`}
                style={{ maxHeight: "150px" }}
              />
            </div>
          )}
          {existingImage2 && (
            <div className="mb-3">
              <label>Existing Image 2</label>
              <br />
              <img
                src={`${baseURL}/media/product/${existingImage2}`}
                style={{ maxHeight: "150px" }}
              />
            </div>
          )}

          <div className="mt-3">
            <label>Description</label>
            <ReactQuill
              theme="snow"
              value={formData.product_desc}
              onChange={handleDescriptionChange}
              onKeyDown={(e) => {
                if (e.key === "Escape") e.target.blur();
              }}
            />
          </div>
        </div>
      </div>

      {/* Price Matrix Section */}
      <div className="card mb-4">
        <div className="card-header">
          <strong>Price Matrix & Variations</strong>
        </div>
        <div className="card-body">
          {priceRows.map((row, index) => (
            <div className="row mb-4 border p-3" key={index}>
              <div className="col-3">
                <label>Size</label>
                <input
                  name="size"
                  value={row.size}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <label>Size Type</label>
                <select
                  name="size_type"
                  value={row.size_type}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                >
                  {sizes.map((s) => (
                    <option key={s.id} value={s.value}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                <label>Weight</label>
                <input
                  name="weight"
                  value={row.weight}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <label>Weight Type</label>
                <select
                  name="weight_type"
                  value={row.weight_type}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                >
                  {weights.map((w) => (
                    <option key={w.id} value={w.value}>
                      {w.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-3 mt-2">
                <label>MRP</label>
                <input
                  name="mrp_price"
                  type="number"
                  value={row.mrp_price}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-2">
                <label>Discount %</label>
                <input
                  name="discount"
                  type="number"
                  value={row.discount}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-2">
                <label>Selling Price</label>
                <input
                  name="selling_price"
                  type="number"
                  value={row.selling_price}
                  readOnly
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-2">
                <label>Tax Value</label>
                <input
                  name="tax_in_value"
                  type="number"
                  value={row.tax_in_value}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-2">
                <label>Net Price</label>
                <input
                  name="net_price"
                  type="number"
                  value={row.net_price}
                  readOnly
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-2">
                <label>Product Code</label>
                <input
                  name="productcode"
                  type="text"
                  value={row.productcode}
                  onChange={(e) => handleRowChange(index, e)}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-2">
                <label>Variation Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleRowImageChange(index, e)}
                  className="form-control"
                />
              </div>
              <div className="col-3 mt-4">
                <label className="mx-2">In Stock</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="in_stock"
                  onChange={(e) => handleRowImageChange(index, e)}
                />
              </div>
              <div className="col-3 mt-4">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removePriceRow(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Add Row Button */}
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={addPriceRow}
          >
            + Add Price Row
          </button>

          {/* Existing Variation Images */}
          {existingVariations.length > 0 && (
            <div className="mt-4">
              <label>Existing Variation Images</label>
              <div className="d-flex flex-wrap gap-3">
                {existingVariations.map((img) => (
                  <div key={img.id} className="text-center">
                    <img
                      src={`${baseURL}/media/product/more/${img.img_name}`}
                      style={{ height: "100px", border: "1px solid #ccc" }}
                    />
                    <button
                      className="btn btn-sm btn-outline-danger mt-2"
                      onClick={() => handleRemoveVariationImage(img.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <h5 className="fw-medium mb-2">Product Status</h5>
        </div>
        <div className="row card-body gx-4 gy-3">
          {[
            { name: "status", label: "Status" },
            { name: "in_stock", label: "In Stock" },
            { name: "cod_available", label: "COD Available" },
            { name: "is_triplyhammered", label: "Triply Hammered" },
            { name: "is_trending", label: "Trending Product" },
            { name: "is_new_arrival", label: "New Arrival" },
            { name: "is_besteller", label: "Bestseller" },
          ].map((item) => (
            <div
              key={item.name}
              className="col-md-3 d-flex align-items-center gap-2"
            >
              <label htmlFor={item.name} className="fw-semibold mb-0">
                {item.label} :{" "}
                <span className="text-dark">
                  {formData[item.name] ? "Active" : "Inactive"}
                </span>
              </label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item.name}
                  name={item.name}
                  checked={formData[item.name]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary mb-3">
        {id ? "Update Product" : "Submit Product"}
      </button>
    </form>
  );
};

export default AddProductComponent;
