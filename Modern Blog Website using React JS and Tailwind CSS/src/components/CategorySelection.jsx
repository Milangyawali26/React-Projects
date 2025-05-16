import React from "react";

const CategorySelection = ({ handleCategoryChange, selectedCategory }) => {
  const categories = ["All", "Fintech", "Health","Apps","Security","Startups","Growth", "AI","Enterprise"];

  return (
    <div className="flex justify-center my-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category === "All" ? null : category)}
          className={`px-4 py-2 m-2 border rounded-md ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
