import Menu from "./menu";
import { Videos } from "./videos";

export default function Content({
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
    <div className="md:w-[82%] w-full grow md:pt-31 pt-20 md:ml-[18%] ml-0 ">
      <Menu />
      <div className="grid md:grid-cols-3 gap-4 px-3">
        {Array.from({ length: 5 }, (el, index) => {
          return <Videos videos={videos} key={index} />;
        })}
      </div>
    </div>
  );
}
