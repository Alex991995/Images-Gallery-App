import { Root } from "@/types/responseListPhotos";

export async function getPhotos(query:string, order:string, page:string, perPage:string) {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&order_by=${order}&page=${page}&per_page=${perPage}&client_id=${process.env.CLIENT_ID}`)
  if(!response.ok) throw new Error('Failed to fetch data')
  const data:Root = await response.json()
  return data
}