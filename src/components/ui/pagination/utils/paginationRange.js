function range(start, end, step = 1) {
  const length = Math.max(Math.ceil((end - start) / step), 0)
  const numbers = Array(length)

  for (let i = 0; i < length; i++) {
    numbers[i] = start
    start += step
  }

  return numbers
}

export const paginationRange = (totalPage, page, limit, siblings) => {
  const totalPageNoInArray = 7 + siblings

  if (totalPageNoInArray >= totalPage) {
    return range(1, totalPage + 1)
  }
  const leftSiblingsIndex = Math.max(page - siblings, 1)
  const rightSiblingsIndex = Math.min(page - siblings, totalPage)

  const showLeftDots = leftSiblingsIndex > 2
  const showRightDots = rightSiblingsIndex < totalPage - 2

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * siblings
    const leftRange = range(1, leftItemsCount + 1)

    return [...leftRange, ' ...', totalPage]
  } else if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * siblings
    const rightRange = range(totalPage - rightItemsCount + 1, totalPage + 1)

    return [1, '... ', ...rightRange]
  } else {
    const middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1)

    return [1, '... ', ...middleRange, ' ...', totalPage]
  }
}
