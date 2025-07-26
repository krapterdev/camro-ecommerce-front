const [user, setUser] = useState(null);

const login = async (email, password) => {
  const res = await axios.post("/api/login", { email, password });
  localStorage.setItem("token", res.data.token);
  setUser(res.data.user);
};

const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
};
