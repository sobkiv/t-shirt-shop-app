import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { StyledTShirtCard, ButtonsWrapper } from './TShirtCard.styled';

const TShirtCard = ({ id, product, onDelete, onAdd }) => {
  const handleAddButton = () => onAdd(product);
  const handleDeleteButton = () => onDelete(product);

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
        <ButtonsWrapper>
          <button className="button-wrapper" onClick={handleAddButton}>
            Add product
          </button>
          <button className="button-wrapper" onClick={handleDeleteButton}>
            Delete
          </button>
        </ButtonsWrapper>
      </div>
    </StyledTShirtCard>
  );
};

export default memo(TShirtCard);
