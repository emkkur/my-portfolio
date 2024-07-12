/**
 * 
 * @param pageHeight Height of the page in vh
 * @param total Height of entire div in vh
 * @returns percentage of the page
 */
function getPagePercentages(totalHeight: number, pageHeightArray: number[]): number[] {
  return pageHeightArray.map((height) => height / totalHeight);
}

export {
  getPagePercentages
};