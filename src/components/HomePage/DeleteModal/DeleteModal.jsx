import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../store/productsSlice';

const DeleteModal = ({ product, showDeleteModal, setShowDeleteModal }) => {
  console.log(product);
  const [id] = useState(product.count);
  console.log(id);
  const [chosenAmount, setChosenAmount] = useState(0);
  const cart = useSelector((state) => state.products.cart);
  console.log(cart);
  const [quantity] = useState(cart.filter((p) => p.id === id)[0].chosenAmount);
  console.log(quantity);

  const dispatch = useDispatch();

  const handleConfirm = () => {
    const id = product.id;
    dispatch(removeFromCart({ id, chosenAmount }));
    setShowDeleteModal(false);
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <Modal isOpen={showDeleteModal} contentLabel={'Delete Product'}>
      <h2>{'Which amount product do you want to delete?'}</h2>
      <h3>{product.name}</h3>
      <div>
        <label>Count:</label>
        <input
          type="number"
          min="0"
          max={quantity}
          step="1"
          onChange={(e) => setChosenAmount(Number(e.target.value))}
          required
        />
      </div>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </Modal>
  );
};

export default DeleteModal;
