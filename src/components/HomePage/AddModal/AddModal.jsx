import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/productsSlice';

const ProductModal = ({ product, showAddModal, setShowAddModal }) => {
  const [chosenAmount, setChosenAmount] = useState(0);
  const [quantity] = useState(product.count);

  const dispatch = useDispatch();

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);


  const handleConfirm = () => {
    const id = product.id;
    dispatch(addToCart({ id, chosenAmount }));
    setShowAddModal(false);
  };

  const handleCancel = () => {
    setShowAddModal(false);
  };

  return (
    <Modal
      isOpen={showAddModal}
      contentLabel={'Add Product'}
    >
      <h2>{'Add Product'}</h2>
      
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

export default ProductModal;
