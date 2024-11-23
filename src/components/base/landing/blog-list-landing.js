import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BlogListLanding = () => {
    const navigate = useNavigate();

    const blogs = [
        { title: 'Top 5 soluciones "made in Spain"', subtitle: '¿Estás buscando soluciones 5 jotas?', image: 'https://static.vecteezy.com/system/resources/thumbnails/050/799/447/small/laptop-and-coffee-cup-on-black-table-in-office-workplace-concept-photo.jpeg', link: '/blog/673f5faf25363238ff713401' },
        { title: '¿Cómo elegir la solución digital perfecta?', subtitle: 'Sigue estos pasos y acierta de una vez.', image: 'https://t4.ftcdn.net/jpg/07/14/09/81/360_F_714098125_aUmRxNTyegdNBF9QtcFKMouIJNaER9H7.jpg', link: '/blog/673f617b25363238ff713406' },
        { title: '¿Desarrollar app in-house o subcontratar?', subtitle: 'Descubre la mejor opción para tu negocio.', image: 'https://pixelplex.io/next/images/ios-app-development/header/ios-app-development-background.jpg', link: '/blog/673f629b25363238ff71340b' },
        { title: 'Errores que debes evitar al digitalizar tu negocio', subtitle: '¿Estás preparado para evitar el caos?', image: 'https://img.freepik.com/premium-photo/minimalistic-dark-office-desk-setup-with-computer-lamp-sleek-modern-workspace-professional_210545-14101.jpg', link: '/blog/673f645e25363238ff713412' },
    ];

    const goToBlog = (link) => {
        navigate(link);
    };

    return (
        <div className="h-fit-content pb-10 md:pb-20 flex flex-col gap-10">
            <div className="flex gap-4 items-center justify-between pr-1">
                <span className="text-2xl md:text-7xl pl-10 pt-10 pb-6 text-white">
                    LAS ÚLTIMAS NOVEDADES
                </span>
                <div className="w-40 md:w-80 border-2 border-gridyellow text-4xl md:text-8xl text-gridyellow flex pl-3 md:pl-14 items-center rounded-full h-14 md:h-32">
                    <FaArrowDown className="transform rotate-45" />
                </div>
            </div>
            <div className="flex items-center overflow-x-scroll gap-6 pl-8 pr-4 md:pl-20">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 w-1/3 max-w-xs min-h-60 md:min-h-4 relative rounded-xl text-white bg-cover bg-center bg-no-repeat"
                        style={{
                            minWidth: "40.333%",
                            backgroundImage: `url(${blog.image})`,
                        }}
                    >
                        <div className="h-20 md:h-48 flex flex-col p-2 rounded-md">
                            <span className="text-sm md:text-2xl pr-1 md:pr-20 uppercase">{blog.title}</span>
                            <span className="text-xxs md:text-md pr-1 md:pr-20 text-white">{blog.subtitle}</span>
                        </div>

                        <button
                            className="bg-gridyellow text-black px-4 py-1 rounded-xl absolute bottom-2 right-2"
                            onClick={() => goToBlog(blog.link)}
                        >
                            <IoIosArrowRoundForward size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogListLanding;
