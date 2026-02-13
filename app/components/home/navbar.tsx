import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 bg-white right-0 z-50">
      <div className="py-2 px-5  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-7">
            <HiOutlineBars3 className="w-6 h-6" />
            <div className="flex space-x-1 items-center">
              <Image
                src={`/youtube.png`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-7.5 h-7.5"
                alt="Logo"
              />
              <p className="text-xl font-bold font-sans">YouTube</p>
            </div>
          </div>

          <div className="w-2xl md:flex items-center hidden">
            <div className="flex items-center space-x-4.5 grow">
              <div className="relative w-full">
                <input
                  placeholder="Search"
                  className="pl-4 py-1.5 w-full border border-gray-200 rounded-3xl rounded-bl-3xl"
                />
                <button className="px-6 border border-gray-200 flex items-center justify-center p-2.5 absolute right-0 top-0 bottom-0 bg-gray-50 rounded-tr-3xl rounded-br-3xl">
                  <IoIosSearch className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-gray-100 rounded-full p-2.5 flex items-center justify-center">
                <MdOutlineKeyboardVoice className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="flex items-center md:space-x-6 space-x-3">
            <IoIosSearch className="w-6 h-6 md:hidden block" />
            <MdOutlineKeyboardVoice className="w-6 h-6 md:hidden block" />
            <div className="bg-gray-100 rounded-3xl px-3.5 py-1.5 flex items-center space-x-1">
              <AiOutlinePlus className="w-6 h-6" />
              <p className="font-bold text-sm">Create</p>
            </div>

            <div className="relative">
              <GoBell className="w-6 h-6" />
              <p className="text-xs px-1 text-center rounded-xl   bg-red-600 text-white absolute -top-1 -right-1.5">
                7+
              </p>
            </div>

            <Image
              src={`/xxx.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-8 h-8 rounded-full object-cover"
              alt="Logo"
            />
          </div>
        </div>
      </div>
      <div className="flex md:hidden px-2 py-3.5 bg-white mb-2.5 space-x-4 w-full overflow-x-hidden ">
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          All
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Music
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Mixes
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Gaming
        </button>
        <button className="block text-nowrap grow  px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Play list
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Chill-out music
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Live
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          News
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Yanni
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Harps
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Hans Zimer
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Music of Ethiopia
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Flute
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          4k Resolution
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Battlegrounds Mobile India
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Electro house music
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          National parks
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Musical notes
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Recently uploaded
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          Watched
        </button>
        <button className="block text-nowrap grow px-3 py-1 bg-gray-200 font-medium rounded-lg">
          New to you
        </button>
      </div>
    </div>
  );
}
