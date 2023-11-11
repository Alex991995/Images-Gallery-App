import ListofFavorites from "@/components/ListofFavorites";
import { getServerSession } from "next-auth/next"
import { authConfig } from "@/config/auth";
import Image from "next/image";

async function Profile() {
  const session = await getServerSession(authConfig) 
  return (
    <section>
      <div className="flex justify-center items-center mt-4 flex-col">
        <h1 className="text-3xl mr-3 mb-3"> Profile of {session?.user?.name}</h1>
        <Image src={session?.user?.image!} alt="image-user" className="rounded-3xl"
        width={100}
        height={100}/>
      </div>
      <ListofFavorites />
    </section>
  );
}

export default Profile;