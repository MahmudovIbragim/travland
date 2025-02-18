import { mockBlogData } from "../../mock/data/data";
import BlogCard from "../../shared/ui/blogCard/BlogCard";
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
          <div className={scss.Blogs}>
            <div className={scss.left_blog}>
              {mockBlogData
                .filter((item) => item.id === 1)
                .map((item) => (
                  <div className={scss.left_card} key={item.id}>
                    <img src={item.img} alt="" />
                    <div className={scss.blog_info}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className={scss.right_blog}>
              {mockBlogData
                .filter((item) => item.id !== 1)
                .map((item) => (
                  <BlogCard
                    description={item.description}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    key={item.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromGlogNews;
