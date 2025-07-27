export interface PaginationResult<T> {
  items: T[];
  page: {
    current: number;
    next: number;
    total: number;
    hasNext: boolean;
  };
  totalItems: number;
}

export interface PaginationOptions {
  page: number;
  pageSize?: number;
}

export function paginateArray<T>(
  data: T[],
  options: PaginationOptions
): PaginationResult<T> {
  const { page, pageSize = 10 } = options;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const items = data.slice(startIndex, endIndex);

  const hasNext = page < totalPages - 1;
  const nextPage = hasNext ? page + 1 : -1;

  return {
    items,
    page: {
      current: page,
      next: nextPage,
      total: totalPages,
      hasNext,
    },
    totalItems,
  };
}
