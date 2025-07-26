import React from 'react'

function BreadCrumb({ title, items }) {
  return (
    <div>
      <div className="dz-bnr-inr bg-gray">
        <div className="container-fluid">
          <div className="dz-bnr-inr-entry">
            <div className="d-flex justify-content-between">
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <h3 className="mb-0">{title}</h3>
              </nav>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                      {item.href ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        item.label
                      )}
                    </li>
                    
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
