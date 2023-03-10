import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiLinkExternal } from "react-icons/bi";
import Button, { type ButtonProps } from "./Button";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";

interface DropdownProps extends ButtonProps {
  title?: string | undefined;
  external?: boolean;
  onClick?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={Button} className={props.className}>
        {props.title} <BsChevronDown className="ml-2" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute py-1 px-2 right-2 mt-2 w-56 origin-top-right divide-y z-40 divide-gray-100 rounded-md bg-midnight border border-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{props.children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export const DropdownItem = (props: DropdownProps) => {
  return (
    <Menu.Item>
      <div
        className={`cursor-pointer block justify-between rounded text-stone-200 px-3 py-2 text-sm hover:bg-midnightLight duration-200
        ${props.className}`}
        onClick={props.onClick}
      >
        <div className="flex items-center">
          {props.children}
          {props.icon && !props.external && (
            <div className="ml-auto">{props.icon}</div>
          )}
          {props.external && (
            <div className="ml-2">
              <BiLinkExternal size={12} className="text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </Menu.Item>
  );
};
