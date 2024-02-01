"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SelectProps  = {
  arrValue: string[]
} 

function SelectValue({arrValue}:SelectProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace} = useRouter()

  const currentQuery = searchParams.get("query")

  function handelSelectValue(value:string) {
    const params = new URLSearchParams(searchParams)
    if(currentQuery !== value){
      params.set('page', '1')
      params.set("query", value);
      
    }
    else if(currentQuery == value) {
      params.set("query", value)
    }
    else params.delete("query")
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select size={arrValue.length-1}  defaultValue={searchParams.get('query')?.toString()} onChange={(event) => handelSelectValue(event.target.value)}
      className="overflow-hidden table-row outline-none h-[50px] border-spacing-x-1.5 mt-4">
      {arrValue.map((item, index) => (
        <option className="table-cell px-3 py-2 border border-slate-500 rounded-md" key={index}>{item}</option>
      ))}
    </select>
  );
}

export default SelectValue;