import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {

    // const navLinks = ["Phones", "Macbooks", "Tablets"]

    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img className="cursor-pointer" src={appleImg} alt="Logo" height={18} width={14} />

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav, i) => (
                        <div className="px-5 text-sm text-gray hover:text-white cursor-pointer transition-all" key={i}>{nav}</div>
                    ))}
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
                    <img src={searchImg} alt="search" width={18} />
                    <img src={bagImg} alt="bag" width={18} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;