import ShoppingCartBreadCrumb from '../../components/website/ShoppingCartPageComponents/ShoppingCartBreadCrumb';
import LoginSection from '../../components/website/LogInPageComponents/LoginSection';
import useSEO from '../../hooks/useSEO';

const LogIn = () => {
  useSEO({
    title: 'Shopping Cart - Mangatram',
    description: 'Learn more about Mangatram and our mission.',
    keywords: 'about, mangatram, company'
  });

  return (
    <>
      <ShoppingCartBreadCrumb />
      <LoginSection />
    </>
  );
};

export default LogIn;
