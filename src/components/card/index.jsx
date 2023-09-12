import "./card.css";

import * as React from "react";

import { Button } from "@components";
import { AngularIcon, GiftIcon, HtmlIcon, ReactIcon, VueIcon } from "@icons";

export function Card({
  title,
  thumbnailUrl,
  desc,
  priceInUSD,
  supportedFrameworks,
  onAddToCart,
}) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className="card_details">
        <div className="card_header">
          <div>{title}</div>
          <div>${priceInUSD}</div>
        </div>
        <div className="card_desc">{desc}</div>
        <div className="card_frameworks">Supported Frameworks</div>
        <div className="card_supported_icons">
          {supportedFrameworks.map((icon) => {
            return renderIcon(icon);
          })}
        </div>
        <div className="card_buttons">
          <Button>Preview</Button>
          <Button onClick={onAddToCart} gradient type="cart">
            Add To cart
          </Button>
        </div>
      </div>
    </div>
  );
}

const renderIcon = (name) => {
  if (name === "html") {
    return <HtmlIcon key={name} />;
  } else if (name === "react") {
    return <ReactIcon key={name} />;
  } else if (name === "angular") {
    return <AngularIcon key={name} />;
  } else if (name === "vue") {
    return <VueIcon key={name} />;
  } else {
    return <GiftIcon key={name} />;
  }
};
