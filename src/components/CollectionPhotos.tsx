"use client";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr"
import { Root } from "@/types/responseListPhotos";
import { fetcher } from "@/helper/fetcher";
import { usePhotos } from "@/store/store";
import { MdOutlineFavoriteBorder }  from "react-icons/md"

type userProps = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | undefined
}

export default  function CollectionPhotos({user}:userProps) {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID

  const addPhotos = usePhotos(state => state.addPhotos)
  const [page, setPage] = useState(1)
  const { data } = useSWR<Root>(`https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${CLIENT_ID}`, fetcher)
  const numberPages = 200
  //  I use this number of pages, because i am not allowed using all pages from unsplash api

  function nextPage() {
    if(page === numberPages) setPage(1) 
    else setPage( p => p + 1)
  }

  function previousPage() {
    if(page === 1) setPage(numberPages)
    else  setPage( p => p - 1)
  }

  function addToFavotitePhoto(url:string) {
    addPhotos(url)
  }
  return (
    <>
    <ul className="grid grid-cols-gallery gap-4 my-14 min-h-[540px]"> 
      {data?.results?.map(item => (
        <li key={item.id} className="h-64 rounded-xl relative overflow-hidden">
          <Image src={item.urls.regular}  
          fill={true}  
          alt="gallery-photo" 
          className="object-cover hover:opacity-75"  
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          {user && <div className="right-1 absolute" onClick={ () => addToFavotitePhoto(item.urls.regular)}>
            <MdOutlineFavoriteBorder  style={{ color: "white", fontSize: "30px"}}/>
          </div>}
        </li>
      ))}
    </ul>

    <div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
    </>
  )
}

