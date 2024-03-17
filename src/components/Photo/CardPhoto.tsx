"use client"
import Image from "next/image";
import { Result } from "@/types/responseListPhotos";
import { useSession } from "next-auth/react";
import { usePhotos } from "@/store/store";
import { MdOutlineFavoriteBorder }  from "react-icons/md"
import ModalImage from "../ModalImage";
import {useState } from "react";

type ResultProps = {
  item: Result
}

function CardPhoto({item}:ResultProps) {
  const [active, setActive] = useState(false)
  const [img, setImage] = useState<string | null>(null)
  const session = useSession()
  const {addPhotos, photos} = usePhotos()
 
  function activeModal(active:boolean,img:string ) {
    setActive(!active)
    setImage(img)
  }
  return (
    <>
     <li key={item.id} className="wrapper-image">
      <Image 
        onClick={() => activeModal(active, item.urls.regular)}
        src={item.urls.regular}  
        fill={true}  
        alt="gallery-photo" 
        className="image"  
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {session.data?.user && 
      <span className="right-1 absolute" onClick={() => addPhotos(item.urls.regular)}>
        <MdOutlineFavoriteBorder  
        style={{ color:`${photos?.includes(item.urls.regular) ? "red" : "white"} `, fontSize: "30px"}}/>
      </span>}
    </li>

    {active && img &&
      <ModalImage img={img} setActive={setActive}/>
    }
    </>
   
  );
}

export default CardPhoto;