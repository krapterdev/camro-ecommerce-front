import AboutUsBreadCrumb from '../../components/website/AboutPageComponents/AboutUsBreadCrumb';
import AboutUsDirectorMsg from '../../components/website/AboutPageComponents/AboutUsDirectorMsg';
import AboutUsManufacture from '../../components/website/AboutPageComponents/AboutUsManufacture';
import BottomTab from '../../components/website/HomePageComponents/BottomTab';
import useSEO from '../../hooks/useSEO';

const AboutPage = () => {
  useSEO({
    title: 'About Us - Mangatram',
    description: 'Learn more about Mangatram and our mission.',
    keywords: 'about, mangatram, company'
  });

  return (
    <>
      <AboutUsBreadCrumb />
      <AboutUsManufacture />
      <AboutUsDirectorMsg />
      <BottomTab/>
    </>
  );
};

export default AboutPage;
