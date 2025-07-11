import React from 'react';

const ContactUsBreadCrumb = () => {
  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: 'url(https://mangatramonline.com/images/inner-1.png)' }}
      >
        <div className="container">
          <h3 className="heading text-left">Contact Us</h3>
          <ul className="breadcrumbs d-flex align-items-center justify-content-start">
            <li>
              <a className="link" href="https://mangatramonline.com/">
                Home
              </a>
            </li>
            <li>
              <i className="icon-arrRight"></i>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUsBreadCrumb;
