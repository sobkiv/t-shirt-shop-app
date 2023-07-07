import React, { memo } from "react";
import { Link } from "react-router-dom";
import { StyledTShirtCard, ButtonsWrapper } from "./TShirtCard.styled";

const TShirtCard = ({ id, product, onDelete, onAdd, }) => {

  return (
    <StyledTShirtCard>
      <Link className="buttons" to={`/product/${id}`}>
        <div className="img-wrapper">
          <img src={product.imageUrl} alt="product" />
        </div>
      </Link>
      <div className="info-wrapper">
        <div>{product.name}</div>
        <div>Amount - {product.count}</div>
        <ButtonsWrapper >
          <button className="button-wrapper" onClick={() => onAdd(product)}>Add product</button>
          <button className="button-wrapper" onClick={() => onDelete(product)}>Delete</button>
        </ButtonsWrapper>
      </div>
    </StyledTShirtCard>
  );
};

export default memo(TShirtCard);
