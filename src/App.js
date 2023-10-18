import './App.css';
import AuthButton from './Component/Button/AuthButton';
import Nav from './Component/Nav';
import Header from './Component/Header/header';
import Trending from './Component/Trending/Trending';

function App() {
    return (
        <div className="grid md:grid-cols-5">
            <Nav />
            <main className="px-12 py-6 md:col-span-4 bg-cyan-50 ">
                <AuthButton />
                <Header />
                <Trending />
            </main>
        </div>
    );
}
export default App;
