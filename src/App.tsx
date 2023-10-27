import './App.css';
import { Header, Home, Contact, Skills } from './components';

const App = () => {
    return (
        <div
            className='flex flex-col top-0 right-0 left-0 bottom-0 h-screen scroll-smooth'
        >
            <Header />
            <Home />
            <Skills />
            {/* <About /> */}
            <Contact />
        </div>
    );
};

export default App;
