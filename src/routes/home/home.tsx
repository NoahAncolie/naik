import React from "react";
import "./home.scss";
import hero from "../../assets/images/appeal/running_low_angle.png";
import shoe_1 from "../../assets/images/shoes/jelly_orange_naik.png";
import shoe_2 from "../../assets/images/shoes/jelly_white_naik.png";
import shoe_3 from "../../assets/images/shoes/smokey_naik_behind.png";
import shoe_4 from "../../assets/images/shoes/colored_naik.png";
import shoe_5 from "../../assets/images/shoes/orange_naik.png";
import shoe_6 from "../../assets/images/shoes/ice_naik.png";
import { NewShoeCard } from "../../components/reuseable/shoe_card/new_shoe_card";
import { ShoeCategory } from "../../components/reuseable/shoe_category.tsx/shoe_category";

interface HomeProps {}

interface HomeState {
  show_hero_2: boolean;
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      show_hero_2: false,
    };

    this.callbackFunction = this.callbackFunction.bind(this);
  }

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver(
      this.callbackFunction,
      { threshold: 1, rootMargin: "50px" }
    );
    intersectionObserver.observe(document.getElementById("navbar_title")!);
  }

  callbackFunction(entries: any) {
    const [entry] = entries;
    this.setState({ show_hero_2: !entry.isIntersecting });
    console.log(entry.isIntersecting);
  }

  render() {
    return (
      <div className="home">
        <div className="home_hero">
          <img src={hero} alt="low angle view on someone running" />
          <div className="hero_title">
            <h1>Travel the World</h1>
          </div>
        </div>
        <section id="#novelty">
          <div className="novelty_title_container">
            <h2>NEW PRODUCTS</h2>
          </div>
          <div className="novelty_slide_container">
            <NewShoeCard
              img_url={shoe_1}
              shoe_price={275}
              shoe_name="Naïk Gelato"
            />
            <NewShoeCard
              img_url={shoe_2}
              shoe_price={305}
              shoe_name="Naïk Phantom"
            />
            <NewShoeCard
              img_url={shoe_3}
              shoe_price={155}
              shoe_name="Naïk Familia"
            />
            <NewShoeCard
              img_url={shoe_1}
              shoe_price={275}
              shoe_name="Naïk Gelato"
            />
            <NewShoeCard
              img_url={shoe_2}
              shoe_price={305}
              shoe_name="Naïk Phantom"
            />
            <NewShoeCard
              img_url={shoe_3}
              shoe_price={155}
              shoe_name="Naïk Familia"
            />
          </div>
        </section>

        <section id="#all">
          <div className="second_hero">
            <h2
              id="second_hero_title"
              style={{
                transform: this.state.show_hero_2
                  ? "translateY(0%)"
                  : "translateY(100%)",
              }}
            >
              The Brand you Love .
            </h2>
          </div>
          <div className="all_products_title_container">
            <h2>ALL PRODUCTS</h2>
          </div>
          <div className="all_products_container">
            <ShoeCategory
              img_url={shoe_4}
              img_alt="Two"
              category_name="Sport"
              link_url="#hello world"
            />
            <ShoeCategory
              img_url={shoe_5}
              img_alt="Two"
              category_name="City"
              link_url="#hello world"
            />
            <ShoeCategory
              img_url={shoe_6}
              img_alt="Two"
              category_name="Outside"
              link_url="#hello world"
            />
          </div>
        </section>

        <section>
          <div className="discount_hero">
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
            <h2 className="discount_hero_title discount_1">DISCOUNT&nbsp;&#9679;&nbsp;</h2>
          </div>
        </section>
      </div>
    );
  }
}
