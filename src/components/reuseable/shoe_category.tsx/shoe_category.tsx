import React from "react";
import "./shoe_category.scss";

interface ShoeCategoryProps {
  img_url: string;
  img_alt: string;
  category_name: string;
  link_url: string
}

interface ShoeCategoryState {}

export class ShoeCategory extends React.Component<
  ShoeCategoryProps,
  ShoeCategoryState
> {
  constructor(props: ShoeCategoryProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shoe_category_stage">
        <a href={this.props.link_url}>
          <div className="shoe_category_element">
            <img src={this.props.img_url} alt={this.props.img_alt} />
            <div className="shoe_category_nb"></div>
            <p className="shoe_category_name">{this.props.category_name}</p>
          </div>
        </a>
      </div>
    );
  }
}
