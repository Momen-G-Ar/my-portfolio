import React from 'react';

/** Cycles through `words`, typing and deleting each one. */
const useTypewriter = (words: string[], typeMs = 70, holdMs = 1800) => {
    const [index, setIndex] = React.useState(0);
    const [text, setText] = React.useState('');
    const [deleting, setDeleting] = React.useState(false);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setText(words[0] ?? '');
            return;
        }
        const word = words[index % words.length] ?? '';
        let delay = deleting ? typeMs / 2 : typeMs;
        if (!deleting && text === word) delay = holdMs;

        const timer = window.setTimeout(() => {
            if (!deleting && text === word) {
                setDeleting(true);
            } else if (deleting && text === '') {
                setDeleting(false);
                setIndex((i) => i + 1);
            } else {
                setText(word.slice(0, text.length + (deleting ? -1 : 1)));
            }
        }, delay);
        return () => window.clearTimeout(timer);
    }, [words, index, text, deleting, typeMs, holdMs]);

    return text;
};

export default useTypewriter;
