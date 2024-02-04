"use client"
import Image from "next/image";
import { Result } from "@/types/responseListPhotos";
import { useSession } from "next-auth/react";
import { usePhotos } from "@/store/store";
import { MdOutlineFavoriteBorder }  from "react-icons/md"

type ResultProps = {
  item: Result
}

function CardPhoto({item}:ResultProps) {
  const session = useSession()
  const {addPhotos, photos} = usePhotos()
  
  return (
    <li key={item.id} className="wrapper-image">
      <Image src={item.urls.regular}  
      fill={true}  
      alt="gallery-photo" 
      className="image"  
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      {session.data?.user && <span className="right-1 absolute" onClick={ () => addPhotos(item.urls.regular)}>
        <MdOutlineFavoriteBorder  style={{ color:`${photos.includes(item.urls.regular) ? "red" : "white"} `, fontSize: "30px"}}/>
      </span>}
    </li>
  );
}

export default CardPhoto;