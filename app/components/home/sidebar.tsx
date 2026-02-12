import Image from "next/image";

export default function SideBar({
  subs,
}: {
  subs: {
    name: string;
    image: string;
  }[];
}) {
  return (
    <div className="w-[18%] md:block hidden  min-h-screen  overflow-y-auto fixed top-0 left-0 bottom-0 mt-15 z-40">
      <div
        className="h-full overflow-auto pl-3 pr-4 [&::-webkit-scrollbar]:w-0
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-black/40
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <p className="text-lg mb-2.5 pl-4">Subscriptions</p>
        <div className="flex flex-col space-y-2">
          {subs.map((sub, index) => {
            return (
              <div
                key={index}
                className="px-3 py-2.5 rounded-lg flex space-x-2 hover:bg-gray-200"
              >
                <Image
                  src={sub.image}
                  alt="x"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-6 h-6 rounded-full"
                />
                <p className="line-clamp-1 text-[0.94rem]">{sub.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
