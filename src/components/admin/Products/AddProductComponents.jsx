import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddProductComponent = () => {
  const [formData, setFormData] = useState({
    product_name: "",
    product_slug: "",
    category_id: "",
    description: "",
    product_image1: null,
    product_image2: null,
  });

  const [priceRows, setPriceRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [weights, setWeights] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin/category/categories")
      .then((res) => setCategories(res.data));
    axios
      .get("http://127.0.0.1:8000/api/admin/products/size/list")
      .then((res) => setSizes(res.data));
    axios
      .get("http://127.0.0.1:8000/api/admin/products/weight/list")
      .then((res) => setWeights(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "product_name" && {
        product_slug: value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-"),
      }),
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleRowChange = (index, e) => {
    const updated = [...priceRows];
    updated[index][e.target.name] = e.target.value;

    const mrp = parseFloat(updated[index].mrp_price) || 0;
    const discount = parseFloat(updated[index].discount) || 0;
    const inputTax = updated[index].tax_in_value;

    const sellingPrice = mrp - (mrp * discount) / 100;
    const taxVal = parseFloat(inputTax);
    const taxValue = !isNaN(taxVal) && taxVal > 0 ? taxVal : 40;
    const netPrice = sellingPrice + taxValue;

    updated[index].selling_price = sellingPrice.toFixed(2);
    updated[index].tax_in_value = inputTax;
    updated[index].net_price = netPrice.toFixed(2);

    setPriceRows(updated);
  };

  const handleRowImageChange = (index, e) => {
    const updated = [...priceRows];
    updated[index].images = Array.from(e.target.files);
    setPriceRows(updated);
  };

  const addPriceRow = () => {
    setPriceRows((prev) => [
      ...prev,
      {
        size: "",
        size_type: "",
        weight: "",
        weight_type: "",
        mrp_price: "",
        discount: "",
        selling_price: "",
        tax_in_value: "",
        net_price: "",
        productcode: "",
        images: [],
      },
    ]);
  };

  const removePriceRow = (index) => {
    const updated = [...priceRows];
    updated.splice(index, 1);
    setPriceRows(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();

    if (formData.img1) payload.append("product_image1", formData.img1);
    if (formData.img2) payload.append("product_image2", formData.img2);

    payload.append("product_name", formData.product_name);
    payload.append("product_slug", formData.product_slug);
    payload.append("product_desc", formData.description);
    payload.append("category_id", formData.category_id);

    priceRows.forEach((row, idx) => {
      row.images?.forEach((file, i) => {
        payload.append(`more_images[${idx}_${i}]`, file); // optional if Laravel stores as flat list
      });
    });

    const rowsToSend = priceRows.map(({ images, ...rest }) => rest);
    payload.append("weights", JSON.stringify(rowsToSend));

    axios
      .post("http://127.0.0.1:8000/api/admin/products/add", payload)
      .then((res) => {
        console.log("Saved!", res.data);
        alert("Product added successfully!");
      })
      .catch((err) => {
        if (err.response?.data?.errors) {
          setErrors(err.response.data.errors);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="container"
    >
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
            // required
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
            name="img1"
            onChange={handleFileChange}
            // required
            className="form-control"
          />
          {errors.category_id && (
            <div className="alert alert-danger mt-2">
              {errors.category_id[0]}
            </div>
          )}
        </div>
        <div className="col-6 mt-3">
          <label>Product Image 2</label>
          <input
            type="file"
            name="img2"
            onChange={handleFileChange}
            // required
            className="form-control"
          />
          {errors.category_id && (
            <div className="alert alert-danger mt-2">
              {errors.category_id[0]}
            </div>
          )}
        </div>
      </div>
      <div className="mb-3 mt-4">
        <label>Description</label>
        <ReactQuill
          theme="snow"
          value={formData.description}
          onChange={handleDescriptionChange}
        />
      </div>
      <h5 className="mt-4">Price Matrix</h5>
      {priceRows.map((row, index) => (
        <div className="row mb-4 border p-3" key={index}>
          <div className="col-3">
            <label>Size</label>
            <input
              name="size"
              value={row.size}
              onChange={(e) => handleRowChange(index, e)}
              //   required
              className="form-control"
            />
          </div>
          <div className="col-3">
            <label>Size Type</label>
            <select
              name="size_type"
              value={row.size_type}
              onChange={(e) => handleRowChange(index, e)}
              //   required
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
              //   required
              className="form-control"
            />
          </div>
          <div className="col-3">
            <label>Weight Type</label>
            <select
              name="weight_type"
              value={row.weight_type}
              onChange={(e) => handleRowChange(index, e)}
              //   required
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
              //   required
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
              //   required
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
              //   required
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
      <button
        type="button"
        className="btn btn-secondary mt-3"
        onClick={addPriceRow}
      >
        + Add Price Row
      </button>
      <button type="submit" className="btn btn-primary mt-3 ms-3">
        Submit Product
      </button>
    </form>
  );
};

export default AddProductComponent;
