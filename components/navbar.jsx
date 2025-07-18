import Link from "next/link"

const navbar = () => {
  return (<>
    <div className="flex gap-2 m-3 fixed items-center">
      <Link href={'/'}> Home </Link>
      <Link href={'/#aboutUs'}> About Us</Link>
      <Link href={'/#projects'}> Projects</Link>
    </div>
  </>)
}

export default navbar
