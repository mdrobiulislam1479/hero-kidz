export default function ProductsDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image Placeholder */}
          <div className="space-y-4">
            <div className="w-full h-96 md:h-full bg-gray-300 rounded-lg animate-pulse" />
          </div>

          {/* Right: Content Placeholder */}
          <div className="space-y-6">
            {/* Title */}
            <div className="h-10 bg-gray-300 rounded w-4/5 animate-pulse" />

            {/* Rating */}
            <div className="h-5 bg-gray-300 rounded w-40 animate-pulse" />

            {/* Price */}
            <div className="flex gap-4 items-center">
              <div className="h-12 bg-gray-300 rounded w-32 animate-pulse" />
              <div className="h-8 bg-gray-300 rounded w-24 animate-pulse" />
            </div>

            {/* Add to Cart Button */}
            <div className="w-full h-14 bg-gray-300 rounded animate-pulse" />

            {/* Description */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded animate-pulse" />
              <div className="h-4 bg-gray-300 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-300 rounded w-11/12 animate-pulse" />
              <div className="h-4 bg-gray-300 rounded w-10/12 animate-pulse" />
              <div className="h-4 bg-gray-300 rounded w-9/12 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
