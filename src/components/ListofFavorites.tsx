"use client"
import Image from "next/image";
import { usePhotos } from "@/store/store";
import { AiOutlineClose } from "react-icons/ai";
import ModalImage from "./ModalImage";
import { useState } from "react";

function ListofFavorites() {
  const photos = usePhotos(state => state.photos)
  const removePhotos = usePhotos(state => state.removePhotos)
  const [active, setActive] = useState(false)
  const [img, setImage] = useState<string | null>(null)

  function activeModal(active:boolean,img:string ) {
    setActive(!active)
    setImage(img)
  }

  return (
    <>
      <ul className="list-photos grid-cols-favorites justify-center">
        {photos.map((img, index) => (
          <li key={index} className="wrapper-image">
            <Image 
              onClick={() => activeModal(active, img)}
              src={img}  
              fill
              alt="gallery-photo" 
              className="image"  
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <AiOutlineClose onClick={() => removePhotos(img)} className="right-1 absolute text-white text-3xl"/>
          </li>
        ))}
      </ul> 

      { active && img &&
      <ModalImage img={img} setActive={setActive}/>
      }
  </>
  );
}

export default ListofFavorites;