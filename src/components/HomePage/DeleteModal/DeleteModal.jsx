import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../store/productsSlice';
import { ModalWrapper, ModalContent, GlobalStyle } from './DeleteModal.styled';

const DeleteModal = ({ product, showDeleteModal, setShowDeleteModal }) => {
  console.log(product);
  const [id] = useState(product.id);
  const [chosenAmount, setChosenAmount] = useState(0);
  const cart = useSelector((state) => state.products.cart);
  const quantity = cart.find((p) => p.id === id)?.chosenAmount || 0;
  const dispatch = useDispatch();

  const handleConfirm = () => {
    const id = product.id;
    dispatch(removeFromCart({ id, chosenAmount }));
    setShowDeleteModal(false);
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  const correctQuantityValidator = (e) => {
    const value = Number(e.target.value);
    if (value <= quantity) {
      setChosenAmount(value)
    }
  }

  return (
    <>
      <GlobalStyle showModal={showDeleteModal} />
      <ModalWrapper isOpen={showDeleteModal} contentLabel={'Add Product'}>
        <ModalContent>
      <h2>{'Which amount product do you want to delete?'}</h2>
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

export default DeleteModal;
