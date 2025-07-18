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
      { title: "Create Products", path: "/admin/products/add" },
      { title: "Manage Products", path: "/admin/products/list" },
      // { title: "Manage Pack", path: "/admin/products/pack" },
      // { title: "Manage Discount", path: "/admin/products/discount" },
    ],
  },
  {
    title: "Products Weight",
    icon: "mdi:weight-gram",
    children: [
      { title: "Create Weight", path: "/admin/products/weight/add" },
      { title: "Manage Weight", path: "/admin/products/weight/list" },
    ],
  },
  {
    title: "Products Size",
    icon: "ri:custom-size",
    children: [
      { title: "Create Size", path: "/admin/products/size/add" },
      { title: "Manage Size", path: "/admin/products/size/list" },
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
