import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300"
          alt="Wireless Mouse"
        />
      </div>

      <div className="product-details">
        <h2>{productName}</h2>

        <p className="price">
          ₹{price} <span>per item</span>
        </p>

        <p>Colour: {selectedColor}</p>
        <p>Deliver to: {deliveryCity || "Not entered"}</p>

        <hr />

        <p>Cart Quantity: {quantity}</p>

        <h3>Total Amount: ₹{quantity * price}</h3>

        <p className="status">
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;