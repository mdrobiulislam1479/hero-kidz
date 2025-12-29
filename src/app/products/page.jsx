import { getProducts } from "@/actions/server/product";
import ProductCard from "@/components/cards/ProductsCard";
import React from "react";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10">
        All <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
