import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return ( 
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center h-50vh">
  <SignIn />  
    </div>
)
}