import './App.css';
import { Header, Home, Contact } from './components';

const App = () => {
    return (
        <div
            className='flex flex-col top-0 right-0 left-0 bottom-0 h-screen scroll-smooth sm:snap-mandatory sm:snap-y sm:overflow-y-auto sm:scrollbar-hide'
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
