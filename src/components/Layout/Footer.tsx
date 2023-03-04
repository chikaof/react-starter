import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

export interface FooterProps {}

export default function Footer({}: FooterProps): JSX.Element {
  return (
    <div className="fixed bottom-0 mt-6 mb-6 w-full text-gray-500">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <p>Made with ❤ by</p>
          <div className="flex items-center space-x-1">
            <Link href="https://github.com/chikaof" rel="noreferrer">
              Chika
            </Link>
            <BiLinkExternal size={12} />
          </div>
        </div>
        <a href="https://twitter.com/chika" target="_blank" rel="noreferrer">
          <BsTwitter
            size={18}
            className="transition-colors duration-100 hover:text-white"
          />
        </a>
      </div>
    </div>
  );
}
