import axios from "axios";
import BreadCrumb from "../../components/website/PartialComponents/BreadCrumb";
import useSEO from "../../hooks/useSEO";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailPageComponents from "../../components/website/ProductPageComponents/ProductDetailPageComponents.jsx";

const ProductDetailPage = () => {
  const { category: slug, productDetail: pslug } = useParams();

  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [productDetail, setProductDetail] = useState(null);

  const webURL = import.meta.env.VITE_WEBSITE_APP_API_BASE_URL;

  useSEO({
    title: "Shop Now - Camro",
    description: "Learn more about Camro and our mission.",
    keywords: "about, Camro, company",
  });

  // Fetch category info
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

  // Fetch product info
  useEffect(() => {
    if (pslug) {
      axios
        .get(`${webURL}/product/${pslug}`)
        .then((res) => {
          setProductDetail(res.data || null);
        })
        .catch((err) => {
          console.error("Failed to load product", err);
          setProductDetail(null);
        });
    }
  }, [pslug]);

  return (
    <>
      <BreadCrumb
        title={productDetail?.product_name || pslug}
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/${categorySlug}` },
          { label: productDetail?.product_name || pslug },
        ]}
      />

      {productDetail && (
        <ProductDetailPageComponents productData={productDetail} />
      )}
    </>
  );
};

export default ProductDetailPage;
