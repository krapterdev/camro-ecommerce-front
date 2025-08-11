import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUserSession = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_WEBSITE_APP_API_BASE_URL}/user-check`,
        {
          token: localStorage.getItem("authToken"),
        }
      );
      setUser(res.data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_WEBSITE_APP_API_BASE_URL}/user-login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("authToken", res.data.token);
      setUser(res.data.user);
      toast.success("Login successful 🚀");

      const redirectPath = localStorage.getItem("redirectAfterLogin");
      let targetPath = "/user-dashboard"; // default path

      if (redirectPath) {
        if (redirectPath === "/cart" || redirectPath === "/viewcart") {
          targetPath = "/checkout";
        } else if (
          redirectPath === "/login" ||
          redirectPath === "/register"
        ) {
          targetPath = "/user-dashboard";
        }
      }

      localStorage.removeItem("redirectAfterLogin");

      // Redirect user
      window.location.href = targetPath;
      

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed ❌");
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_WEBSITE_APP_API_BASE_URL}/user-logout`,
        {
          token: localStorage.getItem("authToken"),
        }
      );

      toast.info("Logged out 👋");
    } catch (error) {
      toast.error("Logout failed 😓");
    } finally {
      localStorage.removeItem("authToken");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
