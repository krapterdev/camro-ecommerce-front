
import BreadCrumb from '../../components/website/PartialComponents/BreadCrumb';
import useSEO from '../../hooks/useSEO';

const WhyChooseUs = () => {
  useSEO({
    title: 'Company Profile - camro',
    description: 'Learn more about camro and our mission.',
    keywords: 'about, camro, company'
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