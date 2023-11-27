"use client"

import { useSearchParams, usePathname, useRouter  } from "next/navigation";
import { useEffect, useState } from "react";



export default  function InputField({data}:{data:any}) {
  const searchParams = useSearchParams()

  const pathname = usePathname()
  const { replace} = useRouter()

  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState<string>("")

  // EFFECT: Change param
  useEffect( () => { 
    const params = new URLSearchParams(pathname)
    if(debouncedValue) params.set("query", debouncedValue)
    else params.delete("query")
    replace(`${pathname}?${params.toString()}`)
  },[debouncedValue, pathname, replace])

    // EFFECT: Debounce Input Value
  useEffect( () => {
    const timer = setTimeout( ()=> {
      setDebouncedValue(value)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [value])

  console.log(data)

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

