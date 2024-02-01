import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";

import InputField from "@/components/InputField";
import CardPhoto from "@/components/CardPhoto";
import SelectOrder from "@/components/SelectOrder";
import SelectValue from "@/components/SelectValue";
import Pagination from "@/components/Pagination";

import { getPhotos } from "@/services/getResponse";

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

  const query = searchParams.query || 'food';
  const order = searchParams.order_by;
  const page = searchParams.page || '1';

  const data = await getPhotos(query, order, page)

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

      <ul className="list-photos grid-cols-gallery"> 
        {data?.results?.map(item => (
          <CardPhoto key={item.id} item={item}/>
        ))}
      </ul>
     
    </section>
  )
}

