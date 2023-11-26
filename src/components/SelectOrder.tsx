"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {useEffect, useState } from 'react'

type SelectProps  = {
  arrOrder: string[]
}

function SelectComponent({arrOrder}:SelectProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace} = useRouter()
  const [value, setValue] = useState('')


  // EFFECT: Change param
  useEffect( () => { 
    const params = new URLSearchParams(searchParams)
    if(value) params.set("order_by", value)
    else params.delete("order_by")
    replace(`${pathname}?${params.toString()}`)
  },[value, pathname, replace, searchParams])


  return (
    <select value={value} onChange={(event) => setValue(event.target.value)}>
        {arrOrder.map((item, index) => (
        <option key={index}>{item}</option> 
      ))}
    </select>
  );
}

export default SelectComponent;