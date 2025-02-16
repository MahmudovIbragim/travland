import Button from "../../shared/ui/button/Button";
import scss from "./Header.module.scss";
import logo from "./assets/Trevland.png";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={scss.right_content}>
            <div className={scss.nav_links}>
              <ul>
                <li>Home</li>
                <li>Location</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={scss.btn}>
              <Button>Booking now</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
