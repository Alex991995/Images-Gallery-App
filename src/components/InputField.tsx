"use client"

import { usePage } from "@/store/store";
import { useSearchParams, usePathname, useRouter  } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";


export default  function InputField() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace} = useRouter()

  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const {resetPage } = usePage(({resetPage}) => ({resetPage}))
 
  const ref = useRef("")

  // function f() {
  //   console.log('fsdws')
  // }
  // console.log(debouncedValue)
  // EFFECT: Change param

  useEffect( () => { 
    const params = new URLSearchParams(searchParams)
    if(debouncedValue){
      params.set("query", debouncedValue); 
      resetPage()
    } 
    else params.delete("query")
    replace(`${pathname}?${params.toString()}`)
    ref.current = ""
  },[debouncedValue, pathname, replace, searchParams, resetPage])



    // EFFECT: Debounce Input Value
  useEffect( () => {
    const timer = setTimeout( ()=> {
      setDebouncedValue(value)
      ref.current = value
    }, 500)
  
    return () => {
      clearTimeout(timer)
    }
  }, [value])

 


  return (
  <>
  
    <input
    value={ref.current ?? value}
    onChange={e => setValue(e.target.value)}
    type="text" 
    placeholder="Type here" 
    className="input input-bordered input-info w-full max-w-xs block p-3 m-auto mt-3" />
 
  </>
  );
}

