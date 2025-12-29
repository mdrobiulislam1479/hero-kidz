import Image from "next/image";

export default function ProductCard({ product }) {
  const { image, title, reviews, price, sold } = product;

  return (
    <div className="bg-base-100 shadow-lg border border-gray-200 hover:shadow-xl transition">
      <figure className="p-4">
        <Image
          src={image}
          alt={title}
          width={200}
          height={180}
          className="rounded-sm w-full h-48 object-cover"
        />
      </figure>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          ⭐ <span className="font-medium">{reviews} Reviews</span>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <p className="text-xl font-bold text-primary">${price} BDT</p>
          <p className="text-sm text-gray-500">Sold: {sold}</p>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary w-full">Add to Cart</button>
          <button className="btn btn-primary btn-outline mt-2 w-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
