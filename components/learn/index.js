import { LuTag } from "react-icons/lu";
import { MdOutlineCardGiftcard, MdOutlineLocalShipping } from "react-icons/md";
import { RiCupLine } from "react-icons/ri";
export default function Learn() {
    return (
        <div className="w-full flex flex-col h-auto my-16">
            <div id="image" className=" w-full h-auto flex justify-around items-center">
             <span className="flex items-center">
                <RiCupLine size={20} className="mx-2"/>
                <p className="font-montserrat font-medium text-sm">450+ KIND OF LOOSED TEA</p>
             </span>
             <span className="flex items-center">
                <MdOutlineCardGiftcard size={20} className="mx-2"/>
                <p className="font-montserrat font-medium text-sm">CERTIFIED ORGANIC TEAS</p>
             </span>
             <span className="flex items-center">
                <MdOutlineLocalShipping size={20} className="mx-2"/>
                <p className="font-montserrat font-medium text-sm">FREE DELIVERY</p>
             </span>
             <span className="flex items-center">
                <LuTag size={20} className="mx-2"/>
                <p className="font-montserrat font-medium text-sm">SAMPLES FOR ALL TEAS</p>
             </span>
            </div>
            <div id="write up" className="w-full h-auto flex justify-center items-center">
         
                <button className="sm:w-2/12 h-14 border-black text-black mt-10 border">
                    LEARN MORE
                </button>
            
            </div>
        </div>
    )
}
