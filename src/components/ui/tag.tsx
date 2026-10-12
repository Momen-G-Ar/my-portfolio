const Tag = ({ children }: { children: React.ReactNode; }) => (
    <span className='rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted'>
        {children}
    </span>
);

export default Tag;
