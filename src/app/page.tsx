import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";
import InputField from "@/components/InputField";
import CardPhoto from "@/components/CardPhoto";
import { Root } from "@/types/responseListPhotos";
import SelectOrder from "@/components/SelectOrder";
import SelectValue from "@/components/SelectValue";
import Pagination from "@/components/Pagination";


type PageProps = {
  searchParams: {
    page: string,
    query: string,
    order_by: string
  }
}

export default async function Home({searchParams}:PageProps ) {
  const session = await getServerSession(authConfig);
  const BASE_URL = process.env.BASE_URL

  const query = searchParams.query;
  const order= searchParams.order_by;
  const page = searchParams.page;

  // console.log(page)

  const res = await fetch(`${BASE_URL}/api/search?query=${query}&order_by=${order}&page=${page}`)
  const data:Root = await res.json();

  if(data.errors) {
    throw new Error(data.errors);
  }

  const arrValue = ["nature", "food", "office", "cities", "space"];
  const arrOrder = ["relevant", "latest"];

  return (
    <section>
      <InputField data={data}/>
      <div className="flex justify-between flex-wrap">
        <SelectValue arrValue={arrValue}/>
        <SelectOrder  arrOrder={arrOrder} />
      </div>
      <ul className="list-photos grid-cols-gallery"> 
        {data?.results?.map(item => (
          <CardPhoto key={item.id} item={item}/>
        ))}
      </ul>
      <Pagination />
    </section>
  )
}

