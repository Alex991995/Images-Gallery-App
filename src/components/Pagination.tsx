"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Pagination() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  // The API has only 200 pages
  const wholePage = 200

  function nextPage() {
    const params = new URLSearchParams(searchParams)
    let currentPage = Number(searchParams.get('page')) || 1
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
    let currentPage = Number(searchParams.get('page')) || 1
    if(currentPage){
      if(currentPage === 1) currentPage = 200
      else --currentPage
      params.set('page', String(currentPage))
    } 
    else params.delete('page')
    replace(`${pathname}?${params.toString()}`)
  }
  
  return (
    <div className="flex justify-center mb-4">
      <button className="button mr-3" onClick={previousPage}>Previous</button>
      <button className="button" onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pagination;