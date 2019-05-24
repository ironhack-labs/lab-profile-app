import React from "react";
import background from "../assets/oval-bg.png";

const ImageCard = props => (
  <div className="uk-container uk-height-large uk-width-1-1 uk-flex uk-flex-center">
    <div className="uk-inline">
      <img src={background} alt={background} />
      <div className="uk-overlay uk-position-cover">
        <div
          className="uk-child-width-1-2 uk-grid-large uk-grid-match"
          uk-grid="true"
        >
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default ImageCard;
