// import React from "react";
// import { Link } from "react-router-dom";

// const HomeModels = ({ headerCategory = [] }) => {
//   return (
//     <>
//       {/* 🔍 Top Search Popup */}
//       <div className="dz-search-area dz-offcanvas offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop">
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
//         <div className="container">
//           <form className="header-item-search">
//             <div className="input-group search-input">
//               <input type="search" className="form-control" placeholder="Search Product" />
//               <button className="btn" type="button">
//                 <i className="iconly-Light-Search"></i>
//               </button>
//             </div>
//             <ul className="recent-tag mt-3">
//               <li className="pe-0"><span>Quick Search :</span></li>
//               {headerCategory
//                 .filter((item) => item.status !== 0)
//                 .map((item, index) => (
//                   <li key={index}>
//                     <Link to={`/${item.caturl}`}>{item.category_name}</Link>
//                   </li>
//                 ))}
//             </ul>
//           </form>
//         </div>
//       </div>

//       {/* 🛒 Cart & Wishlist Popup */}
//       <div className="offcanvas dz-offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
//         <div className="offcanvas-body">
//           <div className="product-description">
//             <div className="dz-tabs">
//               <ul className="nav nav-tabs center" id="myTab" role="tablist">
//                 <li className="nav-item">
//                   <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#shopping-cart-pane">Shopping Cart <span className="badge badge-light">2</span></button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link" data-bs-toggle="tab" data-bs-target="#wishlist-pane">Wishlist <span className="badge badge-light">3</span></button>
//                 </li>
//               </ul>

//               <div className="tab-content" id="dz-shopcart-sidebar">
//                 <div className="tab-pane fade show active" id="shopping-cart-pane">
//                   <div className="shop-sidebar-cart">
//                     <ul className="sidebar-cart-list">
//                       {/* 🧺 Sample Item */}
//                       <li>
//                         <div className="cart-widget d-flex">
//                           <div className="dz-media me-3">
//                             <img src="/images/triply-artisian-cookware/2.png" alt="" />
//                           </div>
//                           <div className="cart-content">
//                             <h6 className="title"><Link to="/product/sample">Pressure Cooker 1.5 L</Link></h6>
//                             <h6 className="dz-price mb-0">₹50.00</h6>
//                           </div>
//                           <Link to="#" className="dz-close"><div className="ti-close">×</div></Link>
//                         </div>
//                       </li>
//                     </ul>
//                     <div className="cart-total d-flex justify-content-between mt-3">
//                       <h5>Subtotal:</h5>
//                       <h5>₹300.00</h5>
//                     </div>
//                     <div className="mt-3">
//                       <Link to="/checkout" className="btn btn-outline-secondary btn-block m-b20">Checkout</Link>
//                       <Link to="/viewcart" className="btn btn-secondary btn-block">View Cart</Link>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="tab-pane fade" id="wishlist-pane">
//                   <div className="shop-sidebar-cart">
//                     <ul className="sidebar-cart-list">
//                       {/* ❤️ Wishlist items */}
//                       <li>
//                         <div className="cart-widget d-flex">
//                           <div className="dz-media me-3">
//                             <img src="/images/triply-artisian-cookware/1.png" alt="" />
//                           </div>
//                           <div className="cart-content">
//                             <h6 className="title"><Link to="/product/sample">Cardigan Sweater</Link></h6>
//                             <h6 className="dz-price mb-0">₹40.00</h6>
//                           </div>
//                           <Link to="#" className="dz-close"><div className="ti-close">×</div></Link>
//                         </div>
//                       </li>
//                     </ul>
//                     <Link to="/wishlist" className="btn btn-secondary btn-block mt-3">Check Your Favourite</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🧪 Filter Side Panel */}
//       <div className="offcanvas dz-offcanvas offcanvas-end" tabIndex="-1" id="offcanvasLeft">
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
//         <div className="offcanvas-body">
//           <div className="product-description">
//             <div className="widget mb-3">
//               <h6 className="widget-title">Category Filter</h6>
//               <ul className="widget_categories">
//                 {headerCategory
//                   .filter((item) => item.status !== 0)
//                   .map((item, index) => (
//                     <li key={index} className="cat-item">
//                       <Link to={`/${item.caturl}`}>{item.category_name}</Link>
//                     </li>
//                   ))}
//               </ul>
//               <Link to="#" className="btn btn-sm bg-danger text-white mt-2">RESET FILTER</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeModels;
