import axios from "axios";
import { Root } from "@/types/responseListPhotos";


const CLIENT_ID = "0yd4JlUlsULT7DoO7ISN3OA0fslGsvNWlVq4UHZxHb4";

export async function getData(page:number):Promise<Root> {
  const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${CLIENT_ID}`)
  return response.data 

}

type Props = {
  page:number,
  value: string,
  order:string
}

// export async function pagingData(page:number, value: string, order:string):Promise<Root> {
//   const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${value}&order_by=${order}&client_id=${CLIENT_ID}`)

//   if(!response.ok) throw new Error("unable fetch") 
//   return response.json()
// }
