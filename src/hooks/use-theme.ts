import React from 'react';

export type Theme = 'dark' | 'light';

const useTheme = () => {
    const [theme, setTheme] = React.useState<Theme>(
        () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'),
    );

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Storage can be unavailable (private mode); the theme still applies for this visit.
        }
    }, [theme]);

    const toggleTheme = () => setTheme((old) => (old === 'dark' ? 'light' : 'dark'));

    return { theme, toggleTheme };
};

export default useTheme;
