import Image from "next/image";


export default function VideoItem({
  video,
  index
}: {
  index: number
  video: {
    title: string;
    channel: string;
    subs: string;
    thumbnail: string;
    channelThumbnail: string;
    views: string;
    likes: string;
    time: string;
    desc: string;
  };
}) {
  return (
    <div className="group relative">
      <Image
        src={video.thumbnail}
        alt="x"
        width={0}
        height={0}
        sizes="100vh"
        className="w-full md:rounded-xl"
      />
      <div className="mt-4 flex space-x-3 justify-between md:mx-0 mx-2">
        <Image
          src={`/videos/${index+1}.jpg`}
          alt="x"
          width={0}
          height={0}
          sizes="100vh"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold line-clamp-2">{video.title}</p>
          <div className="flex space-x-0.5 text-gray-400 text-[0.95rem] ">
            {video.channel}
          </div>
          <div className="flex space-x-3 text-zinc-500">
            <p className="text-[0.95rem]">{video.views} views.</p>
            <p className="text-[0.95rem]">{video.time} ago</p>
          </div>
        </div>

        {/* <MdOutlineMoreVert className="w-7 h-7 flex-none" /> */}
      </div>
      <div className="md:block hidden absolute rounded-xl top-0 left-0  right-0 bottom-0 bg-gray-200 -z-10 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-106 transition-all duration-400 ease-in-out"></div>
    </div>
  );
}
