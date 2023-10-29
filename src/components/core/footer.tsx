import Icons from '../../icons';

const Footer = () => {
    return (
        <footer id='footer' className='mt-5 bg-gradient-to-r from-green-400 to-green-600'>
            <div className={`
                flex flex-col mx-auto justify-start items-center pt-20 w-full gap-5 h-[300px]
                md:h-[250px] md:container md:pt-5 md:px-10
            `}>
                <h2
                    data-aos="fade-up" data-aos-duration="1200"
                    className={`
                        text-6xl font-bold
                    `}>
                    Let's Talk
                </h2>
                <div className={`
                    flex flex-row gap-5
                `}>
                    <a
                        href='https://wa.me/+972597456589'
                        target="_blank"
                        className='flex flex-col items-center'
                        data-aos="fade-up" data-aos-duration="1200"
                    >
                        <Icons.IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
                        <span className='text-slate-200]'>WhatsApp</span>
                    </a>
                    <a
                        href='https://t.me/MominArafa'
                        target="_blank"
                        className='flex flex-col items-center'
                        data-aos="fade-up" data-aos-duration="1200"
                    >
                        <Icons.FaTelegram className=" text-black text-3xl hover:scale-125 cursor-pointer" />
                        <span className='text-slate-200]'>Telegram</span>
                    </a>
                    <a
                        href='https://www.instagram.com/momenarafeh/'
                        target="_blank"
                        className='flex flex-col items-center'
                        data-aos="fade-up" data-aos-duration="1200"
                    >
                        <Icons.AiFillInstagram className=" text-black text-3xl hover:scale-125 cursor-pointer" />
                        <span className='text-slate-200]'>Instagram</span>
                    </a>
                </div>
                <div className='text-[0.7rem] sm:text-lg'>
                    | Copyright &copy; <span>2023 Momin Arafa </span> All rights reserved |
                </div>
            </div>
        </footer>
    );
};

export default Footer;