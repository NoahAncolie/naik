import React from "react";
import "./footer.scss";

interface FooterProps {}

interface FooterState {}

export class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="footer_c_line">
          <p className="footer_c_text">
            ©2023 NAÏK • Réalisé par <a href="https://adrienbenaceur.fr">Un Développeur</a>
          </p>
        </div>
      </footer>
    );
  }
}
