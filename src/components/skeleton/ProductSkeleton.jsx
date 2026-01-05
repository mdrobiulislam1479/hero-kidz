export default function ProductSkeleton() {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow animate-pulse">
      {/* Image */}
      <div className="w-full h-40 bg-gray-300 rounded-md"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>

      {/* Review */}
      <div className="h-3 bg-gray-200 rounded mt-3 w-24"></div>

      {/* Price + Sold */}
      <div className="flex items-center justify-between mt-4">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>

      {/* Buttons */}
      <div className="h-10 bg-gray-300 rounded mt-5"></div>
      <div className="h-10 bg-gray-200 rounded mt-3"></div>
    </div>
  );
}
