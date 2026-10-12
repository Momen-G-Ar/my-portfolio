const Container = ({ className = '', children }: { className?: string; children: React.ReactNode; }) => (
    <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>
);

export default Container;
