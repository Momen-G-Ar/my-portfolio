import React from 'react';
import emailjs from '@emailjs/browser';
import { FiMail } from 'react-icons/fi';
import profile from '../../data/profile';
import Section from '../ui/section';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
    'w-full rounded-md border border-line bg-bg px-3 py-2 text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent';

const Contact = () => {
    const form = React.useRef<HTMLFormElement>(null);
    const [status, setStatus] = React.useState<Status>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        setStatus('sending');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
            );
            form.current.reset();
            setStatus('sent');
        } catch {
            setStatus('error');
        }
    };

    return (
        <Section id='contact' label='contact' title="Let's talk">
            <div className='grid gap-10 md:grid-cols-2'>
                <div className='reveal space-y-6'>
                    <p className='text-lg text-muted'>
                        Have a question, an opportunity, or a contest to organize? Send me a message with the form or reach me
                        on any of these.
                    </p>
                    {profile.email && (
                        <a href={`mailto:${profile.email}`} className='inline-flex items-center gap-2 text-accent hover:underline'>
                            <FiMail /> {profile.email}
                        </a>
                    )}
                    <ul className='flex flex-wrap gap-2'>
                        {profile.socials.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent'
                                >
                                    <Icon /> {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <form ref={form} onSubmit={handleSubmit} className='reveal space-y-4 rounded-xl border border-line bg-surface p-6'>
                    {/* Field names must match the EmailJS template variables. */}
                    <label className='block'>
                        <span className='mb-1 block text-sm text-muted'>Name</span>
                        <input name='Name' required type='text' autoComplete='name' className={inputClass} />
                    </label>
                    <label className='block'>
                        <span className='mb-1 block text-sm text-muted'>Email</span>
                        <input name='Email' required type='email' autoComplete='email' className={inputClass} />
                    </label>
                    <label className='block'>
                        <span className='mb-1 block text-sm text-muted'>Message</span>
                        <textarea name='Message' required rows={5} className={`${inputClass} resize-y`} />
                    </label>
                    <button
                        type='submit'
                        disabled={status === 'sending'}
                        className='w-full rounded-md bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60'
                    >
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                    <p role='status' className='min-h-5 text-sm'>
                        {status === 'sent' && <span className='text-accent'>Thanks! Your message was sent.</span>}
                        {status === 'error' && <span className='text-red-500'>Something went wrong. Please try again or use the links.</span>}
                    </p>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
