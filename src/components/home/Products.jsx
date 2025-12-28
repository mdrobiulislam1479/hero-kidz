import { getProducts } from "@/actions/server/product";
import React from "react";
import ProductCard from "../cards/ProductsCard";

const Products = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10">
        Our <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
