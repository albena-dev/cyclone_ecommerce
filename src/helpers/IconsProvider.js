import { AiOutlineYoutube } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsFillTelephoneXFill } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaPinterestP, FaReddit, FaRegHeart } from "react-icons/fa";
import { FaCartShopping, FaCodeCompare } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoIosHelpCircleOutline, IoLogoInstagram } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

export const icons = {
  twitter: <CiTwitter />,
  facebook: <FaFacebook />,
  pinterest: <FaPinterestP />,
  reddit: <FaReddit />,
  youtube: <AiOutlineYoutube />,
  instagram: <IoLogoInstagram />,
  search: <IoSearchOutline />,
  location: <GrLocation />,
  cart: <FaCartShopping />,
  heart: <FaRegHeart />,
  user: <LuUserRound />,
  compare: <FaCodeCompare />,
  customerSupport: <BiSupport />,
  help: <IoIosHelpCircleOutline />,
  call: <BsFillTelephoneXFill />,
};
