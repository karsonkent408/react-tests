export const ProjectDetailSkeleton = () => {
    return (
      <div className="animate-pulse max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-8">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="flex gap-3">
            <div className="h-10 w-20 bg-gray-200 rounded"></div>
            <div className="h-10 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="space-y-4">
          <div className="h-24 bg-gray-200 rounded w-full"></div>
          <div className="h-24 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  };