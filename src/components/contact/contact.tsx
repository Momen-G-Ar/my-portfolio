import { EmailForm } from "..";
import Icons from '../../icons';

const Contact = () => {
    return (
        <section id='contact' className=' flex justify-center'>
            <div
                className={`
                    w-screen font-sans grid 
                    grid-cols-1 grid-rows-[0.6fr_1fr_0.2fr] 
                    lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr_0.08fr]
                `}
            >
                <div
                    className={`
                        min-w-full flex flex-col 
                        lg:justify-start lg:items-center lg:pt-52 lg:pl-20
                        justify-center items-center
                        `}
                >
                    <h1 data-aos="fade-up" className={`
                        flex pl-6 mt-6 sm:mt-16 lg:mt-0
                        lg:justify-start lg:text-2xl 
                        text-[var(--primary-color)] font-semibold mb-[15px] min-w-full text-base 
                    `}

                    >
                        Contact me
                    </h1>
                    <p className={`min-w-full flex justify-start items-center pl-6`}>
                        Need to get touch with me? Either fill out the form with your inquiry or use my accounts to contact me, Feel free to contact my on any time.
                    </p>
                    <div className={`
                        min-w-full flex flex-col justify-center items-center lg:items-start lg:justify-start mt-8 pl-6
                    `}>
                        {/* links will be here for social media and git and email and phone */}
                        <ul className="flex flex-col gap-2 font-normal text-[var(--primary-color)] text-xl">
                            <li>
                                <a
                                    href="https://github.com/Momen-G-Ar"
                                    className="flex justify-start items-center hover:[text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]"
                                >
                                    <Icons.AiFillGithub size={'42px'} /> &nbsp;Momen-G-Ar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:cp.momen@gmail.com"
                                    className="flex justify-start items-center hover:[text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]"
                                >
                                    <Icons.HiOutlineMail size={'42px'} /> &nbsp;cp.momen@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/+972597456589"
                                    className="flex justify-start items-center hover:[text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]"
                                >
                                    <Icons.BsWhatsapp size={'42px'} /> &nbsp; +972-597456589
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://maps.apple.com/place?auid=16574875474150632388&lsp=7618"
                                    className="flex justify-start items-center hover:[text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]"
                                >
                                    <Icons.SlLocationPin size={'42px'} /> &nbsp; Hebron, Palestine
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`
                        flex lg:justify-start lg:items-start lg:pt-52 lg:pl-24
                        justify-center items-center w-full
                    `}
                >
                    <EmailForm />
                </div>

                <div
                    className='flex justify-center items-center row-span-1 min-h-[50px] lg:col-span-2 bg-[var(--background-from-primary-color)]'
                >
                    <ul className="flex flex-row gap-4 font-normal text-[var(--primary-color)]">
                        <li title="FaceBook">
                            <a
                                href="https://www.facebook.com/momenarafeh22"
                            >
                                <Icons.BsFacebook
                                    size={'32px'}
                                    className="transition transform duration-300 hover:scale-125"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/momenarafeh"
                                className=""
                            >
                                <Icons.BsInstagram
                                    size={'32px'}
                                    className="transition transform duration-300 hover:scale-125"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/momin-arafa/"
                            >
                                <Icons.BsLinkedin
                                    size={'32px'}
                                    className="transition transform duration-300 hover:scale-125"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/MominArafa"

                            >
                                <Icons.BsTelegram
                                    size={'32px'}
                                    className="transition transform duration-300 hover:scale-125" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;