import Link from "next/link"

const navbar = () => {
  return (<>
    <div className="flex gap-2 m-3 fixed items-center">
      <Link href={'/'}> Home </Link>
      <Link href={'/'}> About Us</Link>
      <Link href={'/'}> Projects</Link>
    </div>
  </>)
}

export default navbar
