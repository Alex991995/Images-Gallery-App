"use client"

import { useSearchParams, usePathname, useRouter  } from "next/navigation";
import { useDebounce } from 'use-debounce';
import { useCallback, useEffect, useState } from "react";

export default  function InputField() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const currentQuery = searchParams.get("query") || ''

  const [value, setValue] = useState(currentQuery) 
  const [debounced] = useDebounce(value, 600)
  
  const handelSearch = useCallback((debounced:string) => {
    const params = new URLSearchParams(searchParams)
    if(currentQuery !== debounced){
      params.set("page", "1"); 
      params.set("query", debounced);
    }
    else if(currentQuery == debounced)params.set("query", debounced); 
    else params.delete("query")
    replace(`${pathname}?${params.toString()}`)
  }, [currentQuery, pathname, replace, searchParams])  

  // it adds to input a current query params
  useEffect( ()=> {
    setValue(currentQuery)
  },[currentQuery])

  useEffect( ()=> {
    handelSearch(debounced)
  },[debounced, handelSearch])

  return (
  <>
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      type="text" 
      placeholder="Type here" 
      className="input input-bordered input-info w-full max-w-xs block p-3 m-auto mt-3" />  
  </>
  );
}

