// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import useSWR from "swr"
// import { Root } from "@/types/responseListPhotos";
// import { fetcher } from "@/helper/fetcher";
// import { usePhotos } from "@/store/store";
// import { MdOutlineFavoriteBorder }  from "react-icons/md"
// import Loader from "./Loader";
// import InputField from "./InputField";

// type userProps = {
//   user: {
//     name?: string | null | undefined;
//     email?: string | null | undefined;
//     image?: string | null | undefined;
//   } | undefined
// }

// export default  function CollectionPhotos({user}:userProps) {
//   const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
//   console.log(CLIENT_ID)
//   const arrValue = ["nature", "food", "office", "cities", "space"]
//   const arrOrder = ["relevant", "latest"]

//   const {addPhotos, photos} = usePhotos()

//   const [value, setValue] = useState("office")
//   const [page, setPage] = useState(1)
//   const [order, setOrder] = useState("relevant")

//   const { data } = useSWR(page, fetcher)
//   const numberPages = 200
//   //  I use this number of pages, because i am not allowed using all pages from unsplash api

//   function nextPage() {
//     if(page === numberPages) setPage(1) 
//     else setPage( p => p + 1)
//   }

//   function previousPage() {
//     if(page === 1) setPage(numberPages)
//     else  setPage( p => p - 1)
//   }

//   return (
//     <>
//     <InputField value={value} setValue={setValue}/>
//     <div className="flex justify-between flex-wrap">

//       <select size={arrValue.length-1} value={value} onChange={(event) => setValue(event.target.value)}
//       className="overflow-hidden table-row outline-none h-[50px] border-spacing-x-1.5 mt-4">
//         {arrValue.map((item, index) => (
//           <option className="table-cell px-3 py-2 border border-slate-500 rounded-md" key={index}>{item}</option>
//         ))}
//       </select>
      
//       <select value={order} onChange={(event) => setOrder(event.target.value)}>
//         {arrOrder.map((item, index) => (
//           <option key={index}>{item}</option>
//         ))}
//       </select>

//     </div>
//     <ul className="list-photos grid-cols-gallery"> 
//     {!data && <Loader /> }
//       {data?.results?.map((item, index = 0) => (
//         <li key={item.id} className="wrapper-image">
//           <Image src={item.urls.regular}  
//           fill={true}  
//           alt="gallery-photo" 
//           className="image"  
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
//           {user && <span className="right-1 absolute" onClick={ () => addPhotos(item.urls.regular)}>
//             <MdOutlineFavoriteBorder  style={{ color:`${photos.includes(item.urls.regular) ? "red" : "white"} `, fontSize: "30px"}}/>
//           </span>}
//         </li>
//       ))}
//     </ul>

//     <div className="flex justify-center mb-4">
//       <button className="button mr-3" onClick={previousPage}>Previous</button>
//       <button className="button" onClick={nextPage}>Next</button>
//     </div>
//     </>
//   )
// }

