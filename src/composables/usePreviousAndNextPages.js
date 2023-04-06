export function getNextPage(currentPage, maxPage) {
  if (currentPage + 1 === maxPage) return undefined;
  return currentPage + 1;
}

export function getPreviousPage(currentPage) {
  if (currentPage - 1 <= 0) return undefined;
  return currentPage - 1;
}
