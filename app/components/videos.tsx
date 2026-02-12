import Image from "next/image";

export function Videos({
  videos,
}: {
  videos: {
    title: string;
    channel: string;
    subs: string;
    thumbnail: string;
    channelThumbnail: string;
    views: string;
    likes: string;
    time: string;
    desc: string;
  }[];
}) {
  return (
    <>
      {videos.map((vid, index) => {
        return (
          <div key={index}>
            <Image
              src={vid.thumbnail}
              alt="x"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full rounded-xl"
            />
            <div className="mt-4 flex space-x-3 justify-between">
              <Image
                src={vid.channelThumbnail}
                alt="x"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-medium line-clamp-2">{vid.title}</p>
                <div className="flex space-x-0.5 text-gray-400">
                  {vid.channel}
                </div>
                <div className="flex space-x-3 text-zinc-500">
                  <p>{vid.views}.</p>
                  <p>{vid.time} ago</p>
                </div>
              </div>

              {/* <MdOutlineMoreVert className="w-7 h-7 flex-none" /> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
