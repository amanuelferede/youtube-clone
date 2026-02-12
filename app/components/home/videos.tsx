import VideoItem from "./videoitem";

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
        return <VideoItem video={vid} key={index} index={index} />;
      })}
    </>
  );
}
