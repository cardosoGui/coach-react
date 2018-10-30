import React from "react";

import carrer_coach from "../ui/images/carrer_coach.jpg";
import Cover from "../ui/Cover";

export default class CoverContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      Homepage: {
        slogan: "Aqui e o Slogan",
        image: carrer_coach
      }
    };
  }
  render() {
    return <Cover image={this.state.Homepage.image} />;
  }
}
