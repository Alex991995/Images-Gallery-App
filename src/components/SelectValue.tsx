"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {useEffect, useState } from 'react'

type SelectProps  = {
  arrValue: string[]
} 

function SelectValue({arrValue}:SelectProps) {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace} = useRouter()
  const [value, setValue] = useState('') 

  useEffect( ()=> {
    const params = new URLSearchParams(searchParams)
    if(value) params.set("query", value)
    else params.delete("query", value)
    replace(`${pathname}?${params.toString()}`)
  },[pathname, replace, value, searchParams])

  return (
    <select size={arrValue.length-1} value={value} onChange={(event) => setValue(event.target.value)}
      className="overflow-hidden table-row outline-none h-[50px] border-spacing-x-1.5 mt-4">
      {arrValue.map((item, index) => (
        <option className="table-cell px-3 py-2 border border-slate-500 rounded-md" key={index}>{item}</option>
      ))}
    </select>
  );
}

export default SelectValue;