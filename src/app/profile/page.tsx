import ListofFavorites from "@/components/ListofFavorites";
import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";
import Image from "next/image";


async function Profile() {
  const session = await getServerSession(authConfig) 
  return (
    <section>
      <h1> Profile of {session?.user?.name}</h1>
      <Image src={session?.user?.image!} alt="image-user"
      width={150}
      height={150}/>

      <ListofFavorites />
    </section>
  );
}

export default Profile;