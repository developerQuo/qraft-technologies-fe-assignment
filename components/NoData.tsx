export default function NoData() {
  return (
    <div className="flex-1 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            데이터가 없습니다
          </h2>
          <p className="text-gray-600">현재 조건에 맞는 데이터가 없습니다.</p>
          <p className="text-gray-500 text-sm mt-1">
            검색 조건을 변경해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
