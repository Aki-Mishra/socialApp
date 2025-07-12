import HomeIcon from "../icons/HomeIcon"
import LoginIcon from "../icons/LoginIcon"
import PeopleIcon from "../icons/PeopleIcon"
import PlusCircleIcon from "../icons/PlusCircleIcon"
import MobileMenu from "./MobileMenu"
import Link from "next/link"
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="flex h-24 items-center justify-between w-full bg-[#151A29] px-4 text-white">
      {/* left */}
      <div className="block md:hidden">Be Social</div>
      {/* center */}
      <div className="hidden md:flex gap-6 ">
        <Link href="/" className="flex flex-row items-center gap-2  ">
          <HomeIcon height={18} width={18} />
          Home
        </Link>
        <Link href="/" className="flex flex-row  items-center gap-2">
          <PeopleIcon height={18} width={18} />
          Friends
        </Link>
        <Link href="/" className="flex flex-row items-center gap-2">
          <PlusCircleIcon height={18} width={18} />
          Story
        </Link>

      </div>
      {/* right */}
      <div className="">
        <MobileMenu />
        <div className="hidden md:flex lg:flex items-center gap-2">
          <LoginIcon height={18} width={18} />
          <SignedOut>
            <SignInButton>
              <SignUpButton>
                <Link href="/">
                  <span className=" md:block">Login/SignUp</span>
                </Link>
              </SignUpButton>
            </SignInButton>
          </SignedOut>
        </div>

      </div>
    </div>
  )
}

export default Navbar