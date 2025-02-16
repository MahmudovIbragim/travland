import Button from "../../shared/ui/button/Button";
import Header from "../header/Header";
import scss from "./HomeSection.module.scss";
const HomeSection = () => {
  return (
    <div className={scss.HomeSection}>
      <div className="container">
        <Header />
        <div className={scss.content}>
          <h1>Railtrips To Here, There And Everywhere!</h1>
          <p>
            We all wish to start our year the best way possible and also
            according to a common belief if you have a great start to your.
          </p>
          <Button>Explore more</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
