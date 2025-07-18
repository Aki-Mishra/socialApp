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
  SignedOut,
  UserButton,
  SignedIn,
  ClerkLoading,
  ClerkLoaded
} from '@clerk/nextjs'
import MessageIcon from "../icons/MessageIcon"
import NotificationIcon from "../icons/NotfiactionsIcon"
import { User } from "@clerk/nextjs/server"
import SearchIcon from "../icons/SearchIcon"

const Navbar = () => {
  return (
    <div className="flex h-24  items-center justify-between w-full bg-[#151A29] px-4 text-white">
      {/* left */}
      <div className="block md:block  w-3/20 lg:block xl:block text-[#FF4FD8] text-xl font-medium cursor-pointer">Be Social</div>
      {/* center */}
      <div className="hidden md:flex gap-6 w-10/20 justify-evenly">
        <Link href="/" className="flex flex-row items-center  ">
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
        <div className=" hidden bg-[#292548] lg:flex xl:flex 2xl:flex items-center p-[5px] rounded-md border-[#00F0FF40] border-1">
          <input type="text"  placeholder="search..." className="border-none outline-none" />
          <SearchIcon height={18} width={18} />
        </div>

      </div>
      {/* right */}
      <div className="w-7/20 flex justify-end">
        <MobileMenu />
        <ClerkLoading>
          <div role="status" className="hidden md:flex lg:flex">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>

          <SignedOut>
            <SignInButton>
              <div className="hidden md:flex lg:flex items-center gap-2">
                <LoginIcon height={18} width={18} />
                <Link href="/sign-in">
                  <span className=" md:block">Login/SignUp</span>
                  <SearchIcon height={18} width={18}/>
                </Link>
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="hidden md:flex lg:flex gap-4 items-center">
              <Link href="" className=""><PeopleIcon height={18} width={18} /></Link>
              <Link href="" className=""><MessageIcon height={18} width={18} /></Link>
              <Link href="" className=""><NotificationIcon height={18} width={18} /></Link>
              <UserButton />
            </div>
          </SignedIn>
        </ClerkLoaded>


      </div>

    </div>
  )
}

export default Navbar