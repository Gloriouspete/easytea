import React, { useState } from "react";
import { FaArrowRight, FaList, FaStop } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import Box from "@/components/box/page";
import { useRouter } from "next/navigation";
import { MdOutlinePerson, MdOutlineSearch } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";


export default function Header({ }) {
  const router = useRouter();
  const [firstname, setfirstname] = useState("")
  const [isClick, setisClick] = useState(false);
  // Define the icon components
  const eruku = () => <GoBell size={25} />;

  const xa = () => <FaArrowRight size={32} color="#ffffff" />;

  const [header, setHeader] = useState(eruku);

  return (
    <div className="w-full h-14 md:h-24 flex items-center justify-between bg-transparent px-6 border-black">
      <div className="ml-3 flex items-center">
        <img src="/psychiatry.png" className="rounded-full w-10 h-10 cursor-pointer" onClick={() => router.push("/profile")} />
        <p className="text-lg mx-2 font-prosto">Brand Name </p>
      </div>
      {isClick && <Box />}
      <div className=" flex items-center">
        <span className="w-auto h-full flex font-montserrat mx-2 font-medium" onClick={() => router.push("/profile")}>
          TEA COLLECTIONS
        </span>
        <span className="w-auto h-full flex font-montserrat mx-2 font-medium" onClick={() => router.push("/profile")}>
          ACCESSORIES
        </span>
        <span className="w-auto h-full flex font-montserrat mx-2 font-medium" onClick={() => router.push("/profile")}>
          BLOG
        </span>
        <span className="w-auto h-full flex font-montserrat mx-2 font-medium" onClick={() => router.push("/profile")}>
          CONTACT US
        </span>
      </div>
      <div className="ml-4 flex items-center w-[168px]">
        <span className="h-full w-10" onClick={() => router.push("/profile")}>
         <MdOutlineSearch size={28}/>
        </span>
        <span className="h-full mx-2 w-10" onClick={() => router.push("/profile")}>
         <MdOutlinePerson size={28}/>
        </span>
        <span className="h-full w-10" onClick={() => router.push("/profile")}>
         <RiShoppingBag4Line size={24}/>
        </span>
      </div>
    </div>
  );
}
