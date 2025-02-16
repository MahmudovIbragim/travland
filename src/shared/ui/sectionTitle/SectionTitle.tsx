import { FC } from "react";
import scss from "./SectionTitle.module.scss";

interface TypeProps {
  title: string;
  desc: string;
}
const SectionTitle: FC<TypeProps> = ({ desc, title }) => {
  return (
    <div className={scss.SectionTitle}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;
