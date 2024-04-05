'use client'

const currentTime = Date.now()
const currentYear = new Date(currentTime).getFullYear();
const Footer: React.FC = () => {

    return (
        <footer className="bg-gray-500">
            <div className="container flex items-center justify-center py-4 text-blackish flex-col">
                <div className="top">
                    Copyright &copy; <b> KICK</b>
                </div>
                All Rights Reserved {currentYear.toString()}
            </div>
        </footer>
    )
}

export default Footer