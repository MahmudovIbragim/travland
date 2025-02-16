import { mockData } from "../../mock/data/data";
import LocationCard from "../../shared/ui/LocationCard/LocationCard";
import SectionTitle from "../../shared/ui/sectionTitle/SectionTitle";
import scss from "./PopularLocation.module.scss";
const PopularLocation = () => {
  return (
    <div className={scss.PopularLocation}>
      <div className="container">
        <div className={scss.content}>
          <SectionTitle
            title="Popular Location"
            desc=" For every one of us, travel came first. We’ve spent years living
              as nomads, pioneers, and voyagers— from island hopping in the"
          />

          <div className={scss.cards}>
            {mockData.map((item) => (
              <LocationCard
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PopularLocation;
