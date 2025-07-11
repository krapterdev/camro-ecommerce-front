import LogInBreadCrumb from '../../components/website/LogInPageComponents/LogInBreadCrumb';
import LoginSection from '../../components/website/LogInPageComponents/LoginSection';
import useSEO from '../../hooks/useSEO';

const LogIn = () => {
  useSEO({
    title: 'Log In - Mangatram',
    description: 'Learn more about Mangatram and our mission.',
    keywords: 'about, mangatram, company'
  });

  return (
    <>
      <LogInBreadCrumb />
      <LoginSection />
    </>
  );
};

export default LogIn;
