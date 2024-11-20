import { InputGroup } from "@/components/ui/input-group";
import { GrSearch } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { IoIosInformationCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 pb-6">
      <h3 className="text-2xl">Duas Page</h3>
      <div className="flex items-center gap-32">
        <InputGroup
          className="w-[350px] h-[50px] bg-white  px-0 rounded-[10px]"
          endElement={
            <GrSearch
              className="bg-background h-[80%] rounded-md px-4 cursor-pointer"
              size={52}
            />
          }
        >
          <Input
            className="w-full h-full pl-4 border pr-1 rounded-[10px] focus-within:outline-primary"
            placeholder="Search by dua name"
          />
        </InputGroup>

        <MenuRoot>
          <MenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src={"https://duaruqyah.com/assets/settings/profile.svg"}
                width={45}
                height={45}
                alt="profile"
              />
              <TiArrowSortedDown />
            </div>
          </MenuTrigger>
          <MenuContent className="rounded-lg p-4">
            <MenuItem className="rounded-lg cursor-pointer" value="new-txt">
              <BiSolidDonateHeart className="text-primary pr-1" size={23} />
              Support Us
            </MenuItem>
            <MenuItem className="rounded-lg cursor-pointer" value="new-file">
              <FaDownload className="text-primary pr-1" size={20} />
              Download Dua App
            </MenuItem>
            <MenuItem className="rounded-lg cursor-pointer" value="new-win">
              <MdPrivacyTip className="text-primary pr-1" size={23} />
              Privacy Policy
            </MenuItem>
            <MenuItem className="rounded-lg cursor-pointer" value="open-file">
              <BiSolidBadgeCheck className="text-primary pr-1" size={23} />
              Thanks & Credits
            </MenuItem>
            <MenuItem className="rounded-lg cursor-pointer" value="export">
              <IoIosInformationCircle className="text-primary pr-1" size={23} />
              About Us
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </div>
    </div>
  );
};

export default Navbar;
