import { BiSolidBadgeCheck, BiSolidDonateHeart } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";

export const dropdownItems = [
  {
    text: "Support Us",
    path: "#",
    icon: <BiSolidDonateHeart className="text-primary pr-1" size={23} />,
  },
  {
    text: "Download Dua App",
    path: "#",
    icon: <FaDownload className="text-primary pr-1" size={20} />,
  },
  {
    text: "Privacy Policy",
    path: "#",
    icon: <MdPrivacyTip className="text-primary pr-1" size={23} />,
  },
  {
    text: "Thanks & Credits",
    path: "#",
    icon: <BiSolidBadgeCheck className="text-primary pr-1" size={23} />,
  },
  {
    text: "About Us",
    path: "#",
    icon: <IoIosInformationCircle className="text-primary pr-1" size={23} />,
  },
];
