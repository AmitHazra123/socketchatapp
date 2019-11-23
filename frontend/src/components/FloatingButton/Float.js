import React, { Component } from "react";
import { Container, Button } from "react-floating-action-button";

import { primaryColor } from "../../assests/jss/user-kit.js";

export default class Float extends Component {
  render() {
    return (
      <Container>
        {this.props.direction === "down" ? (
          <Button
            tooltip="Go To Bottom"
            color={primaryColor}
            icon="fas fa-arrow-down"
            onClick={() =>
              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: "smooth"
              })
            }
          />
        ) : (
          <Button
            tooltip="Go To Top"
            color={primaryColor}
            icon="fas fa-arrow-up"
            onClick={() =>
              window.scrollTo({
                left: 0,
                top: 0,
                behavior: "smooth"
              })
            }
          />
        )}
      </Container>
    );
  }
}
