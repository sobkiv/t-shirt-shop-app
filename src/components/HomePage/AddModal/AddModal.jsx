import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/productsSlice';
import { ModalWrapper, ModalContent, GlobalStyle } from './AddModal.styled';

const ProductModal = ({ product, showAddModal, setShowAddModal }) => {
  const [chosenAmount, setChosenAmount] = useState(0);
  const [quantity] = useState(product.count);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    const id = product.id;
    dispatch(addToCart({ id, chosenAmount }));
    setShowAddModal(false);
  };

  const handleCancel = () => {
    setShowAddModal(false);
  };

  const correctQuantityValidator = (e) => {
    const value = Number(e.target.value);
    if (value <= quantity) {
      setChosenAmount(value);
    }
  };

  return (
    <>
      <GlobalStyle showModal={showAddModal} />
      <ModalWrapper isOpen={showAddModal} contentLabel={'Add Product'}>
        <ModalContent>
          <h2>{'Add Product'}</h2>
          <h3>{product.name}</h3>
          <div>
            <label>Count:</label>
            <input
              type="number"
              min="0"
              max={quantity}
              step="1"
              onChange={correctQuantityValidator}
              required
            />
          </div>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default ProductModal;
