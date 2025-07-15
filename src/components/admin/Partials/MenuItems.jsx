// menuConfig.js
export const menuItems = [
  {
    title: "Dashboard",
    icon: "solar:widget-5-bold-duotone",
    path: "/dashboards/index",
  },
  {
    title: "Category",
    icon: "solar:clipboard-list-bold-duotone",
    children: [
      { title: "Create Category", path: "/general/category/create" },
      { title: "Manage Category", path: "/general/category/list" },
    ],
  },
];
