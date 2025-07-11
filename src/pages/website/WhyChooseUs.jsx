
import BreadCrumb from '../../components/website/PartialComponents/BreadCrumb';
import useSEO from '../../hooks/useSEO';

const WhyChooseUs = () => {
  useSEO({
    title: 'Company Profile - Mangatram',
    description: 'Learn more about Mangatram and our mission.',
    keywords: 'about, mangatram, company'
  });

  return (
    <>
         <BreadCrumb
        title="Why Us"
        items={[{ label: "Home", href: "/" }, { label: "Why Us" }]}
      />

    </>
  );
};

export default WhyChooseUs;