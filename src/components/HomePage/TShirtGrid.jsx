import React, { useMemo, useState } from "react";
import TShirtCard from "./TShirtCard/TShirtCard";
import { useSelector } from "react-redux";
import ProductModal from "./AddModal/AddModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import { FlexGrid } from "../styled";

const TShirtGrid = ({ sortOrder }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.products.products);

  const handleAddClick = (product) => {
    setSelectedProduct(product);
    setShowAddModal(true);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  let sortedProducts = products;

  sortedProducts = useMemo(() => {
    if (!products) return [];
    let newProducts = [...products];
    switch (sortOrder) {
      case "nameAsc":
        newProducts = [...products].sort((a, b) =>
          a.name && b.name ? a.name.localeCompare(b.name) : 0
        );
        break;
      case "nameDesc":
        newProducts = [...products].sort((a, b) =>
          b.name && a.name ? b.name.localeCompare(a.name) : 0
        );
        break;
      case "countAsc":
        newProducts = [...products].sort((a, b) => a.count - b.count);
        break;
      case "countDesc":
        newProducts = [...products].sort((a, b) => b.count - a.count);
        break;
      default:
        newProducts = products;
        break;
    }
    return newProducts;
  }, [products, sortOrder]);

  return (
    <FlexGrid>
      {showAddModal && (
        <ProductModal
          product={selectedProduct || undefined}
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          product={selectedProduct || undefined}
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {sortedProducts.map((product) => (
        <TShirtCard
          className="product-list-item"
          selectedProduct={selectedProduct}
          key={product.id}
          product={product}
          onDelete={handleDeleteProduct}
          onAdd={handleAddClick}
        />
      ))}
    </FlexGrid>
  );
};

export default TShirtGrid;
