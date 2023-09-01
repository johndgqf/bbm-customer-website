"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import Button from "@/components/ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/components/avatar";
import MenuItem from "@/components/menu-item";
import useRegisterModal from "@/hooks/use-register-modal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  // Set the default state for isOpen to false
  const [isOpen, setIsOpen] = useState(false);
  // Reverse the state to the opposite state
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto relative items-center gap-x-4">
      {/* <Button
        onClick={() => {}}
        className="flex items-center border-[1px] rounded-full bg-white px-4 py-2"
      >
        <User size={20} color="black" />
      </Button> */}
      {/* <div
        onClick={toggleOpen}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="">
          <Avatar />
        </div>
        {isOpen && (
          <div
            className="
            absolute 
            rounded-xl 
            shadow-md
            md:w-40
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            z-10
          "
          >
            <div className="flex flex-col cursor-pointer">
              <>
                <MenuItem onClick={() => {}} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                <MenuItem onClick={() => {}} label="Logout" />
              </>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default UserMenu;

