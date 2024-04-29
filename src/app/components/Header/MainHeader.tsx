'use client'
import { BiUser } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import Link from "next/link"
import { useState } from "react"

const MainHeader: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const updateCartCondition = (): void => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className="flex justify-between py-4 items-center container">
            <Link href="/" className="font-bold text-4xl text-center text-blackish">KICK</Link>
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
                <div className="relative" onClick={updateCartCondition}>
                    <HiOutlineShoppingBag size={30} className="cursor-pointer" />
                    <div className="selector__circle__options">0</div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader