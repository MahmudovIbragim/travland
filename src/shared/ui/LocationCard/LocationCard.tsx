import { FC } from "react";
import scss from "./LocationCard.module.scss";

interface TypeProps {
  title: string;
  description: string;
  id: number;
  img: string;
}
const LocationCard: FC<TypeProps> = ({ description, id, img, title }) => {
  return (
    <div key={id} className={scss.LocationCard}>
      <img src={img} alt="" />
      <div className={scss.card_title}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LocationCard;
