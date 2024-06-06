import { useMemo } from 'react'

//www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

export const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1

  /*
    Create an array of certain length and set the elements within it from start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}

type PaginationParams = {
  currentPage: number
  pageSize: number | undefined
  siblingCount: number
  totalCount: number | undefined
}
/**
 @param {Object} props - The props object.
 @param {number} props.totalCount - The total number of pages.
 @param {number} props.currentPage - The current page.
 @param {number} [props.siblingCount=1] - The number of siblings (pages) to display on each side of the current page.
 @param {number} [props.pageSize] - represents the maximum data that is visible in a single page.
 @returns {Array} An array of pagination elements.
 */

export const usePagination = ({
  currentPage = 1,
  pageSize = 1,
  siblingCount = 1,
  totalCount = 1,
}: PaginationParams): ('...' | number)[] => {
  return useMemo(() => {
    // As a first step, we shall go about calculating the total pages from totalCount and pageSize  as follows:
    const totalPageCount = Math.ceil(totalCount)
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
     Case 1:
     If the number of pages is less than the page numbers we want to show in our
     paginationComponent, we return the range [1..totalPageCount]
   */

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
     Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /*
    We do not show dots just when there is just one page number to be inserted between the extremes
    of sibling and the page limits i.e 1 and totalPageCount.
    Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
      Case 2: No left dots to show, but rights dots to be shown
     */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
      Case 3: No right dots to show, but left dots to be shown
    */

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
         Case 4: Both left and right dots to be shown
     */

    const middleRange = range(leftSiblingIndex, rightSiblingIndex)

    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
  }, [totalCount, siblingCount, currentPage, pageSize])
}