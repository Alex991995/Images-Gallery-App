import { Root } from "postcss"

// export  const fetcher = (url:string) => fetch(url).then(res => res.json())
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

export const  fetcher =  (page:number):Promise<Root> => fetch(`https://api.unsplash.com/search/photos?page=${page}&client_id=${CLIENT_ID}`).then(res => res.json())