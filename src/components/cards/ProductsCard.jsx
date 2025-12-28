import Image from "next/image";

export default function ProductCard({ product }) {
  const { image, title, reviews, price, sold } = product;

  return (
    <div className="card bg-base-100 shadow-lg border hover:shadow-xl transition">
      <figure className="px-4 pt-4">
        <Image
          src={image}
          alt={title}
          width={200}
          height={180}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          ⭐ <span className="font-medium">{reviews} Reviews</span>
        </div>

        <div className="mt-2">
          <p className="text-xl font-bold text-primary">{price} BDT</p>
          <p className="text-sm text-gray-500">Sold: {sold}</p>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
