import  { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

type PhotosType = {
  photos: string[],
  addPhotos: (photo:string) => void,
  removePhotos:(photo:string) => void
}

export const usePhotos = create<PhotosType>()(
  persist(devtools((set,get) => ({
    photos: [],
    addPhotos:(photo:string) => {
      const isExist = get().photos.find(item => item === photo)
      if(!isExist) { 
        set( {photos: [...get().photos, photo ] })
      }
    },
    removePhotos:(photo:string) => {
      const newPhotos = get().photos.filter(item => item !== photo)
      set( {photos: newPhotos})
    }
  })),
  {name: "photo-storage"}
));
