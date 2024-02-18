import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";

import InputField from "@/components/InputField";
import SelectOrder from "@/components/SelectOrder";
import SelectValue from "@/components/SelectValue";
import Pagination from "@/components/Pagination";
import DisplayPhotos from "@/components/DisplayPhotos";
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
    <section>
      <InputField />
      <div className="flex justify-between flex-wrap">
        <SelectValue arrValue={arrValue}/>
        <SelectOrder  arrOrder={arrOrder} />
      </div>
      <Pagination />
      <Suspense  fallback={<span className="loading loading-bars loading-lg absolute top-1/2 left-1/2"></span>}> 
        <DisplayPhotos objParams={objParams}/>   
      </Suspense>
    </section>
  )
}

