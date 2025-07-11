import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '220px', minHeight: '100vh' }}>
      <h4>Mangatram Admin</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
