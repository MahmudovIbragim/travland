import { FC } from "react";
import scss from "./BlogCard.module.scss";

interface TypeProps {
  id: number;
  img: string;
  title: string;
  description: string;
}
const BlogCard: FC<TypeProps> = ({ description, id, img, title }) => {
  return (
    <div key={id} className={scss.BlogCard}>
      <img src={img} alt="" />
      <div className={scss.card_info}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
