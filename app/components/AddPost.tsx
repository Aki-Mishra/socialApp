import Image from 'next/image'

const AddPost = () => {
    return (
        <div className="bg-[#292548] shadow-[0_2px_6px_rgba(0,240,255,0.15)] flex gap-4 text-sm  p-4 rounded-md my-5">
            {/* Avatar */}
            <div className="">
                <Image alt='' height={58} width={58} src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg" className='h-[58px] w-[58px] object-cover rounded-full'>

                </Image>
            </div>
            {/* Post */}
            <div className='flex flex-col gap-2 flex-1'>
                {/* text-Content */}
                <div className='flex flex-1'>
                    <textarea name="" id="" className='bg-[#3A355A] text-white outline-none flex-1 p-3 text-sm rounded-md  '></textarea>
                    <Image alt="" src="/images/emoji.png" height={35} width={35} className='h-[35px] w-[35px] self-end'></Image>
                </div>
                {/* post-option */}
                <div className=' text-[#fff] text-sm flex gap-3 flex-wrap'>
                    <div className="flex gap-1 items-center">
                        <Image alt='' src="/images/gallery.png" height={20} width={20} className='h-[16px] w-[16px]'></Image>
                        <p className='text-sm'>Add Photo</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image alt='' src="/images/video-posting.png" height={20} width={20} className='h-[16px] w-[16px]'></Image>
                        <p className='text-sm'>Add Video</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image alt='' src="/images/calendar.png" height={20} width={20} className='h-[16px] w-[16px]'></Image>
                        <p className='text-sm'>Events</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image alt='' src="/images/polling.png" height={20} width={20} className='h-[16px] w-[16px]'></Image>
                        <p className='text-sm'>Poll</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddPost