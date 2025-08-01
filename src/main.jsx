import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QuantityProvider } from "./context/QuantityContext";
import { CartProvider } from "./context/CartContext";
import { SizeProvider } from "./context/SizeContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer
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
      style={{ zIndex: 10000 }}
    />
    <SizeProvider>
      <QuantityProvider>
        <WishlistProvider>
          <CartProvider>
            <ProductProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </ProductProvider>
          </CartProvider>
        </WishlistProvider>
      </QuantityProvider>
    </SizeProvider>
  </BrowserRouter>
);
