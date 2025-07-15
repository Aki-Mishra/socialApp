import Image from "next/image";
import LeftMenu from "./components/LeftMenu";
import Stories from "./components/Stories";
import RightMenu from "./components/RightMenu";
import AddPost from "./components/AddPost";
import Feed from "./components/feed";

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block xl:w-[20%]">
        <LeftMenu></LeftMenu>
      </div>
      <div className="w-[100%] sm:w-[100%] lg:w-[70%] xl:w-[50%]">
        <Stories></Stories>
        <AddPost></AddPost>
        <Feed></Feed>
      </div>
      <div className="hidden lg:block lg:w-[30%]">
        <RightMenu>

        </RightMenu>
      </div>
    </div>
  );
}
