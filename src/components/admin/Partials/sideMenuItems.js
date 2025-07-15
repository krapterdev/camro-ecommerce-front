// src/components/admin/sidebar/sideMenuItems.js
const sideMenuItems = [
  {
    title: "Dashboard",
    icon: "solar:widget-5-bold-duotone",
    path: "/admin/dashboard",
  },
  {
    title: "Category",
    icon: "solar:clipboard-list-bold-duotone",
    children: [
      { title: "Create Category", path: "/admin/add-category" },
      { title: "Manage Category", path: "/admin/manage-category" },
    ],
  },
  {
    title: "Products",
    icon: "solar:t-shirt-bold-duotone",
    children: [
      { title: "List", path: "/admin/products/list" },
      { title: "Grid", path: "/admin/products/grid" },
      { title: "Details", path: "/admin/products/details" },
      { title: "Edit", path: "/admin/products/edit" },
      { title: "Create", path: "/admin/products/create" },
    ],
  },
  {
    title: "Inventory",
    icon: "solar:box-bold-duotone",
    children: [
      { title: "Warehouse", path: "/admin/inventory/warehouse" },
      { title: "Received Orders", path: "/admin/inventory/received-orders" },
    ],
  },
  {
    title: "Orders",
    icon: "solar:bag-smile-bold-duotone",
    children: [
      { title: "List", path: "/admin/orders/list" },
      { title: "Details", path: "/admin/orders/details" },
      { title: "Cart", path: "/admin/orders/cart" },
      { title: "Check Out", path: "/admin/orders/checkout" },
    ],
  },
];

export default sideMenuItems;
