import './App.css';
import { Header, About, Home, Projects, Contact } from './components';

const App = () => {
    return (
        <div
            className='flex flex-col top-0 right-0 left-0 bottom-0 h-screen scroll-smooth snap-mandatory snap-y overflow-y-auto scrollbar-hide'
        >
            
            <Header />
            <Home />
            {/* <About />
            <Projects /> */}
            <Contact />
        </div>
    );
};

export default App;
