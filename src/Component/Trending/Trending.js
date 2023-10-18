import { dataMovie } from './DataMovie';
import MovieCard from './MovieCard';

const Trending = () => {
    return (
        <div>
            <h3 className="border-b border-primary mt-12 mb-6 pb-5">Trending</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {dataMovie.map((data, index) => (
                    <MovieCard key={index} data={data} />
                ))}
            </div>
            <div className="flex justify-center mb-12 mt-4">
                <button className="btn mt-10 hover:scale-115 transition ease-out duration-200">Register</button>
            </div>
        </div>
    );
};

export default Trending;
