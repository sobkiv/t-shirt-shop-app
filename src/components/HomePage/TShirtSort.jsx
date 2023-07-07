import React from "react";
import { FlexGrid } from "../styled";

function TShirtSort({ handleSortChange, sortOrder }) {
  return (
    <FlexGrid>
      <select className="custom-select" onChange={handleSortChange} value={sortOrder}>
        <option value="nameAsc">Name (A-Z)</option>
        <option value="nameDesc">Name (Z-A)</option>
        <option value="countAsc">Count (Low to High)</option>
        <option value="countDesc">Count (High to Low)</option>
      </select>
    </FlexGrid>
  );
}

export default TShirtSort;
