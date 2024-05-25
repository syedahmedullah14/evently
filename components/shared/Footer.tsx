import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row ">
        <Link href='/' >
          <Image className="ml-3"
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="mr-3">2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer