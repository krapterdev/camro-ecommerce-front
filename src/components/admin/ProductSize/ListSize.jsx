import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast, ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const ListSize = () => {
  const [sizes, setSizes] = useState([]);

  const fetchSizes = async () => {
    try {
      const response = await axios.get(`${baseURL}/products/size/list`);
      setSizes(response.data);
    } catch (error) {
      toast.error("Failed to load sizes");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`${baseURL}/products/size/status/${id}/${newStatus}`);
      toast.success("Status updated!");
      fetchSizes();
    } catch (error) {
      toast.error("Error changing status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this size?")) {
      try {
        await axios.delete(`${baseURL}/products/size/delete/${id}`);
        toast.success("Size deleted!");
        fetchSizes();
      } catch (error) {
        toast.error("Error deleting size");
      }
    }
  };

  useEffect(() => {
    fetchSizes();
  }, []);

  return (
    <div className="container-fluid">
      {/* <ToastContainer transition={Bounce} position="bottom-left" autoClose={2000} /> */}
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Manage Product Sizes</h4>
              <Link to="/admin/products/size/add">
                <button className="btn btn-primary">+ Add Size</button>
              </Link>
            </div>
            <div className="table-responsive p-3">
              <table className="table table-bordered text-center">
                <thead className="bg-light">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.length > 0 ? (
                    sizes.map((row, index) => (
                      <tr key={row.id}>
                        <td>{index + 1}</td>
                        <td>{row.title}</td>
                        <td>{row.value}</td>
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
                          <Link to={`/admin/products/size/add/${row.id}`}>
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
                      <td colSpan="5">No product sizes found.</td>
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

export default ListSize;
