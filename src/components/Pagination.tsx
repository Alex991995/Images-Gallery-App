"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"



function Pagination() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [page, setPage] = useState(1)
  const wholePage = 200

  function nextPage() {
    if(page === wholePage) setPage(1) 
    else setPage( p => p + 1)
  }

  function previousPage() {
    if(page === 1) setPage(wholePage)
    else  setPage( p => p - 1)
  }

  useEffect( ()=> {
    const param = new URLSearchParams(searchParams)
    if(page) param.set("page", String(page))
    else param.delete("page")
    replace(`${pathname}?${param.toString()}`)
    console.log('pagi')
  },[page, searchParams, replace, pathname])
    

  

  return (
    <div className="flex justify-center mb-4">
      <button className="button mr-3" onClick={previousPage}>Previous</button>
      <button className="button" onClick={nextPage}>Next</button>
    </div>
  );
}

export default Pagination;