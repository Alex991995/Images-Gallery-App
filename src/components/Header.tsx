import Link from "next/link";
import Navigation from "./Navigation";

const navItems = [
  {label: "Home", href: "/"},
  
]

export default  function Header() {
  return (
    <header className="bg-slate-500 p-4 flex justify-center text-white [&>*]:px-4">
      <Navigation navLinks={navItems} />
    </header>
  );
}

