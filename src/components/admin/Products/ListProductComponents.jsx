import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const ListProductComponents = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${baseURL}/products/list`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
      toast.error("Failed to load products");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`${baseURL}/products/status/${id}/${status}`);
      toast.success("Product status updated");
      fetchProducts();
    } catch (error) {
      toast.error("Error changing status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      try {
        await axios.delete(`${baseURL}/products/delete/${id}`);
        toast.success("Product deleted");
        fetchProducts();
      } catch (error) {
        toast.error("Error deleting product");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      {/* <ToastContainer transition={Bounce} autoClose={2000} /> */}
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Manage Products</h4>
              <Link to="/admin/products/add">
                <button className="btn btn-primary">+ Add Product</button>
              </Link>
            </div>
            <div className="table-responsive p-3">
              <table className="table table-hover table-bordered text-center">
                <thead className="bg-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? (
                    products.map((prod, i) => (
                      <tr key={prod.id}>
                        <td>{i + 1}</td>
                        <td>{prod.product_name}</td>
                        <td>{prod.product_slug}</td>
                        <td>
                          {prod.status === 1 ? (
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => handleStatusChange(prod.id, 0)}
                            >
                              Active
                            </button>
                          ) : (
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => handleStatusChange(prod.id, 1)}
                            >
                              Deactive
                            </button>
                          )}
                        </td>
                        <td>
                          <Link to={`/admin/products/add/${prod.id}`}>
                            <button className="btn btn-outline-success btn-sm me-2">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(prod.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No products found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductComponents;
