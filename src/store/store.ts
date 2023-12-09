import  {create} from 'zustand';
import {persist, devtools} from 'zustand/middleware';

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


type PageType = {
  page: number,
  wholePage: number,
  nextPage: () => void,
// previousPage
  resetPage:() => void
};


export const usePage =create<PageType>()( (set, get) =>({
  page: 1,
  wholePage: 200,

  nextPage:() => {
    const res = get().page === get().wholePage ? 1 : ++get().page
    set({page:res}  )
  },

  // previousPage

  resetPage:() => {
    set({page:1})
  }

}));