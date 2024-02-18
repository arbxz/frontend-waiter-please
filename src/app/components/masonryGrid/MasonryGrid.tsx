"use client";

import MenuCategory from "../menuAccordion/MenuAccordion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { imagePosition } from "../shared/utils";

const MasonryGrid = () => {
  const categoryList = [
    {
      categoryName: "Starters",
      description: "Get your entrée's",
      imageURL: "/backgroundProps/shawarma.png",
      imagePlacement: imagePosition.UP,
    },
    {
      categoryName: "Main Course",
      description: "Choose from our selection of grills",
      imageURL: "/backgroundProps/meat.png",
      imagePlacement: imagePosition.UP,
    },
    {
      categoryName: "Meat menu",
      description: "Choose from our selection of grills",
      imageURL: "/backgroundProps/meat.png",
      imagePlacement: imagePosition.UP,
    },
    {
      categoryName: "Desserts",
      description: "Order a chill drink",
      imageURL: "/backgroundProps/icecream.png",
      imagePlacement: imagePosition.UP,
    },
    {
      categoryName: "Drinks",
      description: "Order a chill drink",
      imageURL: "/backgroundProps/drink.png",
      imagePlacement: imagePosition.UP,
    },
  ];
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 968: 2, 1420: 3 }}>
      <Masonry gutter={"1.5rem"}>
        {categoryList.map((category, index) => (
          <div key={index}>
            <MenuCategory
              categoryName={category.categoryName}
              description={category.description}
              imageURL={category.imageURL}
              imagePlacement={
                !category.imageURL
                  ? ""
                  : category.imagePlacement || imagePosition.DOWN
              }
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
