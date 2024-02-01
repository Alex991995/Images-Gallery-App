"use client"

import { useSearchParams, usePathname, useRouter  } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useRef, useState } from "react";

export default  function InputField() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const currentQuery = searchParams.get("query")

  // const [value, setValue] = useState(searchParams.get("query")?.toString())
  
  const handelSearch = useDebouncedCallback((value:string) => {
    const params = new URLSearchParams(searchParams)
    if(currentQuery !== value){
      params.set("page", "1"); 
      params.set("query", value);
    }
    else if(currentQuery == value)params.set("query", value); 
    else params.delete("query")
    // setValue(value)
    replace(`${pathname}?${params.toString()}`)
  }, 300)  

//   useEffect( ()=> {
//     setValue(currentQuery!)
//   },[currentQuery])
// console.log(value)
 
  return (
  <>
    <input
      defaultValue={searchParams.get("query")?.toString()}
      onChange={e => handelSearch(e.target.value)}
      type="text" 
      placeholder="Type here" 
      className="input input-bordered input-info w-full max-w-xs block p-3 m-auto mt-3" />  
</>
  );
}

