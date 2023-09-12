import "./cart-item.css";

export function CartItem({ thumbnailUrl, title, desc, priceInUSD, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-type">
          <p>template</p>
          <i onClick={onRemove} className="fa-solid fa-xmark"></i>
        </div>
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-desc">{desc}</p>
        <h4 className="cart-item-inregration">
          Selected integration: <span>html</span>
        </h4>
        <div className="cart-item-preview">
          <span>Preview template</span>
          <h1>${priceInUSD}</h1>
        </div>
      </div>
    </div>
  );
}
