import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";
import InputField from "@/components/InputField";
import CardPhoto from "@/components/CardPhoto";
import { Root } from "@/types/responseListPhotos";
import SelectOrder from "@/components/SelectOrder";
import SelectValue from "@/components/SelectValue";


type PageProps = {
  searchParams: {
    page: number,
    query: string,
    order_by: string
  }
}

export default async function Home({searchParams}:PageProps ) {
  const session = await getServerSession(authConfig);
  const BASE_URL = process.env.BASE_URL

  const query = searchParams.query;
  const order= searchParams.order_by;

  const res = await fetch(`${BASE_URL}/api/search?query=${query}&order_by=${order}`)
  const data:Root = await res.json();

  const arrValue = ["nature", "food", "office", "cities", "space"];
  const arrOrder = ["relevant", "latest"];

  // const page = searchParams.page;

  // console.log(res)
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
    </section>
  )
}

