import React from "react";
import PropTypes from "prop-types";
import { Image, Row, Col } from "react-bootstrap";

export default class Cover extends React.Component {
  render() {
    return (
      <div className="">
        <Col className="cover" xd={12} sm={12} md={12} lg={12}>
          <Image src={this.props.image} responsive />
        </Col>
      </div>
    );
  }
}
Cover.propTypes = {
  slogan: PropTypes.string,
  image: PropTypes.any
};
