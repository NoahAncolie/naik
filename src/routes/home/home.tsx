import React from "react";
import "./home.scss";
import hero from "../../assets/images/appeal/running_low_angle.png";
import shoe_1 from "../../assets/images/shoes/jelly_orange_naik.png";
import shoe_2 from "../../assets/images/shoes/jelly_white_naik.png";
import shoe_3 from "../../assets/images/shoes/smokey_naik_behind.png";
import shoe_4 from "../../assets/images/shoes/colored_naik.png";
import shoe_5 from "../../assets/images/shoes/orange_naik.png";
import shoe_6 from "../../assets/images/shoes/ice_naik.png";
import shoe_7 from "../../assets/images/shoes/smokey_naik.png";
import { NewShoeCard } from "../../components/reuseable/shoe_card/new_shoe_card";
import { ShoeCategory } from "../../components/reuseable/shoe_category.tsx/shoe_category";
import { RunningBanner } from "../../components/reuseable/running_banner/running_banner";

interface HomeProps {}

interface HomeState {
  show_hero_2: boolean;
  link_shoe_picture: string;
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      show_hero_2: false,
      link_shoe_picture: shoe_2,
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
            <h2>TRENDING SHOES</h2>
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
            <h2>CATEGORIES</h2>
          </div>
          <div className="all_products_container">
            <ShoeCategory
              img_url={shoe_4}
              img_alt="Two"
              category_name="Sport"
              link_url="#hello world"
            />

            <ShoeCategory
              img_url={shoe_6}
              img_alt="Two"
              category_name="Outside"
              link_url="#hello world"
            />

            <ShoeCategory
              img_url={shoe_5}
              img_alt="Two"
              category_name="Iconic"
              link_url="#hello world"
            />
          </div>
        </section>

        <section>
          <RunningBanner running_text="NEW&nbsp;ARRIVAL" />
          <ul
            className="comming_shoes"
            onMouseEnter={() => {
              document
                .getElementById("comming_picture")
                ?.classList.add("comming_picture_full");
            }}
            onMouseLeave={() => {
                document
                .getElementById("comming_picture")
                ?.classList.remove("comming_picture_full");
            }}
          >
            <a href="#comming_shoe">
              <li
                className="comming_shoe_link"
                onMouseEnter={() => {
                  this.setState({ link_shoe_picture: shoe_2 });
                }}
              >
                Phantom
              </li>
            </a>
            <a href="#comming_shoe">
              <li
                className="comming_shoe_link"
                onMouseEnter={() => {
                  this.setState({ link_shoe_picture: shoe_4 });
                }}
              >
                Urban Run
              </li>
            </a>
            <a href="#comming_shoe">
              <li
                className="comming_shoe_link"
                onMouseEnter={() => {
                  this.setState({ link_shoe_picture: shoe_7 });
                }}
              >
                Spear Mx7
              </li>
            </a>
            <div className="comming_picture" id="comming_picture">
              <img src={this.state.link_shoe_picture} alt="shoe-for" />
            </div>
          </ul>
          <RunningBanner running_text="NEW&nbsp;ARRIVAL" />
        </section>

        <section>
          <div className="more_grid">
            <a href="#hello" className="more_gridchild_1">
              <img src={shoe_7} alt="shoe" />
              <div className="more_blur"></div>
              <p className="more_title">Spring 2022</p>
            </a>
            <a href="#hello" className="more_gridchild_2">
              <img src={shoe_5} alt="shoe" />
              <div className="more_blur"></div>
              <p className="more_title">1987 Remaster</p>
            </a>
            <a href="#hello" className="more_gridchild_3">
              <img src={shoe_1} alt="shoe" />
              <div className="more_blur"></div>
              <p className="more_title">Futuristic</p>
            </a>
            <a href="#hello" className="more_gridchild_4">
              <img src={shoe_3} alt="shoe" />
              <div className="more_blur"></div>
              <p className="more_title">Discount</p>
            </a>
          </div>
        </section>
      </div>
    );
  }
}
