import React, { Component } from "react";

class Blogs extends Component {
  render() {
    return (
      <div>
        <h2>Admin Blogs</h2>
        <p>Yahan aap Blogs controls dal sakte ho.</p>
      </div>
    );
  }
}

export default Blogs;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const apiUrl = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     axios
//       .get(`${apiUrl}/blogs`)
//       .then((res) => {
//         setBlogs(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Error fetching blogs");
//         setLoading(false);
//       });
//   }, [apiUrl]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Admin Blogs</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id}>{blog.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Blogs;