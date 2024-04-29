import Link from "next/link"

const BottomHeader = () => {
    return (
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                    <Link href="/" className="navbar__link relative cursor-pointer">HOME</Link>
                    <Link href="/categories" className="navbar__link relative cursor-pointer">CATEGORIES</Link>
                    <div className="navbar__link relative cursor-pointer">{`MEN'S`}</div>
                    <div className="navbar__link relative cursor-pointer">{`WOMEN'S`}</div>
                    <div className="navbar__link relative cursor-pointer">JEWLERY</div>
                    <div className="navbar__link relative cursor-pointer">PERFUME</div>
                    <div className="navbar__link relative cursor-pointer">BLOG</div>
                    <div className="navbar__link relative cursor-pointer">HOT OFFERS</div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader