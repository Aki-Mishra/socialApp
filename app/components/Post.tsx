import Image from "next/image"
import ThreeDotsIcon from "../icons/ThreeDots"
const Post = () => {
    return (
        <div className="flex flex-col text-white gap-4 ">
            {/* user div */}
            <div className="flex  justify-between items-center">
                < div className=" flex gap-2 items-center">
                    <Image src="https://images.pexels.com/photos/2455268/pexels-photo-2455268.jpeg" height={24} width={24} alt="" className="rounded-full Object-cover w-[24px] h-[24px]"></Image>
                    <p className="text-sm">Abdul</p>
                </div>
                <div className="">
                    <ThreeDotsIcon height={20} width={20} />
                </div>
            </div>
            {/* post div */}
            <div className="flex flex-col gap-4">
                {/* Post Image */}
                <div className="w-full min-h-84 relative">
                    <Image alt="" src="https://images.pexels.com/photos/28055673/pexels-photo-28055673.jpeg" fill className="object-cover rounded-md "></Image>
                </div>
                {/* description div */}
                <p className="text-[#C9B6E4]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae veritatis laboriosam perspiciatis unde nam dolor architecto blanditiis expedita modi placeat? Atque deleniti, expedita laudantium adipisci dolorum molestias ut, voluptatem distinctio eius debitis animi facere nesciunt ea nostrum ducimus architecto quas. Repudiandae, temporibus nulla dolorem recusandae natus est eum eaque eveniet?</p>
            </div>
            {/* Interaction div */}
            <div className="flex items-center justify-between ">
                <div className=""></div>
                <div className=""></div>
            </div>

        </div>
    )
}

export default Post