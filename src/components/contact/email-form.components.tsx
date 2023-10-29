import React from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const form: any = React.useRef();

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_ogqv0sm', 'template_eff868b', form.current, 'oJXQwzTVaFq3MLnzi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.Name.value = '';
        e.currentTarget.Message.value = '';
        e.currentTarget.Email.value = '';
    };

    return (
        <form
            ref={form as any}
            onSubmit={(e) => { handleSendMessage(e); }}
            className={`
                flex flex-col w-[90%] h-max gap-4 sm:gap-4 
                border-solid border-2 shadow-2xl lg:h-[100%] rounded-lg p-6 font-sans font-medium text-[var(--primary-color)]
            `}>
            <div
                className='flex flex-col sm:col-span-1 row-span-1 gap-[4px]'
            >
                <span className='block'>Name *</span>
                <input
                    name="Name"
                    required
                    type='text'
                    placeholder='Ex: Momin'
                    className={`
                        bg-gray-100 border-solid border-[1px] rounded-[3px] font-normal

                        focus-visible:border-solid focus-visible:border-[1px] focus-visible:border-[var(--primary-color)] outline-none
                    `}
                />
            </div>
            <div
                className='flex flex-col sm:col-span-1 row-span-1 gap-[4px]'
            >
                <span className='block'>Email *</span>
                <input
                    name="Email"
                    required
                    type='email'
                    placeholder='Ex: example@gmail.com'
                    className={`
                        bg-gray-100 border-solid border-[1px] rounded-[3px] font-normal
                        focus-visible:border-solid focus-visible:border-[1px] focus-visible:border-[var(--primary-color)] outline-none
                    `}
                />
            </div>
            <div
                className='flex flex-1 flex-col sm:col-span-2 row-span-1 gap-[4px]'
            >
                <span className='block'>Message *</span>
                <textarea
                    name="Message"
                    placeholder='Write your message'
                    required
                    className={`
                        bg-gray-100 border-solid border-[1px] rounded-[3px] resize-none flex-grow font-normal
                        focus-visible:border-solid focus-visible:border-[1px] focus-visible:border-[var(--primary-color)] outline-none
                    `}
                />
            </div>
            <div className='flex flex-col sm:col-span-2 row-span-1 justify-center'>
                <button
                    type="submit"
                    className={`
                        bg-[var(--background-from-primary-color)] border-[1px] border-solid border-[var(--primary-color)]
                        rounded-md
                    `}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EmailForm;