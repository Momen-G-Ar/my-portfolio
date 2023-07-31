import './App.css';
import { Header, About, Home } from './components';

const App = () => {
    return (
        <div className='flex flex-col top-0 right-0 left-0 bottom-0 scroll-smooth'>
            <Header />
            <Home />
            <About />
        </div>
    );
};

export default App;
