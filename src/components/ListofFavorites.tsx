"use client"
import Image from "next/image";
import { usePhotos } from "@/store/store";
import { AiOutlineClose } from "react-icons/ai";
import ModalImage from "./ModalImage";
import {Suspense, useState } from "react";

function ListofFavorites() {
  const photos = usePhotos(state => state.photos)
  const removePhotos = usePhotos(state => state.removePhotos)
  const [active, setActive] = useState(false)
 
  return (

    <ul className="list-photos grid-cols-favorites justify-center">
      <Suspense fallback={<span className="loading loading-bars loading-lg absolute top-1/2 left-1/2"></span>}>
      {photos?.map((img, index) => (
        <li key={index} className="wrapper-image">
          <Image 
            onClick={() => setActive(!active)}
            src={img}  
            fill
            alt="gallery-photo" 
            className="image"  
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          <AiOutlineClose onClick={() => removePhotos(img)} className="right-1 absolute text-white text-3xl"/>
          {active &&
          <ModalImage img={img} setActive={setActive}/>}
        </li>
      ))}
       </Suspense>
    </ul>
  );
}

export default ListofFavorites;