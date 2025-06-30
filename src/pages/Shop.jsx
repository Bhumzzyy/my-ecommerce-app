import React, { useState } from "react";
import ProductCard from "../components/productCard";
import { allProducts } from "../components/AllProducts";

const categories = [
  "Ethnic Wear",
  "Western Wear",
  "Sportswear",
  "Loungewear",
  "Formal Wear"
];
const types = ["Men", "Women", "Kids"];

const Shop = () => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Filtering logic
  const filteredProducts = allProducts.filter(product => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchType = selectedType ? product.type.toLowerCase() === selectedType.toLowerCase() : true;
    return matchCategory && matchType;
  });

  return (
    <div>
      <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="">All</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id || idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;


