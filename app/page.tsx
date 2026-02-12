
import Content from "./components/home/content";
import SideBar from "./components/home/sidebar";
import { subs, videos } from "./libs/faker";

export default function Home() {
  return (
      <div className="flex">
      <SideBar subs={subs} />
      <Content videos={videos} />
    </div>
  );
}
