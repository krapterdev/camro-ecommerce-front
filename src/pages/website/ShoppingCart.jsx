import ShoppingCartBreadCrumb from '../../components/website/ShoppingCartPageComponents/ShoppingCartBreadCrumb';
import LoginSection from '../../components/website/LogInPageComponents/LoginSection';
import useSEO from '../../hooks/useSEO';

const LogIn = () => {
  useSEO({
    title: 'Shopping Cart - camro',
    description: 'Learn more about camro and our mission.',
    keywords: 'about, camro, company'
  });

  return (
    <>
      <ShoppingCartBreadCrumb />
      <LoginSection />
    </>
  );
};

export default LogIn;
