import Link from "next/link";
import IconButton from "@/components/ui/IconButton";
import { BsGithub } from "react-icons/bs";
import { Dropdown, DropdownItem } from "../ui/Dropdown";
import { BiArchive } from "react-icons/bi";

export interface HeaderProps {}

export default function Header({}: HeaderProps): JSX.Element {
  return (
    <header className="sticky top-0 z-40 w-full py-4 bg-midnight duration-300">
      <div className="flex container pl-4 pr-4 md:pl-0 md:pr-0 items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center cursor-pointer text-white hover:text-gray-300 transition-all">
            <h1 className="text-xl ml-2 mr-2">App</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <IconButton icon={<BsGithub size={20} />} />
        </div>
      </div>
    </header>
  );
}
