
import BottomHeader from "./BottomHeader"
import MainHeader from "./MainHeader"
import TopHeader from "./TopHeader"


const Header: React.FC = () => {
    return (
        <nav>
            <div>
                {/* Top Header */}
                <div className="hidden border-b border-gray-200 items-center sm:block">
                    <TopHeader />
                </div>
                {/* Main Header */}
                <div className="hidden border-b border-gray-200 items-center sm:block">
                    <MainHeader />
                </div>
                {/* Bottom Header */}
                <div className="">
                    <BottomHeader />
                </div>
            </div>
        </nav>
    )
}

export default Header