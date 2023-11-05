import CollectionPhotos from "@/components/CollectionPhotos";
import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";

export default async  function Home() {
  const session = await getServerSession(authConfig)
  return (
    <>
      <CollectionPhotos user={session?.user}/>
    </>
  )
}

