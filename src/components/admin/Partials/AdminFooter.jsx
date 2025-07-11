import React from "react";

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            {currentYear} &copy;. Crafted by
            <a
              href=""
              className="fw-bold footer-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebMartIndia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;