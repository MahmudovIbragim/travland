import Footer from "../widgets/footer/Footer";
import FromGlogNews from "../widgets/fromBlogNews/FromBlogNews";
import HomeSection from "../widgets/homeSection/HomeSection";
import PopularLocation from "../widgets/popularLocation/PopularLocation";
import SpecialOffers from "../widgets/specialOffers/SpecialOffers";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <PopularLocation />
      <SpecialOffers />
      <FromGlogNews />
      <Footer />
    </>
  );
};

export default HomePage;
