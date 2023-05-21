import Link from "next/link"
export default function NavLayout(){
    return (
        <nav>
        <Link legacyBehavior href=''><a href="">Home</a></Link>
        <Link legacyBehavior href='about'><a href="">About</a></Link>
        <Link legacyBehavior href='contact'><a href="">Contact</a></Link>
        <Link legacyBehavior href='dashboard'><a href="">Dashboard</a></Link>
        </nav>
    )
}
  