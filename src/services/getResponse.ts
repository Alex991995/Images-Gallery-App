import axios from "axios";
import { Root } from "@/types/responseListPhotos";

const CLIENT_ID = "0yd4JlUlsULT7DoO7ISN3OA0fslGsvNWlVq4UHZxHb4";

export async function getData(page:number):Promise<Root> {
  const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${CLIENT_ID}`)
  return response.data 

}

// export async function pagingData(page:number):Promise<any> {
//   const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${CLIENT_ID}`)
//   console.log("2")
//   return response.data
// }