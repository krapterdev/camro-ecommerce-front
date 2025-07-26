import axios from 'axios';

// LocalStorage se cart lo
export const getLocalCart = () => {
  const data = localStorage.getItem('my_cart');
  return data ? JSON.parse(data) : [];
};

// LocalStorage me cart save karo
export const setLocalCart = (cart) => {
  localStorage.setItem('my_cart', JSON.stringify(cart));
};

// Add to localStorage + Laravel
export const addToCart = async (product, quantity = 1, user = null) => {
  const localCart = getLocalCart();

  const existIndex = localCart.findIndex((item) => item.id === product.id);

  if (existIndex !== -1) {
    localCart[existIndex].quantity += quantity;
  } else {
    localCart.push({ ...product, quantity });
  }

  setLocalCart(localCart);

  // Agar user logged in hai toh backend me bhi bhej do
  if (user) {
    try {
      await axios.post('/cart', {
        product_id: product.id,
        quantity,
      });
    } catch (err) {
      console.error('Cart backend error:', err);
    }
  }
};
