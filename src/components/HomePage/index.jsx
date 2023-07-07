import { useState } from "react";
import MainPageLayout from "./MainPageLayout";
import TShirtGrid from "./TShirtGrid";
import TShirtSort from "./TShirtSort";

const Home = () => {
  const [sortOrder, setSortOrder] = useState("nameAsc");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <MainPageLayout>
      <TShirtSort sortOrder={sortOrder} handleSortChange={handleSortChange} />
      <TShirtGrid sortOrder={sortOrder} />
    </MainPageLayout>
  );
};

export default Home;
