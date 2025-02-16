import { FC } from "react";
import scss from "./SliderCard.module.scss";
import { Icons } from "../../assets";

interface TypeProps {
  title: string;
  img: string;
  id: number;
  location: string;
  days: string;
  price: string;
  classNames: string;
}

const SliderCard: FC<TypeProps> = ({
  days,
  id,
  img,
  location,
  title,
  price,
  classNames,
}) => {
  return (
    <div key={id} className={`${scss.SliderCard} ${classNames}`}>
      <img src={img} alt="" />
      <div className={scss.info_card}>
        <h3>{title}</h3>
        <p className={scss.location}>
          <span>
            <Icons.location />
          </span>
          {location}
        </p>
        <p className={scss.days}>{days}</p>
        <p className={scss.price}>
          {price}
          <span>/person</span>
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
