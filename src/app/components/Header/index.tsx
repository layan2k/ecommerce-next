import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"


const Header: React.FC = () => {
    return (
        <nav>
            <div>
                {/* Top Nav */}
                <div className="hidden justify-between py-4 border-b border-gray-200 items-center sm:flex">
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
                        <select name="currency" id="currency" className="text-gray-500 outline-none">
                            <option className="selector__top__options" value="USD">USD $</option>
                            <option className="selector__top__options" value="EUR">EUR €</option>
                            <option className="selector__top__options" value="GBP">GBP £</option>
                            <option className="selector__top__options" value="INR">INR ₹</option>
                        </select>
                        <select name="language" id="language" className="text-gray-500 outline-none">
                            <option className="selector__top__options" value="English">English</option>
                            <option className="selector__top__options" value="French">French</option>
                        </select>
                    </div>
                </div>
                {/* Middle Nav */}
                <div className="flex justify-between">
                    <div>Left</div>
                    <div>Center</div>
                    <div>Right</div>
                </div>
                {/* Bottom Nave */}
                <div className="flex justify-between">
                    <div>Left</div>
                    <div>Center</div>
                    <div>Right</div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </nav>
    )
}

export default Header