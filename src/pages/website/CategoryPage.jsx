import axios from "axios";
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
import useSEO from "../../hooks/useSEO";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryPageComponents from "../../components/website/CategoryPageComponents/CategoryPageComponents";

const CategoryPage = () => {
  const { category: slug } = useParams();

  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [categorySlug, setCategorySlug] = useState(null);

  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;

  useSEO({
    title: "Shop Now - Camro",
    description: "Learn more about Camro and our mission.",
    keywords: "about, Camro, company",
  });

  useEffect(() => {
    if (slug) {
      axios
        .get(`${webURL}/category/${slug}`)
        .then((res) => {
          const data = res.data;
          setCategoryName(data.category_name || "Category");
          setCategoryId(data.id || null);
          setCategorySlug(data.category_slug || null);
        })
        .catch((err) => {
          console.error("Failed to load category", err);
          setCategoryName("Unknown Category");
          setCategoryId(null);
          setCategorySlug(null);
        });
    }
  }, [slug]);

  return (
    <>
      <BreadCrumb
        title={categoryName}
        items={[{ label: "Home", href: "/" }, { label: categoryName }]}
      />

      <CategoryPageComponents
        category_id={categoryId}
        category_slug={categorySlug}
      />
    </>
  );
};

export default CategoryPage;
