import { BiTime } from 'react-icons/bi';

const MovieCard = ({ data }) => {
    return (
        <div className="bg-primary rounded-md shadow-md shadow-primary relative overflow-hidden hover:shadow-lg cursor-pointer hover:shadow-primary transition ease-out duration-200">
            <img src={data.src} alt="" className="w-full" />
            <div className="p-4 text-white">
                <h4>{data.title}</h4>
                <p>{data.main}</p>
            </div>
            <div className="flex justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 p-2 min-w-[25%] ">
                <BiTime />
                <p>{data.runtimes}</p>
            </div>
        </div>
    );
};

export default MovieCard;
