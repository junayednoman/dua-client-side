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
import DDrawer from "@/components/DDrawer";
import { BsFillGearFill } from "react-icons/bs";
import RightSidebar from "./RightSidebar";
import Container from "@/components/Container";
import Link from "next/link";
import logoImg from "@/assets/dua-logo.svg";

const Navbar = () => {
  return (
    <div className="xl:bg-background bg-white xl:py-6 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold xl:ml-32 xl:block hidden">
            Duas Page
          </h3>

          <Link href={"/"} className="flex items-center gap-3 xl:hidden">
            <Image src={logoImg} width={52} height={52} alt="logo" />
            <h3 className="text-xl font-semibold xl:ml-32 sm:block hidden">
              Duas & Ruqyah
            </h3>
          </Link>

          <div className="flex items-center xl:gap-[210px] gap-8">
            <InputGroup
              className="lg:w-[350px] w-[280px] h-[50px] bg-white px-0 rounded-lg smallShadow md:flex hidden"
              endElement={
                <GrSearch
                  className="bg-background h-[80%] rounded-md px-4 cursor-pointer text-lightBlack"
                  size={52}
                />
              }
            >
              <Input
                className="w-full h-full pl-4 border pr-1 rounded-lg focus-within:outline-primary"
                placeholder="Search by dua name"
              />
            </InputGroup>

            <div className="flex items-center gap-4">
              {/* settings drawer */}
              <div className="2xl:hidden block">
                <DDrawer
                  trigger={
                    <BsFillGearFill
                      size={22}
                      className="text-primary cursor-pointer"
                    />
                  }
                >
                  <RightSidebar />
                </DDrawer>
              </div>

              {/* profile dropdown */}
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
                  <MenuItem
                    className="rounded-lg cursor-pointer"
                    value="new-txt"
                  >
                    <BiSolidDonateHeart
                      className="text-primary pr-1"
                      size={23}
                    />
                    Support Us
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg cursor-pointer"
                    value="new-file"
                  >
                    <FaDownload className="text-primary pr-1" size={20} />
                    Download Dua App
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg cursor-pointer"
                    value="new-win"
                  >
                    <MdPrivacyTip className="text-primary pr-1" size={23} />
                    Privacy Policy
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg cursor-pointer"
                    value="open-file"
                  >
                    <BiSolidBadgeCheck
                      className="text-primary pr-1"
                      size={23}
                    />
                    Thanks & Credits
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg cursor-pointer"
                    value="export"
                  >
                    <IoIosInformationCircle
                      className="text-primary pr-1"
                      size={23}
                    />
                    About Us
                  </MenuItem>
                </MenuContent>
              </MenuRoot>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
