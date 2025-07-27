export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-gray-600 text-lg">데이터를 불러오고 있습니다...</p>
      </div>
    </div>
  );
}
