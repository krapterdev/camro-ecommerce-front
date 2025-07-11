import React from 'react';

const AboutCompanyProfileBreadCrumb = () => {
  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: 'url(https://mangatramonline.com/images/inner-1.png)' }}
      >
        <div className="container">
          <h3 className="heading text-left">Company Profile</h3>
          <ul className="breadcrumbs d-flex align-items-center justify-content-start">
            <li>
              <a className="link" href="https://mangatramonline.com/">
                Home
              </a>
            </li>
            <li>
              <i className="icon-arrRight"></i>
            </li>
            <li>Company Profile</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutCompanyProfileBreadCrumb;
