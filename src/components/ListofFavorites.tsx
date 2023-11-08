"use client"
import Image from "next/image";
import { usePhotos } from "@/store/store";
import { AiOutlineClose } from "react-icons/ai";

function ListofFavorites() {
  const photos = usePhotos(state => state.photos)
  const removePhotos = usePhotos(state => state.removePhotos)

  console.log(photos)
  return (
    <ul className="grid grid-cols-gallery gap-4 my-14 min-h-[540px]">
      {photos?.map((img, index) => (
        <li key={index} className="wrapper-image">
          <Image src={img}  
          fill={true}  
          alt="gallery-photo" 
          className="image"  
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          <AiOutlineClose onClick={() => removePhotos(img)} className="right-1 absolute text-white text-3xl"/>
        </li>
      ))}
    </ul>
  );
}

export default ListofFavorites;