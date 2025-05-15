export const ProjectListSkeleton = () => {
    return (
      <div className="w-full">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-row w-full justify-between items-center border-2 border-gray-300 rounded-md p-4 mb-2 animate-pulse">
            <div className="flex flex-col w-3/4">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="flex flex-row justify-between items-center gap-2 pl-8">
              <div className="bg-gray-200 p-2 w-16 h-10 rounded-md"></div>
              <div className="bg-gray-200 p-2 w-16 h-10 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };