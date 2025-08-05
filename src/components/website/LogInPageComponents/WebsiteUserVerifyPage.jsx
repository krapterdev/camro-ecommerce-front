import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const WebsiteUserVerifyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const encryptedId = searchParams.get("id");

  useEffect(() => {
    if (encryptedId) {
      axios
        .get(`http://localhost:8000/api/email/verify?id=${encryptedId}`)
        .then((res) => {
          alert(res.data.message); // Replace with toast if needed
          navigate("/login"); // redirect to login page
        })
        .catch((err) => {
          alert(err.response?.data?.message || "Verification failed");
        });
    }
  }, [encryptedId]);

  return <div>Verifying your email...</div>;
};

export default WebsiteUserVerifyPage;
