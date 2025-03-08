import scss from "./Footer.module.scss";
import facebook from "../../../public/Group 172.svg";
import instagram from "../../../public/instagramm.svg";
import google from "../../../public/google.svg";
import twitter from "../../../public/twitter.svg";
import {
  FooterFListsData,
  FooterSListsData,
} from "../../mock/data/footerListsData";
import Button from "../../shared/ui/button/Button";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contacts}>
            <div className={scss.side_logo}>
              <h3>Trevland</h3>
            </div>
            <div className={scss.contact_side}>
              <p>Contact us</p>
              <p>@eurotravlend88.com</p>
            </div>
            <ul className={scss.social_links}>
              <li>
                <a href="https://www.facebook.com">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <img src={google} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className={scss.lists}>
            <ul className={scss.FooterCard}>
              {FooterFListsData.map((item) => (
                <li key={item.id}>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
            <ul className={scss.FooterCard}>
              {FooterSListsData.map((item) => (
                <li key={item.id}>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={scss.subscribe}>
            <h3>SUBSCRIBE NOW</h3>
            <div className={scss.form}>
              <input type="text" placeholder="Email" />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
