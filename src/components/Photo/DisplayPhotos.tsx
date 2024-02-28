import { getPhotos } from "@/services/getResponse"
import CardPhoto from "./CardPhoto"

interface objParamsProps {
  objParams:{
    query:string,
    order:string,
    page:string
  }
}

export default async function DisplayPhotos({objParams}:objParamsProps ) {
  const { query,order, page } = objParams
  const data = await getPhotos(query, order, page)
  
  return (
    <ul className="list-photos grid-cols-gallery flex-1"> 
        {data?.results?.map(item => (
          <CardPhoto key={item.id} item={item}/>
        ))}
      </ul>
  )
}
