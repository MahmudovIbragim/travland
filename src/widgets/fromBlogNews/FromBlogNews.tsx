import SectionTitle from "../../shared/ui/sectionTitle/SectionTitle";
import scss from "./FromBlogNews.module.scss";
const FromGlogNews = () => {
  return (
    <div className={scss.FromBlogNews}>
      <div className="container">
        <div className={scss.content}>
          <SectionTitle
            title="From Blog & News"
            desc="Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community."
          />
        </div>
      </div>
    </div>
  );
};

export default FromGlogNews;
