import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import WebsiteLayout from "./layouts/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout";

import Checkout from "./pages/website/Checkout";

// 🐢 Lazy load website pages
const Home = lazy(() => import("./pages/website/Home"));
const About = lazy(() => import("./pages/website/About"));
const WhyChooseUs = lazy(() => import("./pages/website/WhyChooseUs"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const CategoryPage = lazy(() => import("./pages/website/CategoryPage"));
const ProductDetailPage = lazy(() =>
  import("./pages/website/ProductDetailPage")
);
const LogIn = lazy(() => import("./pages/website/LogIn"));
const ShoppingCart = lazy(() => import("./pages/website/ShoppingCart"));

// 🛠 Lazy load admin pages
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Blogs = lazy(() => import("./pages/admin/Blogs"));
const AddCategory = lazy(() => import("./pages/admin/AddCategory"));
const ListCategory = lazy(() => import("./pages/admin/ListCategory"));
const Settings = lazy(() => import("./pages/admin/Settings"));

function App() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>
      }
    >
      <Routes>
        {/* 🌐 Website Routes */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/:category" element={<CategoryPage />} />
          {/* <Route path="/:category/:slug" element={<ProductDetailPage />} /> */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<LogIn />} />
          <Route path="/orders" element={<LogIn />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Route>

        {/* 🔒 Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-category/:catid" element={<AddCategory />} />
          <Route path="manage-category" element={<ListCategory />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
