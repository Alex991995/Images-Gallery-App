import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { RxCross1 } from "react-icons/rx";

interface IModalImageProps {
  img: string,
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>
}

function ModalImage({img, active, setActive}:IModalImageProps) {
  return (
    <div 
      onClick={() => setActive(false)}
      className=' fixed inset-0 bg-black/40  backdrop-blur-sm flex justify-center items-center z-10'>
      <div 
        className='p-3 rounded-md relative '
        onClick={e => e.stopPropagation()}>
        <Image 
          className=''
          src={img}
          alt='img'
          width={600}
          height={300}
        />
        <RxCross1 
          onClick={ () => setActive(false)}
          className='absolute text-white text-3xl	top-[10%] right-9 hover:text-yellow-500'
        />
      </div>
    </div>
  )
}

export default ModalImage