import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";

import InputField from "@/components/InputField";
import SelectOrder from "@/components/Select/SelectOrder";
import SelectValue from "@/components/Select/SelectValue";
import Pagination from "@/components/Pagination";
import DisplayPhotos from "@/components/Photo/DisplayPhotos";
import { Suspense } from "react"

export type  PageProps = {
  searchParams: {
    page: string,
    query: string,
    order_by: string
  }
}

export default async function Home({searchParams}:PageProps ) {
  const session = await getServerSession(authConfig);
  const BASE_URL = process.env.BASE_URL

  const objParams = {
    query: searchParams.query || 'food',
    order: searchParams.order_by,
    page: searchParams.page || '1',
  }

  const arrValue = ["nature", "food", "office", "cities", "space"];
  const arrOrder = ["relevant", "latest"];

  return (
    <section className="flex flex-col">
      <Suspense>
        <InputField />
      </Suspense>
      
      <div className="flex justify-between flex-wrap">
        <SelectValue arrValue={arrValue}/>
        <SelectOrder  arrOrder={arrOrder} />
      </div>
      
      <Suspense  fallback={<span className="loading loading-bars loading-lg absolute top-1/2 left-1/2"></span>}> 
        <DisplayPhotos objParams={objParams}/>   
      </Suspense>
      <Pagination />
    </section>
  )
}

