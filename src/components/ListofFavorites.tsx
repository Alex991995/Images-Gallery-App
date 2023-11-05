"use client"

import { usePhotos } from "@/store/store";

function ListofFavorites() {
  const photos = usePhotos(state => state.photos)

  console.log(photos)
  return (
    <div>
      
    </div>
  );
}

export default ListofFavorites;