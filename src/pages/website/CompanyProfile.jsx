import AboutCompanyProfileBreadCrumb from '../../components/website/AboutCompanyProfile/AboutCompanyProfileBreadCrumb';
import AboutUsManufacture from '../../components/website/AboutPageComponents/AboutUsManufacture';
import BottomTab from '../../components/website/HomePageComponents/BottomTab';
import useSEO from '../../hooks/useSEO';

const CompanyProfile = () => {
  useSEO({
    title: 'Company Profile - Mangatram',
    description: 'Learn more about Mangatram and our mission.',
    keywords: 'about, mangatram, company'
  });

  return (
    <>
      <AboutCompanyProfileBreadCrumb />
      <AboutUsManufacture />
       <BottomTab/>
    </>
  );
};

export default CompanyProfile;