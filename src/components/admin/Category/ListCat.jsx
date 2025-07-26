import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const ListCat = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${baseURL}/category/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
      toast.error("Failed to load categories");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`${baseURL}/category/status/${id}/${newStatus}`);
      toast.success("Status updated!");
      fetchCategories();
    } catch (error) {
      toast.error("Error changing status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`${baseURL}/category/delete/${id}`);
        toast.success("Category deleted!");
        fetchCategories();
      } catch (error) {
        toast.error("Error deleting category");
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container-fluid">
      {/* <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="light"
      /> */}
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Manage Categories</h4>
              <Link to="/admin/add-category">
                <button className="btn btn-primary">+ Add Category</button>
              </Link>
            </div>

            <div className="table-responsive p-3">
              <table className="table table-hover table-bordered text-center">
                <thead className="bg-light">
                  <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.length > 0 ? (
                    categories.map((row, index) => (
                      <tr key={row.id}>
                        <td>{index + 1}</td>
                        <td>{row.category_name}</td>
                        <td>{row.category_slug}</td>
                        <td>
                          {row.status === 1 ? (
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => handleStatusChange(row.id, 0)}
                            >
                              Active
                            </button>
                          ) : (
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() => handleStatusChange(row.id, 1)}
                            >
                              Deactive
                            </button>
                          )}
                        </td>
                        <td>
                          <Link to={`/admin/add-category/${row.id}`}>
                            <button className="btn btn-outline-success btn-sm me-2">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(row.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-muted">
                        No categories found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* end table-responsive */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCat;
