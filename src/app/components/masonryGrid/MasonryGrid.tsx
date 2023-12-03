"use client";

import MenuCategory from "../menuAccordion/MenuAccordion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGrid = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1168: 3 }}>
      <Masonry>
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
