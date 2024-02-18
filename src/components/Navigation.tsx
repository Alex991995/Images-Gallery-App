"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react"

type Props = {
  navLinks: NavLink[]
}

type NavLink ={
  label: string,
  href: string
}

function Navigation({navLinks}:Props) {
  const pathname = usePathname()
  const session = useSession()

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href
        return (
          <Link key={link.label} href={link.href} className={isActive ? "text-yellow-200" : ""}> 
            {link.label}
          </Link>
        )
      })}
      {session.data?.user && <Link href="/profile">Profile</Link>}
      {session.data?.user ? 
      <Link href="#" onClick={() => signOut({callbackUrl: "/"})} 
      className="text-orange-200 hover:text-orange-300">Sign out</Link> :
      <Link href="/api/auth/signin" className="text-orange-200 hover:text-orange-300">Sign in</Link>} 
    </>
  );
}

export default Navigation;