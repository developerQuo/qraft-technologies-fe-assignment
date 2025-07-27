export default function Error() {
  return (
    <div className="flex-1 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            오류 발생
          </h2>
          <p className="text-gray-600">
            데이터를 불러오는 중 오류가 발생했습니다.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            잠시 후 다시 시도해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
