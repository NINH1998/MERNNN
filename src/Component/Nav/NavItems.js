const NavItems = ({ data }) => {
    return (
        <li
            className={`flex items-center p-2 justify-end cursor-pointer rounded ${
                data.active ? 'bg-primary text-white' : ''
            }`}
        >
            <h3 className="mr-2">{data.label}</h3>
            <span>{data.icon}</span>
        </li>
    );
};

export default NavItems;
