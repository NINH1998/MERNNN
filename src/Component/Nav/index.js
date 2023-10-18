import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi';
import NavItems from './NavItems';
import { useState } from 'react';

const sizeIcons = '1.875rem';

const items = [
    {
        label: 'Home',
        icon: <BiHomeAlt size={sizeIcons} />,
        active: true,
    },
    {
        label: 'Movie',
        icon: <BiMoviePlay size={sizeIcons} />,
    },
    {
        label: 'About',
        icon: <BiInfoCircle size={sizeIcons} />,
    },
];

function Nav() {
    const [NavOpen, setNavItems] = useState(false);

    const hanldeOpenNav = () => {
        setNavItems(!NavOpen);
    };

    return (
        <div className="col-span-1 bg-cyan-200">
            <div className="flex justify-between items-center md:block mx-4">
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
                    Phimmoi.net
                </h4>
                <BiMenu className="cursor-pointer md:hidden" size={sizeIcons} onClick={hanldeOpenNav} />
            </div>

            <ul className={`mx-4 my-2 ${NavOpen ? '' : 'hidden'} md:block`}>
                {items.map((data, index) => (
                    <NavItems data={data} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default Nav;
