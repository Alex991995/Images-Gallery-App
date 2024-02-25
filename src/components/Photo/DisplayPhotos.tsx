import { getPhotos } from "@/services/getResponse"
import CardPhoto from "./CardPhoto"

interface objParamsProps {
  objParams:{
    query:string,
    order:string,
    page:string
    perPage:string
  }
}

export default async function DisplayPhotos({objParams}:objParamsProps ) {
  const {query,order, page, perPage  } = objParams
  const data = await getPhotos(query, order, page, perPage)
  // console.log(data)
  return (
    <ul className="list-photos grid-cols-gallery flex-1"> 
        {data?.results?.map(item => (
          <CardPhoto key={item.id} item={item}/>
        ))}
      </ul>
  )
}
