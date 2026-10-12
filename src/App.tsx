import useReveal from './hooks/use-reveal';
import Header from './components/sections/header';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Competitive from './components/sections/competitive';
import Community from './components/sections/community';
import Skills from './components/sections/skills';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';

const App = () => {
    useReveal();

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Competitive />
                <Community />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;
