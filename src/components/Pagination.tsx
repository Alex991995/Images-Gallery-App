"use client"
import { range, pagesCutting } from "@/helpers/functionHelpers"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


function Pagination({perPage}:{perPage:string}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  // The API has only 200 pages
  const wholePage = 20

  let currentPage = Number(searchParams.get('page')) || 1
  const getPagesCut = pagesCutting(wholePage, currentPage)
  const numberPages = range(getPagesCut.start, getPagesCut.end)

  function nextPage() {
    const params = new URLSearchParams(searchParams)
    if(currentPage){
      if(currentPage === wholePage) currentPage = 1
      else ++currentPage
      params.set('page', String(currentPage))
    } 
    else params.delete('page')
    replace(`${pathname}?${params.toString()}`)
  }

  function previousPage() {
    const params = new URLSearchParams(searchParams)
    if(currentPage){
      if(currentPage === 1) currentPage = 200
      else --currentPage
      params.set('page', String(currentPage))
    } 
    else params.delete('page')
    replace(`${pathname}?${params.toString()}`)
  }

  function fetchSpecificPage(page:number) {
    const params = new URLSearchParams(searchParams)
    params.set('page', String(page))
    replace(`${pathname}?${params.toString()}`)
  }
  
  return (
    <div className="flex justify-center mb-4 gap-1 join ">
      <button className="join-item btn" onClick={previousPage}>«</button>
      {numberPages.map(page =>(
        <button 
          key={page} 
          className={`join-item btn ${currentPage === page ? "bg-green-500" : ""}`} 
          onClick={() => fetchSpecificPage(page)}>{page}</button>
      ))}
      <button className="join-item btn" onClick={nextPage}>»</button>
    </div>
  );
}

export default Pagination;