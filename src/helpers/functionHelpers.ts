export function range(start:number, end:number) {
  return [...Array(end).keys()].map(el => el + start)
}

export function pagesCutting(wholePage:number, currentPage:number) {
  let pagesCutCount = 5
  const ceiling = Math.ceil(pagesCutCount / 2)
  const floor = Math.floor(pagesCutCount / 2)

  if(currentPage >= 1 && currentPage <= ceiling) {
    return {start: 1, end: pagesCutCount + 1}
  }
  else if (currentPage + floor >= wholePage){
    return  {start: wholePage - pagesCutCount, end: wholePage}
  }
  else {
    return {start: currentPage - ceiling, end:currentPage + floor}
  }
}