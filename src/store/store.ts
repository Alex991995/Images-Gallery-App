import  {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UsePhotos = {
  photos: string[],
  addPhotos: (photo:string) => void
}


export const usePhotos = create<UsePhotos>()(
  persist(set => ({
  photos: [],
  addPhotos:(photo:string) => set( (state) =>  {
  return {photos: [...state.photos, photo] }
  })}),
  {name: "photo-storage", storage: createJSONStorage(() => sessionStorage)}
))