import { RiChatVoiceFill, RiUser2Line } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

import DarkMode from "./DarkMode";

export default function Aside() {
  return (
    <nav className="min-h-screen  ">
      <div className="py-4 min-h-screen col-span-1 flex flex-col justify-between items-center">
        <div>
          <RiChatVoiceFill />
        </div>
        <div className="flex flex-col gap-2 ">
          <RiUser2Line />
          <BiMessageSquareDots />
          <TbUsers />
          <FiSettings />
        </div>
        <div>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}
