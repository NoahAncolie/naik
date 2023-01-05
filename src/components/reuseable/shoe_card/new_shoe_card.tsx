import React from "react";
import "./shoe_card.scss"

interface NewShoeCardProps {
  img_url: string;
  shoe_price: number;
  shoe_name: string;
}

interface NewShoeCardState {}

export class NewShoeCard extends React.Component<
  NewShoeCardProps,
  NewShoeCardState
> {
  constructor(props: NewShoeCardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shoe_card_stage">
        <a href="#lol" className="new_shoe_card">
          <img src={this.props.img_url} />
          <p className="shoe_card_price">${this.props.shoe_price}</p>
          <p className="shoe_card_name">{this.props.shoe_name}</p>
        </a>
      </div>
    );
  }
}
