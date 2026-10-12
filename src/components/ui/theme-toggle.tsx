import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../../hooks/use-theme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type='button'
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className='grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent'
        >
            {isDark ? <FiSun /> : <FiMoon />}
        </button>
    );
};

export default ThemeToggle;
