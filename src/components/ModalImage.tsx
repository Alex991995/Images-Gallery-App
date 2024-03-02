import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { RxCross1 } from "react-icons/rx";

interface IModalImageProps {
  img: string,
  setActive: Dispatch<SetStateAction<boolean>>
}

function ModalImage({img, setActive}:IModalImageProps) {
  return (
    <div 
      onClick={() => setActive(false)}
      className="modal-image">
      <div 
        className='relative overflow-hidden rounded-md' 
        onClick={e => e.stopPropagation()}>
        <Image 
          className=''
          src={img}
          alt='img'
          width={500}
          height={300}
        />
        <RxCross1 
          onClick={ () => setActive(false)}
          className='absolute text-white text-3xl	top-[4%] right-9 hover:text-yellow-500'
        />
      </div>
    </div>
  )
}

export default ModalImage