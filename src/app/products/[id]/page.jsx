import { getSingleProducts } from "@/actions/server/product";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const products = await getSingleProducts(id);

  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    reviews,
    sold,
    ratings,
    info = [],
    qna = [],
  } = products;

  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="p-5 grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div>
        {/* Titles */}
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600 mt-1">{bangla}</p>

        {/* Ratings */}
        <div className="flex items-center gap-3 mt-3 text-sm">
          <span className="flex items-center gap-1 text-yellow-500">
            ⭐ {ratings}
          </span>
          <span className="text-gray-500">{reviews} Reviews</span>
          <span className="text-gray-500">• Sold {sold}</span>
        </div>

        {/* Price Block */}
        <div className="mt-5">
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold text-primary">
              {finalPrice} BDT
            </span>
            {discount > 0 && (
              <span className="line-through text-gray-500">{price} BDT</span>
            )}
            {discount > 0 && (
              <span className="badge badge-success">{discount}% OFF</span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="btn btn-primary mt-6 w-full text-lg">
          Add to Cart
        </button>

        {/* Description */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Product Description</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Info List */}
        {info.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {info.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Q&A Section */}
        {qna.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">Q&A</h3>
            <div className="space-y-4">
              {qna.map((qa, index) => (
                <div key={index} className="border p-4 rounded-lg bg-base-200">
                  <p>
                    <span className="font-semibold">Q:</span> {qa.question}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">A:</span> {qa.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
