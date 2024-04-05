import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

const TopHeader: React.FC = () => {
    return (
        <div className="justify-between flex container py-4 ">
            {/* Left */}
            <div className="flex gap-1">
                <div className="header__top__icon__wrapper">
                    <BsFacebook />
                </div>
                <div className="header__top__icon__wrapper">
                    <BsTwitter />
                </div>
                <div className="header__top__icon__wrapper">
                    <BsInstagram />
                </div>
                <div className="header__top__icon__wrapper">
                    <BsLinkedin />
                </div>
            </div>
            {/* Center */}
            <div className="text-gray-500 text-[12px]">
                <strong>FREE SHIPPING </strong>
                THIS WEEK FOR ORDER OVER -$55
            </div>
            {/* RIght */}
            <div>
                <select name="currency" id="currency" className="text-gray-500 outline-none text-[12px] w-[80px]">
                    <option className="selector__top__options" value="USD">USD $</option>
                    <option className="selector__top__options" value="EUR">EUR €</option>
                    <option className="selector__top__options" value="GBP">GBP £</option>
                    <option className="selector__top__options" value="INR">INR ₹</option>
                </select>
                <select name="language" id="language" className="text-gray-500 outline-none text-[12px] w-[80px]">
                    <option className="selector__top__options" value="English">English</option>
                    <option className="selector__top__options" value="French">French</option>
                </select>
            </div>
        </div>
    )
}

export default TopHeader