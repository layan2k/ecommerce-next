import { BiUser } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"

const MainHeader: React.FC = () => {
    return (
        <div className="flex justify-between py-4 items-center container">
            <div className="font-bold text-4xl text-center text-blackish">KICK</div>
            <div className="flex w-full border p-2 border-gray-200 sm:w-[300px] md:w-[70%] justify-between">
                <input type="text"
                    placeholder="Enter any product name.."
                    className="outline-none w-full text-blackish"
                />
                <BsSearch size={20} className="text-blackish cursor-pointer" />
            </div>
            <div className="flex gap-3">
                <BiUser size={30} />
                <div className="relative">
                    <FiHeart size={30} className="cursor-pointer" />
                    <div className="selector__circle__options">0</div>
                </div>
                <div className="relative">
                    <HiOutlineShoppingBag size={30} />
                    <div className="selector__circle__options">0</div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader