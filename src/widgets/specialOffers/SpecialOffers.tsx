import CustomSlider from "../../shared/ui/Slider/Slider";
import SectionTitle from "../../shared/ui/sectionTitle/SectionTitle";
import scss from "./SpecialOffers.module.scss";
const SpecialOffers = () => {
  return (
    <div className={scss.SpecialOffers}>
      <div className="container">
        <div className={scss.content}>
          <SectionTitle
            title="Special Offers"
            desc="With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates, "
          />
          <div className={scss.slider}>
          </div>
        </div>
      </div>
            <CustomSlider />
    </div>
  );
};

export default SpecialOffers;
